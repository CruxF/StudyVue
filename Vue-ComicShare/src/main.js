//导入vue核心包
import Vue from 'vue';

//导入App.vue的vue对象
import App from './App.vue';

//导入vue-router
import vueRouter from 'vue-router';
//将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

//使用图片预览组件vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

//导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
//导入mint-ui组件对象
import mintui from 'mint-ui';
//在Vue中全局使用mintui
Vue.use(mintui);

//注册mui的css样式
import '../statics/mui/css/mui.css';

//导入一个当前系统的全局基本样式
import '../statics/css/site.css';

//将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
import vueResource from 'vue-resource';
Vue.use(vueResource);

//导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdesc from './components/goods/goodsdesc.vue';

//定义路由规则
var router1 = new vueRouter({
	//改变路由激活时的class名称
  linkActiveClass: 'mui-active', 
  routes: [{
      path: '/',
      component: home 
    }, {
      path: '/home',
      component: home
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/news/newslist',
      component: newslist
    },
    {
      path: '/news/newsinfo/:id',
      component: newsinfo
    },
    {
      path: '/photo/photolist',
      component: photolist
    },
    {
      path: '/photo/photoinfo/:id',
      component: photoinfo
    },
    {
      path: '/goods/goodslist',
      component: goodslist
    },
    {
      path: '/goods/goodsinfo/:id',
      component: goodsinfo
    },
    {
      path: '/goods/goodsdesc/:id',
      component: goodsdesc
    }
  ]
});

//定义一个全局过滤器实现日期的格式化
import moment from 'moment';
Vue.filter('datefmt', function(input, fmtstring) {
  //使用momentjs这个日期格式化类库实现日期的格式化功能
  //input代表左值（原始时间格式），fmtstring代表右值括号内的规则
  return moment(input).format(fmtstring);
});

//利用Vue对象进行解析渲染
new Vue({
  el: '#app',
  //使用路由对象实例
  router: router1,
  render: c => c(App) //es6写法
})