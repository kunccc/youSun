<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations(['setUser'])
	},
	onLaunch() {
		let nickName, avatarUrl
		uni.getStorage({
			key: 'nickName',
			success: res => nickName = res.data
		})
		uni.getStorage({
			key: 'avatarUrl',
			success: res => {
				avatarUrl = res.data,
				this.setUser({ nickName, avatarUrl })
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
