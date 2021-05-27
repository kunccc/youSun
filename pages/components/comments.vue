<template>
	<view class="comments">
		<view class="title">
			<view :class="{'selected': selected === 1}" @click="change(1)">按时间排序</view>
			<view>丨</view>
			<view :class="{'selected': selected === 2}" @click="change(2)">默认排序</view>
		</view>
		<view class="comment" v-for="(item, index) in comments" :key="index">
			<view class="header">
				<view class="img"><image :src="item.imgUrl"></image></view>
				<text class="name">{{ item.name }}</text>
				<text class="date">{{ item.date }}</text>
			</view>
			<view class="content">{{ item.content }}</view>
		</view>
		<view class="action" @click="write">
			写评论
			<image src="../../static/write.png" />
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			selected: 1
		}
	},
	computed: {
		...mapGetters(['comments'])
	},
	methods: {
		change(value) {
			this.selected = value
		},
		write(){
			uni.showToast({
				title: '请先购买后再评论哦',
				icon: 'none'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.comments {
	background: #fff;
	padding: 30rpx;
	min-height: calc(100vh - 44px);
	position: relative;
	.title {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 20rpx;
		view {
			color: #999;
			transition: all 250ms;
			&.selected {
				color: #333;
			}
		}
	}
	.comment {
		padding: 35rpx 0;
		.header {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;
			.img {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				overflow: hidden;
				image {
					width: 70rpx;
					height: 70rpx;
				}
			}
			.name{
				flex: 1;
				font-size: 16px;
			}
			.date{
				color: #888;
			}
		}
	}
	.action{
		background: linear-gradient(135deg, rgba(46, 213, 112, 1) 0%, rgba(27, 187, 90, 1) 100%);
		display: inline-flex;
		align-items: center;
		padding: 18rpx 40rpx 18rpx 45rpx;
		border-radius: 50rpx;
		color: #fff;
		position: absolute;
		bottom: 12%;
		left: 50%;
		transform: translateX(-50%);
		image{
			width: 40rpx;
			height: 40rpx;
			margin-left: 4rpx;
		}
	}
}
</style>
