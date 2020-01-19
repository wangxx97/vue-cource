// 项目 入口文件
import Vue from 'vue'
import App from './App.vue'
import route from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  route,
  store,
  render: h => h(App)
}).$mount('#app')
