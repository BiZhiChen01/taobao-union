import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('../views/Ticket')
  },
  {
    path: '/onSell',
    name: 'onSell',
    component: () => import('../views/OnSell')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search')
  }
]

const router = new VueRouter({
  routes
})

export default router
