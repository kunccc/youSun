import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allGoods: [
			{id: 1, name: '酸笋', price: '￥10.8/斤', slogan: '舒酸之后，胃口大开', intro: '酸笋味酸，清新爽口，既可生吃，又可熟吃，酸笋发酵产生酸味的乳酸菌，不但可以促进食欲，而且能够促进胃肠内的蛋白质分解和吸收，有非常好的开胃健食的作用，因而酸脆过后，胃口大开。'},
			{id: 2, name: '笋干', price: '￥16.8/斤', slogan: '干货袭来，“笋”友相会', intro: '笋干是以笋为原料，通过去壳切根修整、高温蒸煮、清水浸漂、手工切片/压榨成型处理、自然晾晒/烘干、整形包装等多道工序精制而成，是以成干货，且不可直接食用。'},
			{id: 3, name: '泡椒笋尖', price: '￥18.8/斤', slogan: '酸辣鲜香，“尖”刻不停', intro: '泡椒笋尖，以酸、辣为主，可正餐、佐餐、零嘴，时刻相伴，“尖”既指笋尖，又与“间”同音，“尖刻”音同“间刻”，突出泡椒笋尖随时就食的便携性，间刻不能停。'},
			{id: 4, name: '高级定制竹笋', price: '', slogan: '独一无二，专属于你的竹笋', intro: '高级定制竹笋可根据用户个人需求，从产品到包装进行专门制作，每一份高级定制竹笋都是世上仅有的唯一一份，可作为礼品送给亲朋好友，突出送礼人对的用心之处。'},
		],
		cart: [
			{id: 1, name: '酸笋', price: 10.8, count: 1, selected: false},
			{id: 2, name: '笋干', price: 16.8, count: 1, selected: false}
		],
		collection: [
			{id: 1, name: '酸笋', price: '￥10.8/斤'},
			{id: 2, name: '笋干', price: '￥16.8/斤'},
			{id: 3, name: '泡椒笋尖', price: '￥18.8/斤'}
		],
		history: [
			{ date: '今天', items: [{ id: 1, price: '￥10.8/斤' }, { id: 2, price: '￥16.8/斤' }] },
			{ date: '5月22日', items: [{ id: 3, price: '18.8/斤' }] }
		],
		allOrders: [
			
		],
		coupon: [
			{name: '无门槛通用券', effectiveDate: '2021.05.07-2021.05.31', value: 10, least: 99},
			{name: '无门槛通用券', effectiveDate: '2021.05.07-2021.05.31', value: 20, least: 199}
		]
	},
	getters: {
		allGoods(state) {
			return state.allGoods
		},
		cart(state) {
			return state.cart
		},
		collection(state) {
			return state.collection
		},
		history(state) {
			return state.history
		},
		historyCounts(state){
			let sum = 0
			state.history.forEach(group => sum += group.items.length)
			return sum
		},
		allOrders(state) {
			return state.allOrders
		},
		coupon(state) {
			return state.coupon
		}
	},
	mutations: {
		toggleAll(state, value){
			for (let item of state.cart) item.selected = value
		},
		deleteCartItem(state, index){
			state.cart.splice(index, 1)
		},
		deleteCollectionItem(state, index){
			state.collection.splice(index, 1)
		},
		deleteHistoryItem(state, payload){
			state.history[payload.index1].items.splice(payload.index2, 1)
		},
		deleteHistoryGroup(state, index){
			state.history.splice(index, 1)
		}
	}
})

export default store
