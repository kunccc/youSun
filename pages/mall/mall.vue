<template>
	<view class="mall">
		<navigator url="./components/sunYuan"><view>笋园</view></navigator>
		<navigator url="./components/service"><view>产品服务</view></navigator>
		<navigator url="./components/liveBroadcast"><view>直播</view></navigator>
		<view>热销产品 (卡片流)</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
.mall{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 100rpx;
	navigator{
		view{
			border: 1px solid #1BBB5A;
			padding: 50rpx;
			border-radius: 20rpx;
		}
	}
	> view{
		margin-top: 100rpx;
	}
}
</style>
