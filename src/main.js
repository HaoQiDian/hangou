// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//根组件
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false

//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'
/* eslint-disable no-new */
// 根实例 
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
