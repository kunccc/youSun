<template>
	<view class="history">
		<view class="wrapper">
			<text class="title">今天</text>
			<view class="item">
				<view class="img" />
				<text class="price">￥39</text>
			</view>
			<view class="item">
				<view class="img" />
				<text class="price">￥79</text>
			</view>
		</view>
		<view class="wrapper">
			<text class="title">5月20日</text>
			<view class="item">
				<view class="img" />
				<text class="price">￥59</text>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.history {
	min-height: 100vh;
	padding: 0 20rpx;
	.wrapper {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		.title {
			font-size: 18px;
			width: 100%;
		}
		.item {
			margin-right: 30rpx;
			.img {
				width: 200rpx;
				height: 200rpx;
				border: 1px solid blue;
				margin: 20rpx 0 10rpx;
				border-radius: 20rpx;
			}
			.price {
				color: red;
				font-size: 18px;
			}
		}
	}
}
</style>
