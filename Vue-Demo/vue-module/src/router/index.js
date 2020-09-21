import Vue from 'vue'
import Router from 'vue-router'
import ParentOne from '@/components/parent/ParentOne'
import ParentTwo from '@/components/parent/ParentTwo'
import BrotherOne from '@/components/brother/BrotherOne'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/ParentOne',
    name: 'ParentOne',
    component: ParentOne
  }, {
    path: '/ParentTwo',
    name: 'ParentTwo',
    component: ParentTwo
  }, {
    path: '/BrotherOne',
    name: 'BrotherOne',
    component: BrotherOne
  }]
})