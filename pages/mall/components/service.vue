<template>
	<view class="service">
		<view>共享村庄</view>
		<view>共享竹林</view>
		<movable-area>
			<movable-view direction="all" x="750rpx" y="750rpx"><view><image src="../../../static/consult.png" /></view></movable-view>
		</movable-area>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.service {
	movable-area {
		width: 666rpx;
		height: 100vh;
		view {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background: #1BBB5A;
			box-shadow: 0 0 1px 2px rgba(27,187,90, 0.25);
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 66rpx;
				height: 66rpx;
			}
		}
	}
}
</style>
