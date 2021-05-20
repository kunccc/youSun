<template>
	<view class="me">
		<view class="info">
			<view class="head">
				<view @click="login" class="img"><image :src="avatarUrl || '../../static/noLogin.png'" :class="{ isLoginIn: nickName }"></image></view>
				<text v-if="!nickName" @click="login">未登录</text>
				<text v-else>{{ nickName }}</text>
			</view>
			<view class="collection">
				<view class="wrapper" @click="go('collection')">
					11
					<br />
					商品收藏
				</view>
				<view class="wrapper" @click="go('history')">
					34
					<br />
					浏览记录
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
					<text>0</text>
				</view>
				<view @click="go('address')">收货地址</view>
				<view @click="go('contact')">联系客服</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nickName: '',
			avatarUrl: ''
		}
	},
	onShow() {
		uni.getStorage({
			key: 'nickName',
			success: res => (this.nickName = res.data)
		})
		uni.getStorage({
			key: 'avatarUrl',
			success: res => (this.avatarUrl = res.data)
		})
	},
	methods: {
		jump(value) {
			uni.navigateTo({
				url: `./components/detail?page=${value}`
			})
		},
		go(value) {
			uni.navigateTo({
				url: `./components/${value}`
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
			if(this.nickName) return
			this.getInfo()
				.then(res => {
					this.nickName = res.nickName
					this.avatarUrl = res.avatarUrl
				})
				.catch(err => console.log(err))
				.then(() => {
					uni.setStorageSync('nickName', this.nickName)
					uni.setStorageSync('avatarUrl', this.avatarUrl)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.me {
	background: #1bbb5a;
	min-height: 100vh;
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
		min-height: 100vh;
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
					image {
						width: 30rpx;
						height: 30rpx;
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
				font-size: 28rpx;
			}
		}
	}
}
</style>
