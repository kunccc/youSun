<template>
	<view class="detail">
		<view class="header">
			<view @click="jump('1')" :class="{ selected: page === '1' }">全部</view>
			<view @click="jump('2')" :class="{ selected: page === '2' }">待发货</view>
			<view @click="jump('3')" :class="{ selected: page === '3' }">待收货</view>
			<view @click="jump('4')" :class="{ selected: page === '4' }">待评价</view>
			<view @click="jump('5')" :class="{ selected: page === '5' }">售后</view>
			<view class="indicator" :class="'page' + page" />
		</view>
		<view class="itemWrapper">
			<view class="item">
				<view class="main">
					<view class="img"></view>
					<view class="info">
						<view class="status">
							待发货 丨
							<image src="../../../static/remove.png" />
						</view>
						<view class="wrapper">
							<text class="price">￥4999</text>
							<text class="count">x1</text>
						</view>
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
						<view class="status">
							待收货 丨
							<image src="../../../static/remove.png" />
						</view>
						<view class="wrapper">
							<text class="price">￥289</text>
							<text class="count">x1</text>
						</view>
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
						<view class="status">
							待评价 丨
							<image src="../../../static/remove.png" />
						</view>
						<view class="wrapper">
							<text class="price">￥799</text>
							<text class="count">x1</text>
						</view>
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
						<view class="status">
							已完成 丨
							<image src="../../../static/remove.png" />
						</view>
						<view class="wrapper">
							<text class="price">￥299</text>
							<text class="count">x1</text>
						</view>
					</view>
				</view>
				<view class="footer">
					<view>评价服务</view>
					<view>查看物流</view>
					<view>再次购买</view>
				</view>
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
	position: relative;
	.header {
		background: #fff;
		padding: 20rpx 0 40rpx;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		> view {
			transition: all 0.3s;
		}
		.selected {
			color: #1bbb5a;
		}
		.indicator {
			background: #1bbb5a;
			position: absolute;
			bottom: 34rpx;
			height: 5rpx;
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
	.itemWrapper {
		.item {
			background: #fff;
			border-radius: 30rpx;
			margin-top: 24rpx;
			padding: 40rpx;
			display: flex;
			flex-direction: column;
			&:first-child {
				margin-top: 120rpx;
			}
			.main {
				display: flex;
				justify-content: space-between;
				.img {
					width: 200rpx;
					height: 200rpx;
					border: 1px solid #1bbb5a;
				}
				.info {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					justify-content: space-between;
					.status {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						image {
							width: 34rpx;
							height: 34rpx;
							margin-left: 4rpx;
						}
					}
					.wrapper {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						.price {
							font-size: 18px;
							color: #000;
						}
						.count {
							color: #999;
						}
					}
				}
			}
			.footer {
				margin-top: 50rpx;
				display: flex;
				justify-content: space-between;
				view {
					border: 1px solid #999;
					padding: 8rpx 30rpx;
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
}
</style>
