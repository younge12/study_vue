import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DB from '../views/DB.vue'
import DBFor from '../views/DBFor.vue'
import DBIf from '../views/DBIf.vue'
import DBOn from '../views/DBOn.vue'
import Computed from '../views/Computed.vue'
import DBBindingList2 from '../views/DBBindingList2.vue'
import NC from '../views/NC.vue'
import CC from '../views/CC.vue'
import PC from '../views/PC.vue'
import CC2 from '../views/CC2.vue'
import PC2 from '../views/PC2.vue'
import CC3 from '../views/CC3.vue'
import PC3 from '../views/PC3.vue'
import CC4 from '../views/CC4.vue'
import PC4 from '../views/PC4.vue'
import CC5 from '../views/CC5.vue'
import PC5 from '../views/PC5.vue'
import ProvideInject from '../views/ProvideInject.vue'
import ProvideInjectChild from '../views/ProvideInjectChild.vue'
import Calculator from '../views/Calculator.vue'
import CApi from '../views/CApi.vue'
import CApi2 from '../views/CApi2.vue'
import CApi3 from '../views/CApi3.vue'
import CApi4 from '../views/CApi4.vue'
import ComAPIProvide from '../views/ComAPIProvide.vue'
import ComAPIInject from '../views/ComAPIInject.vue'
import Mixins from '../views/Mixins.vue'
import CustomDirective from '../views/CustomDirective.vue'
import Plugins from '../views/Plugins.vue'

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
  },
  {
    path: '/dbbindinglist2',
    name: 'DBBindingList2',
    component: DBBindingList2
  },
  {
    path: '/nc',
    name: 'NC',
    component: NC
  },
  {
    path: '/cc',
    name: 'CC',
    component: CC
  },
  {
    path: '/pc',
    name: 'PC',
    component: PC
  },
  {
    path: '/cc2',
    name: 'CC2',
    component: CC2
  },
  {
    path: '/pc2',
    name: 'PC2',
    component: PC2
  },
  {
    path: '/cc3',
    name: 'CC3',
    component: CC3
  },
  {
    path: '/pc3',
    name: 'PC3',
    component: PC3
  },
  {
    path: '/cc4',
    name: 'CC4',
    component: CC4
  },
  {
    path: '/pc4',
    name: 'PC4',
    component: PC4
  },
  {
    path: '/cc5',
    name: 'CC5',
    component: CC5
  },
  {
    path: '/pc5',
    name: 'PC5',
    component: PC5
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/provideinjectchild',
    name: 'ProvideInjectChild',
    component: ProvideInjectChild
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/capi',
    name: 'CApi',
    component: CApi
  },
  {
    path: '/capi2',
    name: 'CApi2',
    component: CApi2
  },
  {
    path: '/capi3',
    name: 'CApi3',
    component: CApi3
  },
  {
    path: '/capi4',
    name: 'CApi4',
    component: CApi4
  },
  {
    path: '/comapiprovide',
    name: 'ComAPIProvide',
    component: ComAPIProvide
  },
  {
    path: '/comapiinject',
    name: 'ComAPIInject',
    component: ComAPIInject
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: Mixins
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
