<template>
	<view class="detail">
		<view class="header">
			<view @click="jump('1')">全部</view>
			<view @click="jump('2')">待发货</view>
			<view @click="jump('3')">待收货</view>
			<view @click="jump('4')">待评价</view>
			<view @click="jump('5')">售后</view>
			<view class="indicator" :class="'page' + page" />
		</view>
		<view class="item">
			<view class="main">
				<view class="img"></view>
				<view class="info">
					<view>
						待收货 |
						<image src="../../../static/remove.png" />
					</view>
					￥4999.00 x1
				</view>
			</view>
			<view class="footer">
				<view>评价服务</view>
				<view>查看物流</view>
				<view>再次购买</view>
			</view>
		</view>
		<view class="item">
			<view class="main">
				<view class="img"></view>
				<view class="info">
					<view>
						待收货 |
						<image src="../../../static/remove.png" />
					</view>
					￥289.00 x1
				</view>
			</view>
			<view class="footer">
				<view>评价服务</view>
				<view>查看物流</view>
				<view>再次购买</view>
			</view>
		</view>
		<view class="item">
			<view class="main">
				<view class="img"></view>
				<view class="info">
					<view>
						待收货 |
						<image src="../../../static/remove.png" />
					</view>
					￥799.00 x1
				</view>
			</view>
			<view class="footer">
				<view>评价服务</view>
				<view>查看物流</view>
				<view>再次购买</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			page: '1'
		}
	},
	methods: {
		jump(value) {
			this.page = value
		}
	},
	onShow() {
		const routes = getCurrentPages()
		this.page = routes[routes.length - 1].options.page
	}
}
</script>

<style lang="scss" scoped>
.detail {
	background: #f2f2f2;
	min-height: 100vh;
	.header {
		background: #fff;
		padding: 20rpx 0 50rpx;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		display: flex;
		justify-content: space-around;
		position: relative;
		.indicator {
			background: #1bbb5a;
			position: absolute;
			bottom: 34rpx;
			height: 5rpx;
			transition: all 0.3s;
			&.page1 {
				width: 60rpx;
				left: 39rpx;
			}
			&.page2 {
				width: 90rpx;
				left: 170rpx;
			}
			&.page3 {
				width: 90rpx;
				left: 330rpx;
			}
			&.page4 {
				width: 90rpx;
				left: 492rpx;
			}
			&.page5 {
				width: 60rpx;
				left: 655rpx;
			}
		}
	}
	.item {
		background: #fff;
		border-radius: 30rpx;
		margin-top: 24rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		.main {
			display: flex;
			justify-content: space-between;
			.img {
				width: 200rpx;
				height: 200rpx;
				border: 1px solid #1bbb5a;
			}
			.info {
				> view {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					image {
						width: 34rpx;
						height: 34rpx;
						margin-left: 4rpx;
					}
				}
			}
		}
		.footer {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			view {
				border: 1px solid #777;
				padding: 10rpx 30rpx;
				border-radius: 100rpx;
				&:last-child {
					border: none;
					background: #1bbb5a;
					color: #fff;
				}
			}
		}
	}
}
</style>
