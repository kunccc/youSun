<template>
	<view class="confirmOrder">
		<view class="header">
			<view class="userInfo">
				<view class="address">{{ user.address || '请添加地址' }}</view>
				<view>{{ user.userName || '' }}&nbsp;&nbsp;&nbsp;{{ user.telNumber || '' }}</view>
			</view>
			<image @click="open" src="../../static/right.png" />
		</view>
		<view class="main">
			<view v-if="good.id" class="goodInfo">
				<view class="img"></view>
				<view class="detail">
					<view class="name">{{ good.name }}</view>
					<view class="wrapper">
						<view class="price">￥{{ good.price }}</view>
						<view class="picker">
							<view class="minus" @click="minus(good)" :class="{ minimun: good.count === 1 }" />
							<view class="count">{{ good.count }}</view>
							<view class="plus" @click="plus(good)" />
						</view>
					</view>
				</view>
			</view>
			<view v-else class="goodInfo" v-for="(item, index) in order" :key="index">
				<view class="img"></view>
				<view class="detail">
					<view class="name">{{ item.name }}</view>
					<view class="wrapper">
						<view class="price">￥{{ item.price }}</view>
						<view class="picker">
							<view class="minus" @click="minus(item)" :class="{ minimun: item.count === 1 }" />
							<view class="count">{{ item.count }}</view>
							<view class="plus" @click="plus(item)" />
						</view>
					</view>
				</view>
			</view>
			<view class="fare">
				<view>运费</view>
				<view>￥0</view>
			</view>
			<view class="coupon">
				<view>优惠券</view>
				<view class="action">
					无可用
					<image src="../../static/right.png" />
				</view>
			</view>
		</view>
		<view class="bar">
			<view class="total">￥{{ total }}</view>
			<view class="action" @click="confirm">提交订单</view>
		</view>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			good: {}
		}
	},
	computed: {
		...mapGetters(['user', 'order', 'allGoods']),
		total() {
			let sum = 0
			if (this.good.id) sum = this.good.price * this.good.count
			else this.order.forEach(item => sum += item.price * item.count)
			const index = sum.toString().indexOf('.')
			if (index < 0) return sum.toString() + '.0'
			if (sum.toString().slice(index + 1, -1).length > 1) return sum.toString().slice(0, index + 2)
			return sum
		}
	},
	onShow() {
		let id
		const routes = getCurrentPages()
		id = routes[routes.length - 1].options.id
		if (id) {
			const fakeGood = this.allGoods.find(item => item.id === parseInt(id))
			this.good = { id, name: fakeGood.name, price: fakeGood.price.slice(1, 5), count: 1 }
		}
	},
	methods: {
		...mapMutations(['setUser', 'addOrderItem']),
		minus(item) {
			if (item.count === 1) return
			item.count -= 1
		},
		plus(item) {
			item.count += 1
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
		},
		confirm() {
			if(!this.user.address){
				uni.showToast({
					title: '您未选择地址',
					icon: 'none'
				})
				return
			}
			uni.showToast({
				title: '正在提交订单',
				icon: 'loading',
				mask: 'true'
			})
			setTimeout(() => {
				if(this.good.id) this.addOrderItem(this.good)
				else this.addOrderItem(this.order)
				uni.showToast({
					title: '提交订单成功',
					mask: 'true'
				})
			}, 1500)
			setTimeout(() => {
				uni.navigateBack()
			}, 3000)
		}
	}
}
</script>

<style lang="scss" scoped>
.confirmOrder {
	position: relative;
	height: calc(100vh - 44px);
	.header {
		background: #fff;
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		margin-bottom: 30rpx;
		.userInfo {
			.address {
				font-size: 16px;
				color: #111;
				margin-bottom: 6px;
				max-width: 600rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		image {
			width: 30rpx;
			height: 30rpx;
		}
	}
	.main {
		background: #fff;
		border-radius: 20rpx;
		padding: 50rpx 40rpx;
		.goodInfo {
			display: flex;
			margin-bottom: 50rpx;
			.img {
				width: 150rpx;
				height: 150rpx;
				border: 1px solid #1bbb5a;
				margin-right: 30rpx;
			}
			.detail {
				flex: 1;
				.name {
					font-size: 15px;
					margin-bottom: 20rpx;
				}
				.wrapper {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.price {
						color: #f22f2f;
						font-size: 16px;
						font-weight: bold;
					}
					.picker {
						display: flex;
						align-items: center;
						.minus {
							width: 24rpx;
							height: 24rpx;
							position: relative;
							&::before {
								content: '';
								position: absolute;
								height: 5rpx;
								top: 50%;
								left: 0;
								right: 0;
								background: #333;
								transform: translateY(-50%);
								border-radius: 2rpx;
							}
							&.minimun {
								&::before {
									background: #ddd;
								}
							}
						}
						.count {
							width: 60rpx;
							background: #f2f2f2;
							text-align: center;
							margin: 0 15rpx;
						}
						.plus {
							width: 26rpx;
							height: 26rpx;
							position: relative;
							&::before {
								content: '';
								position: absolute;
								height: 5rpx;
								top: 50%;
								left: 0;
								right: 0;
								transform: translateY(-50%);
								background: #333;
								border-radius: 2rpx;
							}
							&::after {
								content: '';
								position: absolute;
								width: 5rpx;
								top: 0;
								bottom: 0;
								left: 50%;
								transform: translateX(-50%);
								background: #333;
								border-radius: 2rpx;
							}
						}
					}
				}
			}
		}
		.fare,
		.coupon {
			display: flex;
			justify-content: space-between;
			margin: 50rpx 0 0;
			.action {
				color: #999;
				display: flex;
				align-items: center;
				image {
					width: 25rpx;
					height: 25rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
	.bar {
		position: fixed;
		width: 690rpx;
		bottom: 0;
		left: 0;
		background: #fff;
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
		.total {
			color: #f22f2f;
			font-size: 19px;
			font-weight: bold;
		}
		.action {
			background: linear-gradient(135deg, rgba(46, 213, 112, 1) 0%, rgba(27, 187, 90, 1) 100%);
			border-radius: 50rpx;
			padding: 18rpx 45rpx;
			color: #fff;
		}
	}
}
</style>
