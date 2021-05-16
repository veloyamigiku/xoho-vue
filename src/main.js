import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import App from './App.vue'
import './fontawesome'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
