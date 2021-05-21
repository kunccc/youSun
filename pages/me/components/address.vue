<template>
	<view>
		收货地址
		<button @click="open">点我</button>
	</view>
</template>

<script>
export default {
	methods: {
		open() {
			uni.authorize({
				scope: 'scope.address',
				success() {
					uni.chooseAddress({
						success: res => console.log(res)
					})
				}
			})
		}
	}
}
</script>

<style></style>
