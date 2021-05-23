<template>
	<view class="collection">
		<view v-if="dataSource.length === 0" class="noCollection">
			<image src="../../../static/cancelCollection.png" />
			暂无收藏
		</view>
		<view @longpress="deleteItem(index)" v-for="(item, index) in dataSource" :key="index" class="info" @click="go('goodDetail')">
			<view class="img" />
			<view class="detail">
				{{ item.name }}
				<text>￥{{ item.price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataSource: [{ name: '酸笋', price: '39' }, { name: '笋干', price: '59' }, { name: '泡椒笋尖', price: '29' }]
		}
	},
	methods: {
		go(value) {
			uni.navigateTo({
				url: `../../components/goodDetail`
			})
		},
		deleteItem(index) {
			uni.showActionSheet({
				itemList: ['取消收藏'],
				success: () => this.dataSource.splice(index, 1)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.collection {
	background: #f2f2f2;
	.noCollection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 150rpx;
		color: #aaa;
		image {
			width: 250rpx;
			height: 250rpx;
			margin-bottom: 30rpx;
		}
	}
	.info {
		background: #fff;
		border-radius: 20rpx;
		display: flex;
		padding: 30rpx;
		.img {
			width: 240rpx;
			height: 240rpx;
			border: 1px solid #1bbb5a;
			margin-right: 30rpx;
		}
		.detail {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1;
			font-size: 16px;
			text {
				color: #f22f2f;
			}
		}
	}
}
</style>
