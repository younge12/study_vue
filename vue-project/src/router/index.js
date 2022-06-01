import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () => import(/* webpackChunkName: "db" */ '../views/DB.vue')
  },
  {
    path: '/dbfor',
    name: 'DBFor',
    component: () => import(/* webpackChunkName: "dbfor" */ '../views/DBFor.vue')
  },
  {
    path: '/dbif',
    name: 'DBIf',
    component: () => import(/* webpackChunkName: "dbif" */ '../views/DBIf.vue')
  },
  {
    path: '/dbon',
    name: 'DBOn',
    component: () => import(/* webpackChunkName: "dbon" */ '../views/DBOn.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Computed.vue')
  },
  {
    path: '/dbbindinglist2',
    name: 'DBBindingList2',
    component: () => import(/* webpackChunkName: "dbbindinglist2" */ '../views/DBBindingList2.vue')
  },
  {
    path: '/nc',
    name: 'NC',
    component: () => import(/* webpackChunkName: "nc" */ '../views/NC.vue')
  },
  {
    path: '/cc',
    name: 'CC',
    component: () => import(/* webpackChunkName: "cc" */ '../views/CC.vue')
  },
  {
    path: '/pc',
    name: 'PC',
    component: () => import(/* webpackChunkName: "pc" */ '../views/PC.vue')
  },
  {
    path: '/cc2',
    name: 'CC2',
    component: () => import(/* webpackChunkName: "cc2" */ '../views/CC2.vue')
  },
  {
    path: '/pc2',
    name: 'PC2',
    component: () => import(/* webpackChunkName: "pc2" */ '../views/PC2.vue')
  },
  {
    path: '/cc3',
    name: 'CC3',
    component: () => import(/* webpackChunkName: "cc3" */ '../views/CC3.vue')
  },
  {
    path: '/pc3',
    name: 'PC3',
    component: () => import(/* webpackChunkName: "pc3" */ '../views/PC3.vue')
  },
  {
    path: '/cc4',
    name: 'CC4',
    component: () => import(/* webpackChunkName: "cc4" */ '../views/CC4.vue')
  },
  {
    path: '/pc4',
    name: 'PC4',
    component: () => import(/* webpackChunkName: "pc4" */ '../views/PC4.vue')
  },
  {
    path: '/cc5',
    name: 'CC5',
    component: () => import(/* webpackChunkName: "cc5" */ '../views/CC5.vue')
  },
  {
    path: '/pc5',
    name: 'PC5',
    component: () => import(/* webpackChunkName: "pc5" */ '../views/PC5.vue')
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "provideinject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/provideinjectchild',
    name: 'ProvideInjectChild',
    component: () => import(/* webpackChunkName: "provideinjectchild" */ '../views/ProvideInjectChild.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/capi',
    name: 'CApi',
    component: () => import(/* webpackChunkName: "capi" */ '../views/CApi.vue')
  },
  {
    path: '/capi2',
    name: 'CApi2',
    component: () => import(/* webpackChunkName: "capi2" */ '../views/CApi2.vue')
  },
  {
    path: '/capi3',
    name: 'CApi3',
    component: () => import(/* webpackChunkName: "capi3" */ '../views/CApi3.vue')
  },
  {
    path: '/capi4',
    name: 'CApi4',
    component: () => import(/* webpackChunkName: "capi4" */ '../views/CApi4.vue')
  },
  {
    path: '/comapiprovide',
    name: 'ComAPIProvide',
    component: () => import(/* webpackChunkName: "comapiprovide" */ '../views/ComAPIProvide.vue')
  },
  {
    path: '/comapiinject',
    name: 'ComAPIInject',
    component: () => import(/* webpackChunkName: "comapiinject" */ '../views/ComAPIInject.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import(/* webpackChunkName: "mixins" */ '../views/Mixins.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customdirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugins.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
