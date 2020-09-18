# Vue.js路由切换效果实现

实现思路如下：

1、在根组件的路由占位符外面嵌套vue动画标签
```
<template>  
  <div id="app">   
    <transition :name="transitionName">  
      <router-view class="child-view"></router-view>  
    </transition>    
  </div>  
</template>  
```
2、监听路由的路径，通过不同的路径去选择不同的切换效果。transitionName可以随意定义，它对应的只不过是类的相关样式（else if那块是我过后添加上去的，本身并没有，可以添加上去玩一玩，加深理解）
```
<script>
export default {  
  name: 'app',  
  data () {  
    return {  
      transitionName: 'slide-bottom'  
    }  
  },  
  mounted () {  
  },  
  watch: {  
    '$route' (to, from) {  
      if(to.path == '/'){  
        this.transitionName = 'slide-top';  
      }else if(to.path =='/vote'){
      	this.transitionName = 'slide-left';
      }
      else{
        this.transitionName = 'slide-bottom';  
      }  
    }  
  }  
}  
</script> 
```
3、最后一步，也就是添加样式，记住上下与左右的相关行为是相反的就行。cubic-bezier是贝塞尔曲线，相关的内容可以来[这里](https://blog.csdn.net/qq_25600055/article/details/51045163)查看（额外添加动画效果那块也是事后添加上去增加印象的，大家可以自由发挥）
```
<style>  
.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all 1s cubic-bezier(.55,0,.1,1);  
}  
.slide-bottom-enter, .slide-top-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(0, 50px);  
  transform: translate(0, 50px);  
}
.slide-bottom-leave-active, .slide-top-enter {  
  opacity: 0;  
  -webkit-transform: translate(0, -50px);  
  transform: translate(0, -50px);  
}
/*额外添加动画效果*/
 .slide-left-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(50px, 0);  
  transform: translate(50px, 0);  
}
 .slide-left-enter {  
  opacity: 0;  
  -webkit-transform: translate(-50px, 0);  
  transform: translate(-50px, 0);  
}
</style>  
```

### 尾声
以上所有代码都在根组件App.vue中，如果嫌麻烦的话只要将其中的代码全部copy即可，不必下载整个项目。

## 下载运行

``` bash
第一步：git clone https://github.com/cruxf/VRouterTransition.git

第二步：cd CaiLife

第三步：npm install

第四步：npm run dev

```
