import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import App from './App.vue'
import Header from './components/Header.vue'
import store from './vuex/store'
import './validate'

Vue.config.productionTip = false
Vue.component('Header',Header)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
