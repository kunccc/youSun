<template>
	<view class="goodDetail">
		<view class="swiper" />
		<view class="wrapper">
			<view class="price">{{ goodDetail.price }}</view>
			<view class="collect" :class="{ isCollected: goodDetail.isCollected }" @click="collect(goodDetail.id)">
				<image :src="goodDetail.isCollected ? '../../static/heart-active.png' : '../../static/heart.png'" />
				<text>{{ goodDetail.isCollected ? '已收藏' : '收藏' }}</text>
			</view>
		</view>
		<view class="info">
			<view class="name">{{ goodDetail.name }}</view>
			<view class="slogan">{{ '"' + goodDetail.slogan + '"' }}</view>
		</view>
		<view class="comments">
			<view class="title">
				<view>评价</view>
				<view class="action" @click="go('comments')">
					查看全部
					<image src="../../static/right.png"></image>
				</view>
			</view>
			<view class="comment" v-for="(item, index) in comments" :key="index">
				<view class="header">
					<view class="img"><image :src="item.imgUrl"></image></view>
					<text class="name">{{ item.name }}</text>
				</view>
				<view class="content">{{ item.content }}</view>
			</view>
		</view>
		<view class="desc">
			<text class="title">商品详情</text>
			<view class="detail">{{ goodDetail.intro }}</view>
		</view>
		<view class="bar">
			<view class="addToCart" @click="addToCart">加入购物车</view>
			<view class="buyNow" @click="go('confirmOrder')">立即购买</view>
		</view>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { friendlyDate } from './friendlyDate.js'
import { checkLogin } from './checkLogin.js'

export default {
	data() {
		return {
			id: 0
		}
	},
	computed: {
		...mapGetters(['allGoods', 'cart', 'comments', 'user']),
		goodDetail() {
			return this.allGoods.find(item => item.id === this.id)
		}
	},
	methods: {
		...mapMutations(['toggleIsCollected', 'addHistoryItem', 'addCartItem']),
		collect(id) {
			checkLogin().then(() => this.toggleIsCollected(id))
		},
		addToCart() {
			checkLogin().then(() => {
				for (let item of this.cart) {
					if (item.id === this.id) {
						uni.showToast({
							title: '商品已在购物车中',
							icon: 'none'
						})
						return
					}
				}
				this.addCartItem(this.id)
				uni.showToast({
					title: '添加购物车成功'
				})
			})
		},
		go(value) {
			if (value === 'confirmOrder') {
				checkLogin().then(() => {
					let id
					const routes = getCurrentPages()
					id = routes[routes.length - 1].options.id
					uni.navigateTo({
						url: `./confirmOrder?id=${id}`
					})
				})
				return
			}
			uni.navigateTo({
				url: `./${value}`
			})
		}
	},
	onShow() {
		const routes = getCurrentPages()
		this.id = parseInt(routes[routes.length - 1].options.id)
		const date = friendlyDate(new Date())
		const id = this.id
		const price = this.allGoods.find(item => item.id === this.id).price
		this.addHistoryItem({ date, id, price })
	}
}
</script>

<style lang="scss" scoped>
.goodDetail {
	position: relative;
	height: calc(100vh - 44px);
	overflow: auto;
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
		box-shadow: 0 -6rpx 6rpx 6rpx rgba(0, 0, 0, 0.01);
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
		> .title {
			font-size: 18px;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.action {
				font-size: 14px;
				color: #999;
				display: flex;
				align-items: center;
				image {
					width: 20rpx;
					height: 20rpx;
					margin-left: 6rpx;
				}
			}
		}
		.comment {
			padding: 25rpx 0;
			border-bottom: 1px solid #ddd;
			&:last-child {
				border: none;
			}
			.header {
				display: flex;
				align-items: flex-end;
				margin-bottom: 30rpx;
				.img {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					margin-right: 20rpx;
					overflow: hidden;
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
	}
	.desc {
		background: #fff;
		padding: 30rpx;
		border-radius: 20rpx;
		> .title {
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
