import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from "./plugin/saveInLocal"

// import config from './config'

// 加载vuex
Vue.use(Vuex)

// 创建vuex实例
export default new Vuex.Store({
	// strict: process.env.NODE_ENV === 'development',  // 开启了严格模式
	strict: false,
	state,
	getters,
	mutations,
	actions,
	modules: {
		user
	},
	plugins: [saveInLocal]
})
