<template>
	<view class="me">
		<view class="info">
			<view class="head">
				<view @click="login" class="img"><image :src="user.avatarUrl || '../../static/noLogin.png'" :class="{ isLoginIn: user.nickName }"></image></view>
				<text v-if="!user.nickName" @click="login">未登录</text>
				<text v-else>{{ user.nickName }}</text>
			</view>
			<view class="collection">
				<view class="wrapper" @click="go('collection')">
					{{ collectionCounts }}
					<br />
					我的收藏
				</view>
				<view class="wrapper" @click="go('history')">
					{{ historyCounts }}
					<br />
					我的足迹
				</view>
			</view>
		</view>
		<view class="detail">
			<view class="order">
				<view class="header">
					我的订单
					<view @click="jump('1')">
						查看全部
						<image src="../../static/right.png"></image>
					</view>
				</view>
				<view class="wrapper" @click="jump('2')">
					<view><image src="../../static/deliver.png" /></view>
					待发货
				</view>
				<view class="wrapper" @click="jump('3')">
					<view><image src="../../static/receive.png" /></view>
					待收货
				</view>
				<view class="wrapper" @click="jump('4')">
					<view><image src="../../static/comment.png" /></view>
					待评价
				</view>
				<view class="wrapper" @click="jump('5')">
					<view><image src="../../static/afterSales.png" /></view>
					售后
				</view>
			</view>
			<view class="tools">
				<view @click="go('coupon')">
					优惠券
					<text>{{ coupon.length }}</text>
				</view>
				<view @click="open">收货地址</view>
				<button open-type="contact">联系客服</button>
			</view>
		</view>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { checkLogin } from '../components/checkLogin.js'

export default {
	computed: {
		...mapGetters(['collectionCounts', 'historyCounts', 'coupon', 'user'])
	},
	methods: {
		...mapMutations(['setUser']),
		jump(value) {
			checkLogin().then(() => {
				uni.navigateTo({
					url: `./components/allOrders?page=${value}`
				})
			})
		},
		go(value) {
			checkLogin().then(() => {
				uni.navigateTo({
					url: `./components/${value}`
				})
			})
		},
		getInfo() {
			return new Promise((resolve, reject) => {
				uni.getUserProfile({
					desc: '登录',
					success: res => resolve(JSON.parse(res.rawData)),
					fail: err => reject(err)
				})
			})
		},
		login() {
			if (this.user.nickName) return
			this.getInfo()
				.then(res => {
					uni.showLoading({
						title: '登录中',
						mask: true
					})
					const nickName = res.nickName
					const avatarUrl = res.avatarUrl
					uni.setStorageSync('nickName', nickName)
					uni.setStorageSync('avatarUrl', avatarUrl)
					setTimeout(() => {
						this.setUser({ nickName, avatarUrl })
						uni.hideLoading()
						uni.showToast({
							title: '登录成功'
						})
					}, 1500)
				})
				.catch(err => console.log(err))
		},
		getAddress() {
			return new Promise((resolve, reject) => {
				uni.authorize({
					scope: 'scope.address',
					success() {
						uni.chooseAddress({
							success: res => resolve(res),
							fail: err => reject(err)
						})
					}
				})
			})
		},
		open() {
			checkLogin().then(() => {
				this.getAddress()
					.then(res => {
						const address = res.provinceName + res.cityName + res.countyName + res.detailInfo
						const userName = res.userName
						const telNumber = res.telNumber
						uni.setStorageSync('address', address)
						uni.setStorageSync('userName', userName)
						uni.setStorageSync('telNumber', telNumber)
						this.setUser({ address, userName, telNumber })
					})
					.catch(err => console.log(err))
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.me {
	background: #1bbb5a;
	height: calc(100vh - 94px);
	display: flex;
	flex-direction: column;
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 20rpx;
		.head {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #fff;
			margin: 40rpx 0;
			.img {
				background: #fff;
				width: 160rpx;
				height: 160rpx;
				border-radius: 100%;
				margin-bottom: 20rpx;
				overflow: hidden;
				text-align: center;
				image {
					margin-top: 26rpx;
					width: 130rpx;
					height: 130rpx;
					&.isLoginIn {
						margin-top: 0;
						width: 160rpx;
						height: 160rpx;
					}
				}
			}
		}
		.collection {
			display: flex;
			color: #fff;
			> .wrapper {
				text-align: center;
				margin: 0 70rpx;
			}
		}
	}
	.detail {
		background: #f2f2f2;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		flex: 1;
		padding: 30rpx;
		.order {
			background: #fff;
			border-radius: 30rpx;
			display: flex;
			flex-wrap: wrap;
			padding: 30rpx;
			justify-content: space-around;
			margin-bottom: 30rpx;
			.header {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 30rpx;
				> view {
					display: flex;
					align-items: center;
					color: #999;
					image {
						width: 20rpx;
						height: 20rpx;
						margin-left: 6rpx;
					}
				}
			}
			> .wrapper {
				text-align: center;
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
		.tools {
			background: #fff;
			border-radius: 30rpx;
			display: flex;
			padding: 30rpx;
			justify-content: space-around;
			text {
				margin-left: 10rpx;
				font-size: 26rpx;
				color: #666;
			}
			button {
				margin: 0;
				padding: 0;
				font-size: 14px;
				line-height: 21px;
				background: none;
				color: #333;
				&::after {
					display: none;
				}
			}
		}
	}
}
</style>
