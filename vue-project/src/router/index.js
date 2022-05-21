import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DB from '../views/DB.vue'
import DBFor from '../views/DBFor.vue'
import DBIf from '../views/DBIf.vue'
import DBOn from '../views/DBOn.vue'
import Computed from '../views/Computed.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/db',
    name: 'DB',
    component: DB
  },
  {
    path: '/dbfor',
    name: 'DBFor',
    component: DBFor
  },
  {
    path: '/dbif',
    name: 'DBIf',
    component: DBIf
  },
  {
    path: '/dbon',
    name: 'DBOn',
    component: DBOn
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
