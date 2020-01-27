const state = {
	userName: 'wangxx_gengww',
	// rules: {}
}
const getters = {
	firstLetter: (state) => {
		return state.userName.substr(0, 1)
	}
}

const mutations = {
	SET_USER_NAME(state, params) {
		state.userName = params
	},
	// SET_RULES(state, rules) {
	// 	state.rules = rules
	// }
}

const actions = {
	//
}

export default {
	// namespaced: true,
	getters,
	state,
	mutations,
	actions
}
