<template>
	<view class="goodDetail">
		<view class="swiper" />
		<view class="wrapper">
			<view class="price">{{ goodDetail.price }}</view>
			<view class="collect" :class="{ 'isCollected': goodDetail.isCollected }" @click="toggleIsCollected(goodDetail.id)">
				<image :src="goodDetail.isCollected ? '../../static/heart-active.png' : '../../static/heart.png'" />
				<text>{{ goodDetail.isCollected ? '已收藏' : '收藏' }}</text>
			</view>
		</view>
		<view class="info">
			<view class="name">{{ goodDetail.name }}</view>
			<view class="slogan">{{'"' + goodDetail.slogan + '"'}}</view>
		</view>
		<view class="comments">
			<text class="title">评价</text>
			<view class="comment">不错不错</view>
		</view>
		<view class="desc">
			<text class="title">商品详情</text>
			<view class="detail">{{ goodDetail.intro }}</view>
		</view>
		<view class="bar">
			<view class="addToCart">加入购物车</view>
			<view class="buyNow">立即购买</view>
		</view>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			id: 0
		}
	},
	computed: {
		...mapGetters(['allGoods']),
		goodDetail() {
			return this.allGoods.find(item => item.id === parseInt(this.id))
		}
	},
	methods: {
		...mapMutations(['toggleIsCollected'])
	},
	onShow() {
		const routes = getCurrentPages()
		this.id = routes[routes.length - 1].options.id
	},
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
			&.isCollected {
				right: 26rpx;
				image {
					animation: 0.5s on;
				}
			}
		}
		@keyframes on {
			0% {
				transform: scale(1);
				opacity: 0;
			}
			50% {
				transform: scale(1.2);
			}
			100% {
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
			background: linear-gradient(135deg, rgba(255, 183, 0, 1) 0%, rgba(255, 166, 0, 1) 100%);
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
