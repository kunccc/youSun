<template>
	<view class="me">
		<view class="info">
			<view class="head"></view>
			<view class="collection">
				<view class="wrapper">
					11
					<br />
					商品收藏
				</view>
				<view class="wrapper">
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
					<navigator url="./components/detail">查看全部<image src="../../static/right.png"></image></navigator>
				</view>
				<view class="wrapper">
					<view><image src="../../static/deliver.png" /></view>
					待发货
				</view>
				<view class="wrapper">
					<view><image src="../../static/receive.png" /></view>
					待收货
				</view>
				<view class="wrapper">
					<view><image src="../../static/comment.png" /></view>
					待评价
				</view>
				<view class="wrapper">
					<view><image src="../../static/afterSales.png" /></view>
					售后
				</view>
			</view>
			<view class="tools">
				<view>
					优惠券
					<text>0</text>
				</view>
				<view>收货地址</view>
				<view>联系客服</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {}
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
			background: #fff;
			width: 160rpx;
			height: 160rpx;
			border-radius: 100%;
			margin: 40rpx;
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
				navigator {
					display: flex;
					align-items: center;
					image{
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
