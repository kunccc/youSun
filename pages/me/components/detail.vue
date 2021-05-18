<template>
	<view class="detail">
		<view class="header">
			<view>全部</view>
			<view>代发货</view>
			<view>待收货</view>
			<view>待评价</view>
			<view>售后</view>
			<view class="indicator" />
		</view>
		<view class="item">
			<view class="main">
				<view class="img"></view>
				<view>
					待发货 | 删除
					<br />
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
				<view>
					待收货 | 删除
					<br />
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
				<view>
					待评价 | 删除
					<br />
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

<script></script>

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
			bottom: 30rpx;
			left: 28rpx;
			width: 80rpx;
			height: 5rpx;
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
			.img{
				width: 200rpx;
				height: 200rpx;
				border: 1px solid #1BBB5A;
			}
		}
		.footer{
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			view{
				border: 1px solid #777;
				padding: 10rpx 30rpx;
				border-radius: 100rpx;
				&:last-child{
					border: none;
					background: #1BBB5A;
					color: #fff;
				}
			}
		}
	}
}
</style>
