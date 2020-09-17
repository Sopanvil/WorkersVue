import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWow from 'vue-wow'
import VueTheMask from 'vue-the-mask'


Vue.config.productionTip = false

Vue.use(VueWow),
Vue.use(VueTheMask)

new Vue({
  VueTheMask,
  VueWow,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
