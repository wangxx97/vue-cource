// 项目 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' /* 自动找store下的index.js */
import Bus from './lib/bus'
if (process.env.NODE_ENV !== 'production') require('./mock')


Vue.config.productionTip = false
Vue.prototype.$bus = Bus

// vue根组件
new Vue({
	router,
	store,

	render: h => h(App)
}).$mount('#app')
