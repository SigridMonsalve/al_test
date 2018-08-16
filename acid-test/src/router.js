import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Monthly from './views/Monthly.vue'
import Daily from './views/Daily.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/monthly',
      name: 'monthly',
      component: Monthly
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    }
  ]
})
