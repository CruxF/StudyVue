import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/components/home/home'
import vote from '@/components/vote/vote'
import advice from '@/components/advice/advice'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
    	path: '/vote',
      name: 'vote',
      component: vote
    },{
    	path:'/advice',
    	name:'advice',
    	component:advice
    }
  ]
})
