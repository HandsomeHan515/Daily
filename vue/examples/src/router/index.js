import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import('../views/Lifecycle.vue')
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () => import('../views/Mixin.vue')
  },
  {
    path: '/eventbus',
    name: 'EventBus',
    component: () => import('../views/EventBus.vue')
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import('../views/Component.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/Computed.vue')
  },
  {
    path: '/key',
    name: 'Key',
    component: () => import('../views/Key.vue')
  },
  {
    path: '/for',
    name: 'For',
    component: () => import('../views/For.vue')
  },
  {
    path: '/keepalive',
    Name: 'KeepAlive',
    component: () => import('../views/KeepAlive.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/set',
    name: 'Set',
    component: () => import('../views/Set.vue')
  },
  {
    path: '/extend',
    name: 'Extend',
    component: () => import('../views/Extend.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
