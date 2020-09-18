<template>
  <div id="tml">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in imgs">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    //用来接收父组件传入过来的数据
    props: ['imgs']
  }
</script>

<style scoped>
  /*重写轮播图样式*/
  
  .mint-swipe {
    height: 310px;
  }
  .mint-swipe-item {
    width: 100%;
    height: 300px;
  }
  .mint-swipe-item img {
    width: 100%;
    height: 80%;
  }
</style>