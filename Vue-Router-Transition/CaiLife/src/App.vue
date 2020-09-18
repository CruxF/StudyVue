<template>  
  <div id="app">   
    <transition :name="transitionName">  
      <router-view class="child-view"></router-view>  
    </transition>    
  </div>  
</template>  
  
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
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果  
  watch: {  
    '$route' (to, from) {  
      if(to.path == '/'){  
        this.transitionName = 'slide-top';  
      }else{  
        this.transitionName = 'slide-bottom';  
      }  
    }  
  }  
}  
</script>  
  
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
</style>  