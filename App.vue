<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations(['setUser'])
	},
	onLaunch() {
		let nickName, avatarUrl, address, userName, telNumber
		uni.getStorage({
			key: 'nickName',
			success: res => nickName = res.data
		})
		uni.getStorage({
			key: 'address',
			success: res => address= res.data
		})
		uni.getStorage({
			key: 'userName',
			success: res => userName= res.data
		})
		uni.getStorage({
			key: 'telNumber',
			success: res => telNumber= res.data
		})
		uni.getStorage({
			key: 'avatarUrl',
			success: res => {
				avatarUrl = res.data
				this.setUser({ nickName, avatarUrl, address, userName, telNumber })
			}
		})
	},
}
</script>

<style lang="scss">
page {
	color: #333;
	font-size: 14px;
	background: #f2f2f2;
}
</style>
