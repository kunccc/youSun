<template>
	<view class="sunYuan">
		<view class="search">
			<image src="../../../static/search.png" />
			<input placeholder="搜索商品" disabled />
		</view>
		<view class="commodity">
			<view class="sort">
				<text>分类</text>
				<text>笋食</text>
				<text>文创</text>
			</view>
			<view class="show">
				<view class="detail">图片 标题 价格 加号</view>
				<view class="detail">图片 标题 价格 加号</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.sunYuan{
	background: #1BBB5A;
	min-height: 100vh;
	.search{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		margin: 0 70rpx;
		padding: 16rpx;
		border-radius: 100rpx;
		image{
			width: 40rpx;
			height: 40rpx;
			margin: 0 10rpx 0 186rpx;
		}
	}
	.commodity{
		margin-top: 40rpx;
		background: #f5f5f5;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		min-height: 100vh;
		padding: 50rpx;
		display: flex;
		.sort{
			display: flex;
			flex-direction: column;
			width: 200rpx;
			padding-top: 20rpx;
		}
		.show{
			background: #fff;
			width: 420rpx;
			border-top-left-radius: 40rpx;
			border-top-right-radius: 40rpx;
			padding: 20rpx;
		}
	}
}
</style>
