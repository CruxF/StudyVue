import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//导入相关mint-ui组件
import 'mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
Vue.use(mintui);
//导入组件
import home from '@/components/home/home.vue';
import vote from '@/components/vote/vote.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
    	path:'/vote',
    	name:'vote',
    	component:vote
    }    
  ]
})
