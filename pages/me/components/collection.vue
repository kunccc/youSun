<template>
	<view class="collection">
		<view v-if="collection.length === 0" class="noCollection">
			<image src="../../../static/cancelCollection.png" />
			暂无收藏
		</view>
		<view @longpress="deleteItem(item.id)" v-for="(item, index) in collection" :key="index" class="info" @click="go(item.id)">
			<view class="img" />
			<view class="detail">
				{{ item.name }}
				<text>{{ item.price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'	

export default {
	computed: {
		...mapGetters(['collection'])
	},
	methods: {
		...mapMutations(['deleteCollectionItem']),
		go(id) {
			uni.navigateTo({
				url: `../../components/goodDetail?id=${id}`
			})
		},
		deleteItem(id) {
			uni.showActionSheet({
				itemList: ['取消收藏'],
				success: () => this.deleteCollectionItem(id)
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
