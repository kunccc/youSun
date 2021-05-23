<template>
	<view class="sunYuan">
		<view class="search">
			<image src="../../static/search.png" />
			<input placeholder="搜索商品" disabled />
		</view>
		<view class="commodity">
			<view class="sort">
				<text @click="go(1)" :class="{'selected': sort === 1}">热门</text>
				<text @click="go(2)" :class="{'selected': sort === 2}">笋食</text>
				<text @click="go(3)" :class="{'selected': sort === 3}">文创</text>
			</view>
			<view class="show">
				<view class="detail"><view class="img"/><view class="info"><text>绿色笋干</text><text>￥39</text></view></view>
				<view class="detail"><view class="img"/><view class="info"><text>泡椒笋尖</text><text>￥39</text></view></view>
				<view class="detail"><view class="img"/><view class="info"><text>酸笋</text><text>￥39</text></view></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			sort: 1
		}
	},
	methods:{
		go(value){
			this.sort = value
		}
	}
}
</script>

<style lang="scss" scoped>
.sunYuan{
	background: #1BBB5A;
	flex: 1;
	display: flex;
	flex-direction: column;
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
		margin-top: 30rpx;
		background: #f2f2f2;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		padding: 50rpx 50rpx 0;
		display: flex;
		flex: 1;
		.sort{
			display: flex;
			flex-direction: column;
			position: relative;
			width: 200rpx;
			text{
				margin-top: 10rpx;
				font-size: 16px;
				margin: 10rpx 0;
				transition: all .3s;
				&.selected{
					color: #1BBB5A;
				}
			}
		}
		.show{
			background: #fff;
			width: 440rpx;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 20rpx;
			.detail{
				border-bottom: 1px solid #ddd;
				padding: 30rpx 15rpx 30rpx;
				display: flex;
				.img{
					width: 120rpx;
					height: 120rpx;
					border: 1px solid #1BBB5A;
					margin-right: 20rpx;
				}
				.info{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text{
						&:first-child{
							font-size: 17px;
						}
						&:last-child{
							color: red;
						}
					}
				}
			}
		}
	}
}
</style>
