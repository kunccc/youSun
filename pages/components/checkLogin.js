import store from '../../store/index.js'

const checkLogin = () => {
	return new Promise(resolve => {
		if (!store.state.user.nickName) {
			uni.showToast({
				title: '请先登录再进行操作',
				icon: 'none'
			})
		}
		else resolve()
	})
}

export {checkLogin}