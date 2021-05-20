<template>
	<view class="collection">
		<view class="info">
			<view class="img" />
			<view class="detail">
				酸笋
				<view class="wrapper">
					￥39
					<view class="icon">
						<image src="../../../static/cart.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="img" />
			<view class="detail">
				绿色笋干
				<view class="wrapper">
					￥59
					<view class="icon">
						<image src="../../../static/cart.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.collection{
	background: #f2f2f2;
	min-height: 100vh;
	padding: 1rpx 0;
	.info{
		background: #fff;
		border-radius: 20rpx;
		display: flex;
		padding: 30rpx;
		margin: 20rpx 0;
		.img{
			width: 240rpx;
			height: 240rpx;
			border: 1px solid #1BBB5A;
			margin-right: 30rpx;
		}
		.detail{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1;
			font-size: 16px;
			font-weight: bold;
			.wrapper{
				color: red;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.icon{
					width: 40rpx;
					height: 40rpx;
					border: 1px solid #d81e06;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 30rpx;
						height: 30rpx;
						transform: translateX(-2rpx);
					}
				}
			}
		}
	}
}
</style>
