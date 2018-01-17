import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	car: [],
	count: 1,

}

const mutations = {
	increment(state) {
		state.count++
	},
	decrease(state) {
		if(state.count <= 1) {
			state.count = 1
		} else {
			state.count--
		}
	},
	initCar(state, car) {
		state.car = car
	},
	addGood(state, { id, title, price, image }) {
		let isHas = state.car.some(item => {
			if(item.id == id) {
				item.num++
					return true;
			} else { return false; }
		})
		if(!isHas) {
			state.car.push({ id, title, price, image, num: 1 })
		}
//		if(localStorage.car) {
//			var aaa = JSON.parse(localStorage.car)
//			aaa.push(state.car[0])
//			localStorage.car = JSON.stringify(aaa)
//			console.log(aaa)
//		} else {
//			localStorage.car = JSON.stringify(state.car)
//		}
	},
	reduceGood(state, { id }) {
		let len = state.car.length
		for(let i = 0; i < len; i++) {
			if(state.car[i].id == id) {
				state.car[i].num--
					if(state.car[i].num == 0) {
						state.car.splice(i, 1)
					}
				break;
			}
		}
		localStorage.car = JSON.stringify(state.car)
	},
	removeGood(state, id) {
		let len = state.car.length
		for(let i = 0; i < len; i++) {
			if(state.car[i].id == id) {
				state.car.splice(i, 1)
				break;
			}
		}
		localStorage.car = JSON.stringify(state.car)
	},
	seleteGood(state, val) {
		state.car.forEach(item => item.isSelected = val)
	}
}
const getters = {
	money(state) {
		let money = 0
		state.car.forEach(item => {
			if(item.isSelected) {
				money += (item.price * item.num)
			}

		});
		return money
	}
}
const actions = {
	addGood({ commit }, params) {
		setTimeout(() => {
			let result = 'ok'
			if(result == 'ok') {
				commit('addGood', params)
			}
		}, 300);
	},
	initCar({ commit }) {
		setTimeout(() => {
			let results = JSON.parse(localStorage.car || '[]')
			commit('initCar', results)
		}, 300);
	},
	reduceGood({commit},params){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('reduceGood',params)
                }
            }, 300);
    },
     removeGood({commit},id){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('removeGood',id)
                }
            }, 300);
        },
        seleteGood({commit},val){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('seleteGood',val)
                }
            }, 300);
        }
        
}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

export default store