<template>
	<view class="coupon">
		<view class="item" v-for="(item, index) in coupon" :key="index">
			<view class="info">
				<text class="name">{{item.name}}</text>
				<text class="date">{{item.effectiveDate}}</text>
			</view>
			<view class="money">
				<text class="value">￥{{item.value}}</text>
				<text class="desc">满{{item.least}}元可用</text>
			</view>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters(['coupon'])
	},
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
