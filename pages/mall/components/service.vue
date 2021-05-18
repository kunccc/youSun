<template>
	<view class="service">
		<view>共享村庄</view>
		<view>共享竹林</view>
		<movable-area>
			<movable-item direction="all"><view></view></movable-item>
		</movable-area>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.service {
	movable-area {
		width: 750rpx;
		height: 100vh;
		border: 1px solid blue;
		movable-view{
			width: 100rpx;
			height: 100rpx;
		}
		view {
			width: 100rpx;
			height: 100rpx;
			border: 1px solid red;
			box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
}
</style>
