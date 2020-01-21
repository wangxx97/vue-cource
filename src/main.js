// 项目 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' /* 自动找store下的index.js */
import Bus from './lib/bus'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
