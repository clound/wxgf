import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast } from 'vant'
import 'vant/lib/index.css'
import '@/common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
