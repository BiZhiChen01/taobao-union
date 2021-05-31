import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '领券联盟'
    }
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('../views/Ticket'),
    meta: {
      title: '领券联盟'
    }
  },
  {
    path: '/onSell',
    name: 'onSell',
    component: () => import('../views/OnSell'),
    meta: {
      title: '领券联盟'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search'),
    meta: {
      title: '领券联盟'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
