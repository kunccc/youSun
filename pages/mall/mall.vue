<template>
	<view class="mall">
		<view class="nav">
			<navigator url="./components/sunYuan"><view>笋园</view></navigator>
			<navigator url="./components/service"><view>产品服务</view></navigator>
			<navigator url="./components/liveBroadcast"><view>直播</view></navigator>
		</view>
		<view class="commodity">
			<text>热销商品</text>
			<view class="wrapper">
				<view class="img" />
				<text class="title">绿色笋干</text><br/>
				<text class="price">￥39</text><br/>
				<text>12已售</text>
			</view>
			<view class="wrapper">
				<view class="img" />
				<text class="title">泡椒笋尖</text><br/>
				<text class="price">￥39</text><br/>
				<text>12已售</text>
			</view>
			<view class="wrapper">
				<view class="img" />
				<text class="title">酸笋</text><br/>
				<text class="price">￥39</text><br/>
				<text>12已售</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.mall {
	display: flex;
	flex-direction: column;
	background: #f2f2f2;
	min-height: 100vh;
	.nav {
		display: flex;
		justify-content: space-around;
		padding: 60rpx 0 40rpx;
		navigator {
			view {
				background: #1BBB5A;
				color: #fff;
				padding: 50rpx;
				border-radius: 20rpx;
			}
		}
	}
	.commodity{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 30rpx;
		> text{
			width: 100%;
			padding-left: 10rpx;
			margin-bottom: 30rpx;
			font-size: 18px;
			font-weight: bold;
		}
		.wrapper{
			background: #fff;
			border-radius: 30rpx;
			width: 295rpx;
			height: 400rpx;
			margin-bottom: 20rpx;
			padding: 20rpx;
			.img{
				width: 100%;
				height: 272rpx;
				border: 1px solid #1BBB5A;
			}
			.title{
				font-size: 16px;
				font-weight: bold;
				min-height: 200rpx;
			}
			.price{
				color: red;
			}
		}
	}
}
</style>
