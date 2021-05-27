<template>
	<view class="sunYuan">
		<view class="search">
			<image src="../../static/search.png" />
			<input placeholder="搜索商品" disabled />
		</view>
		<view class="commodity">
			<view class="show">
				<view v-for="(good, index) in allGoods" :key="index" class="detail" @click="go(good.id)">
					<view class="img" />
					<view class="info">
						<view>
							<view>{{ good.name }}</view>
							<view>{{ '"' + good.slogan + '"' }}</view>
						</view>
						<view>{{ good.price }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			sort: 1
		}
	},
	computed: {
		...mapGetters(['allGoods'])
	},
	methods: {
		jump(value) {
			this.sort = value
		},
		go(id) {
			uni.navigateTo({
				url: `../components/goodDetail?id=${id}`
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.sunYuan {
	background: #1bbb5a;
	height: calc(100vh - 78px);
	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		margin: 0 70rpx;
		padding: 16rpx;
		border-radius: 100rpx;
		image {
			width: 40rpx;
			height: 40rpx;
			margin: 0 10rpx 0 186rpx;
		}
	}
	.commodity {
		margin-top: 30rpx;
		background: #f2f2f2;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		padding: 40rpx 40rpx 0;
		display: flex;
		height: 100%;
		.show {
			background: #fff;
			width: 100%;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 20rpx;
			.detail {
				border-bottom: 1px solid #ddd;
				padding: 30rpx 15rpx 30rpx;
				display: flex;
				&:last-child {
					border: none;
				}
				.img {
					width: 120rpx;
					height: 120rpx;
					border: 1px solid #1bbb5a;
					margin-right: 20rpx;
				}
				.info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					flex: 1;
					>view {
						&:first-child {
							view{
								&:first-child{
									font-size: 16px;
								}
								&:last-child{
									color: #aaa;
									font-size: 13px;
								}
							}
						}
						&:last-child {
							display: flex;
							justify-content: flex-end;
							color: #f22f2f;
						}
					}
				}
			}
		}
	}
}
</style>
