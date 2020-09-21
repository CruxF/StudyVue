// 1.0导入vue核心包
import Vue from 'vue';
//2.0 导入App.vue的vue对象
import App from './App.vue';
//3.0 导入vue-router
import vueRouter from 'vue-router';
//3.0.1将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
//3.0.2导入相关mint-ui组件
import 'mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
Vue.use(mintui);
//3.0.3导入mui组件
import '../static/mui/css/mui.css';
//3.0.4导入路由规则对应的组件对象
import home from './components/home/home.vue';
import vote from './components/vote/vote.vue';
//3.0.5定义路由规则
var router1 = new vueRouter({
  routes: [{
      path: "/",
      component: home
   },
    {
      path: '/vote',
      component: vote
      }
    ]
});
//4.0利用Vue对象进行解析渲染
new Vue({
  el: '#app',
  //使用路由对象实例
  router: router1,
  render: c => c(App) //es6写法
})