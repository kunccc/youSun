<template>
	<view class="cart">
		<view class="noGoods" v-if="dataSource.length === 0">
			<image src="../../static/noGoods.png" />
			购物车暂无商品
		</view>
		<view class="item" v-for="(item, index) in dataSource" :key="index" @longpress="deleteItem(index)">
			<view class="triggerArea" @click="go" />
			<view class="selector selected" v-if="item.selected" @click="toggle(item)"><image src="../../static/done.png"></image></view>
			<view class="selector" v-else @click="toggle(item)" />
			<view class="img" />
			<view class="info">
				<text>{{ item.info }}</text>
				<view class="wrapper">
					<text class="price">￥{{ item.price }}</text>
					<view class="picker">
						<view class="minus" @click="minus(item)" :class="{ minimun: item.count === 1 }" />
						<view class="count">{{ item.count }}</view>
						<view class="plus" @click="plus(item)" />
					</view>
				</view>
			</view>
		</view>
		<view class="total">
			<view class="selector selected" v-if="isSelectAll" @click="toggleAll(false)"><image src="../../static/done.png"></image></view>
			<view class="selector" v-else @click="toggleAll(true)" />
			<text>全选</text>
			<view class="wrapper">
				<text>合计:￥{{totalPrice}}</text>
				<view class="action">去结算({{totalItems}})</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataSource: [{ selected: false, info: '酸笋', price: 179, count: 1 }, { selected: false, info: '泡椒笋尖', price: 69, count: 1 }],
		}
	},
	computed:{
		totalPrice(){
			let sum = 0
			this.dataSource.forEach(item => {
				if(item.selected) sum += item.price * item.count
			})
			return sum
		},
		totalItems(){
			let sum = 0
			this.dataSource.forEach(item => {
				if(item.selected) sum += 1
			})
			return sum
		},
		isSelectAll(){
			if(this.dataSource.length === 0) return false
			for(let item of this.dataSource){
				if(!item.selected) return false
			}
			return true
		}
	},
	methods: {
		toggle(item) {
			item.selected = !item.selected
		},
		minus(item) {
			if (item.count === 1) return
			item.count -= 1
		},
		plus(item) {
			item.count += 1
		},
		toggleAll(value) {
			for (let item of this.dataSource) item.selected = value
		},
		deleteItem(index){
			uni.showActionSheet({
				itemList: ['删除'],
				success: () => this.dataSource.splice(index, 1)
			})
		},
		go(){
			uni.navigateTo({
				url: '../components/goodDetail',
				fail: err => console.log(err)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.cart {
	.noGoods{
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
			transform: translateX(-10rpx);
		}
	}
	.item {
		background: #fff;
		margin: 20rpx 0;
		border-radius: 20rpx;
		padding: 30rpx;
		display: flex;
		position: relative;
		.triggerArea{
			position: absolute;
			top: 0;
			left: 90rpx;
			width: 650rpx;
			height: 180rpx;
		}
		.selector {
			width: 35rpx;
			height: 35rpx;
			border: 2rpx solid #888;
			border-radius: 50%;
			margin-right: 20rpx;
			position: absolute;
			top: 50%;
			left: 30rpx;
			transform: translateY(-50%);
			&.selected {
				width: 39rpx;
				height: 39rpx;
				border: none;
				background: #1bbb5a;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 28rpx;
					height: 28rpx;
				}
			}
		}
		.img {
			width: 200rpx;
			height: 200rpx;
			border: 1px solid #1bbb5a;
			margin: 0 30rpx 0 60rpx;
		}
		.info {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.wrapper {
				display: flex;
				justify-content: space-between;
				.price {
					color: #f22f2f;
					font-size: 16px;
					font-weight: bold;
				}
				.picker {
					display: flex;
					align-items: center;
					.minus {
						width: 24rpx;
						height: 24rpx;
						position: relative;
						&::before {
							content: '';
							position: absolute;
							height: 5rpx;
							top: 50%;
							left: 0;
							right: 0;
							background: #333;
							transform: translateY(-50%);
							border-radius: 2rpx;
						}
						&.minimun {
							&::before {
								background: #ddd;
							}
						}
					}
					.count {
						width: 60rpx;
						background: #f2f2f2;
						text-align: center;
						margin: 0 15rpx;
					}
					.plus {
						width: 26rpx;
						height: 26rpx;
						position: relative;
						&::before {
							content: '';
							position: absolute;
							height: 5rpx;
							top: 50%;
							left: 0;
							right: 0;
							transform: translateY(-50%);
							background: #333;
							border-radius: 2rpx;
						}
						&::after {
							content: '';
							position: absolute;
							width: 5rpx;
							top: 0;
							bottom: 0;
							left: 50%;
							transform: translateX(-50%);
							background: #333;
							border-radius: 2rpx;
						}
					}
				}
			}
		}
	}
	.total {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 640rpx;
		height: 100rpx;
		padding: 0 30rpx 0 80rpx;
		background: #fff;
		box-shadow: 0 0 1px rgba(0,0,0,0.25);
		.selector {
			width: 35rpx;
			height: 35rpx;
			border: 2rpx solid #888;
			border-radius: 50%;
			margin-right: 20rpx;
			position: absolute;
			top: 50%;
			left: 30rpx;
			transform: translateY(-50%);
			&.selected {
				width: 39rpx;
				height: 39rpx;
				border: none;
				background: #1bbb5a;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 28rpx;
					height: 28rpx;
				}
			}
		}
		.wrapper{
			display: flex;
			flex: 1;
			height: 100%;
			margin-left: 30rpx;
			align-items: center;
			justify-content: space-between;
			.action{
				background: linear-gradient(135deg, rgba(46,213,112,1) 0%, rgba(27,187,90,1) 100%);
				border-radius: 50rpx;
				padding: 18rpx 45rpx;
				color: #fff;
			}
		}
	}
}
</style>
