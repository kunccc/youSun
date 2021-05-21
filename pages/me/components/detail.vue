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
			<view class="noOrder" v-if="data.length === 0">
				<image src="../../../static/noOrder.png" />
				暂无相关订单
			</view>
			<view class="item" v-for="(item, index) in data" :key="index">
				<view @click="go('goodDetail')" class="triggerArea" />
				<view class="main">
					<view class="img"></view>
					<view class="info">
						<view class="status">
							{{ item.status }} 丨
							<image src="../../../static/remove.png" @click="remove(item.id)" />
						</view>
						<view class="wrapper">
							<text class="price">￥{{ item.price }}</text>
							<text class="count">x{{ item.count }}</text>
						</view>
					</view>
				</view>
				<view class="footer">
					<view @click="go('transform')">查看物流</view>
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
			page: '1',
			// 虚假的源数据 应从vuex拿
			dataSource: [
				{ id: 1, status: '待发货', price: '4999', count: '1' },
				{ id: 2, status: '待收货', price: '289', count: '3' },
				{ id: 3, status: '待评价', price: '799', count: '1' },
				{ id: 4, status: '已完成', price: '299', count: '2' }
			],
			map: {
				2: '待发货',
				3: '待收货',
				4: '待评价',
				5: '已完成'
			}
		}
	},
	methods: {
		jump(value) {
			this.page = value
		},
		go(value){
			if(value === 'goodDetail'){
				uni.navigateTo({
					url: `../../mall/components/${value}`
				})
				return
			}
			uni.navigateTo({
				url: `./${value}`
			})
		},
		remove(id){
			uni.showModal({
				content: '确认删除此订单？',
				success: res => {
					if (res.confirm) this.dataSource = this.dataSource.filter(item => item.id !== id)
				}
			})
		}
	},
	computed: {
		data: function() {
			if (this.page === '1') return this.dataSource
			return this.dataSource.filter(item => item.status === this.map[this.page])
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
		.noOrder{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 180rpx;
			color: #aaa;
			image{
				width: 200rpx;
				height: 200rpx;
				margin-bottom: 30rpx;
			}
		}

		.item {
			background: #fff;
			border-radius: 30rpx;
			margin-top: 24rpx;
			padding: 40rpx;
			display: flex;
			flex-direction: column;
			position: relative;
			&:first-child {
				margin-top: 120rpx;
			}
			.triggerArea{
				position: absolute;
				width: 660rpx;
				height: 280rpx;
				top: 0;
				left: 0;
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
				justify-content: flex-end;
				view {
					border: 1px solid #999;
					padding: 6rpx 26rpx;
					border-radius: 100rpx;
					margin-left: 30rpx;
					font-size: 12px;
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
