import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/solt1',
    name: 'Slot1',
    component: () => import('../components/demo1/Slot1.vue')
  },
  {
    path: '/solt2',
    name: 'Slot2',
    component: () => import('../components/demo2/Solt2.vue')
  },
  {
    path: '/solt3',
    name: 'Slot3',
    component: () => import('../components/demo3/Solt3.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
