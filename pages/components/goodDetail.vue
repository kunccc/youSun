<template>
	<view class="goodDetail">
		<view class="swiper" />
		<view class="wrapper">
			<view class="price">￥319</view>
			<view class="collect" :class="{'isSelected': isSelected}" @click="toggle">
				<image :src="isSelected ? '../../static/heart-active.png' : '../../static/heart.png'" />
				<text>{{isSelected ? '已收藏' : '收藏'}}</text>
			</view>
		</view>
		<view class="info">
			<view class="name">酸笋</view>
			<view class="slogan">"舒酸之后,胃口大开"</view>
		</view>
		<view class="comments">
			<text class="title">评价</text>
			<view class="comment">不错不错</view>
		</view>
		<view class="desc">
			<text class="title">商品详情</text>
			<view class="detail">
				酸笋味酸，清新爽口，既可生吃，又可熟吃，酸笋发酵产生酸味的乳酸菌，不但可以促进食欲，而且能够促进胃肠内的蛋白质分解和吸收，有非常好的开胃健食的作用，因而酸脆过后，胃口大开。
			</view>
		</view>
		<view class="bar">
			<view class="addToCart">加入购物车</view>
			<view class="buyNow">立即购买</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isSelected: false
		}
	},
	methods: {
		toggle() {
			this.isSelected = !this.isSelected
		}
	}
}
</script>

<style lang="scss" scoped>
.goodDetail {
	position: relative;
	.swiper {
		height: 500rpx;
		background: #fff;
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		padding-left: 23rpx;
		background: #fff;
		box-shadow: 0 -8rpx 8rpx 8rpx rgba(0, 0, 0, 0.03);
		position: relative;
		.price {
			font-size: 22px;
			color: #f22f2f;
		}
		.collect {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 30rpx;
			right: 38rpx;
			image {
				width: 35rpx;
				height: 35rpx;
				margin-bottom: 2rpx;
			}
			text {
				font-size: 12px;
			}
			&.isSelected{
				right: 26rpx;
				image{
					animation: .5s on;
				}
			}
		}
		@keyframes on {
			0%{
				transform: scale(1);
				opacity: 0;
			}
			50%{
				transform: scale(1.2);
			}
			100%{
				transform: scale(1);
				opacity: 1;
			}
		}
	}
	.info {
		background: #fff;
		padding: 0 30rpx 40rpx;
		margin-bottom: 25rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		.name {
			font-size: 18px;
			margin-bottom: 10rpx;
		}
		.slogan {
			color: #aaa;
		}
	}
	.comments {
		background: #fff;
		border-radius: 20rpx;
		padding: 30rpx;
		margin-bottom: 25rpx;
		.title {
			font-size: 18px;
		}
		.comment {
			padding: 40rpx 0 30rpx;
		}
	}
	.desc {
		background: #fff;
		padding: 30rpx;
		border-radius: 20rpx;
		.title {
			font-size: 18px;
		}
		.detail {
			padding: 40rpx 0 30rpx;
		}
	}
	.bar {
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 746rpx;
		height: 100rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
		color: #fff;
		.addToCart {
			padding: 18rpx 45rpx;
			background: linear-gradient(135deg, rgba(46, 213, 112, 1) 0%, rgba(27, 187, 90, 1) 100%);
			border-radius: 50rpx;
		}
		.buyNow {
			padding: 18rpx 45rpx;
			background: linear-gradient(135deg, rgba(46, 213, 112, 1) 0%, rgba(27, 187, 90, 1) 100%);
			border-radius: 50rpx;
		}
	}
}
</style>
