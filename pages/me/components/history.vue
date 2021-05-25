<template>
	<view class="history">
		<view v-if="history.length === 0" class="noHistory">
			<image src="../../../static/noHistory.png" />
			暂无浏览历史
		</view>
		<view class="wrapper" v-for="(group, index1) in history" :key="index1">
			<text class="title">{{ group.date }}</text>
			<view @longpress="deleteItem(index1, index2)" @click="go(item.id)" class="item" v-for="(item, index2) in group.items" :key="index2">
				<view class="img" />
				<text class="price">{{ item.price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
	computed:{
		...mapGetters(['history'])
	},
	methods: {
		...mapMutations(['deleteHistoryItem', 'deleteHistoryGroup']),
		go(id) {
			uni.navigateTo({
				url: `../../components/goodDetail?id=${id}`
			})
		},
		deleteItem(index1, index2) {
			uni.showActionSheet({
				itemList: ['删除历史'],
				success: () => {
					this.deleteHistoryItem({index1, index2})
					if (this.history[index1].items.length === 0) this.deleteHistoryGroup(index1)
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.history {
	padding: 0 20rpx;
	height: calc(100vh - 44px);
	.noHistory {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 150rpx;
		color: #aaa;
		image {
			width: 200rpx;
			height: 200rpx;
			margin-bottom: 30rpx;
		}
	}
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
				border: 1px solid #1bbb5a;
				margin: 20rpx 0 20rpx;
				border-radius: 20rpx;
			}
			.price {
				color: #f22f2f;
				font-size: 16px;
			}
		}
	}
}
</style>
