import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/Recommend'
import Submit from '@/components/submit/Submit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },{
      path: '/Submit',
      name: 'Submit',
      component: Submit
    }
  ]
})
