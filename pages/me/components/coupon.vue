<template>
	<view class="coupon">
		<view class="item" @click="go">
			<view class="info">
				<text class="name">无门槛通用券</text>
				<text class="date">2021.05.07-2021.05.31</text>
			</view>
			<view class="money">
				<text class="value">￥10</text>
				<text class="desc">满99元可用</text>
			</view>
		</view>
		<view class="item" @click="go">
			<view class="info">
				<text class="name">无门槛通用券</text>
				<text class="date">2021.05.07-2021.05.31</text>
			</view>
			<view class="money">
				<text class="value">￥20</text>
				<text class="desc">满199元可用</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		go() {
			uni.switchTab({
				url: '../../sort/sort'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.coupon {
	display: flex;
	flex-direction: column;
	.item {
		margin: 20rpx 20rpx 0;
		display: flex;
		height: 200rpx;
		.info {
			background: #fff;
			width: 65%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			border-radius: 10rpx;
			position: relative;
			padding: 35rpx;
			.name {
				font-size: 16px;
				color: #000;
				margin-bottom: 10rpx;
			}
			.date{
				font-size: 12px;
			}
			&::before {
				content: '';
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: #f2f2f2;
				position: absolute;
				right: -10rpx;
				top: -10rpx;
			}
			&::after {
				content: '';
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: #f2f2f2;
				position: absolute;
				right: -10rpx;
				bottom: -10rpx;
			}
		}
		.money {
			color: #fff;
			background: #65bebd;
			width: 35%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx;
			.value {
				font-size: 24px;
				font-weight: bold;
				transform: translateX(-5rpx);
			}
			.desc{
				font-size: 12px;
			}
		}
	}
}
</style>
