import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfoPage from '../views/InfoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info-page',
    name: 'InfoPage',
    component: InfoPage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
