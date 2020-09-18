<template>
  <div class="header">
    <!-- 顶部导航样式 -->
    <div class="h-header">
      <div class="left">
        <span class="l-span" @click="Toback"></span>
        <span class="r-span"></span>
      </div>
      <div class="middle">
        <span>满意度调查问卷</span>
      </div>
      <div class="right">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>export default {
  name: 'v-header',
  data() {
    return {}
  },
  methods: {
    Toback() {
      window.history.go(-1);
    }
  }
}</script>
<style scoped="scoped">
  /*顶部区域*/  
  .h-header {
    height: 6.6vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .h-header .left {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .left .l-span {
    display: inline-block;
    height: 3.6vh;
    width: 6.4vw;
    background-image: url(back@3x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 10px;
  }
  .left .r-span {
    display: inline-block;
    height: 3.6vh;
    width: 6.4vw;
    background-image: url(backcopy@3x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 12px;
  }
  .h-header .middle {
    flex: 3;
    font-family: PingFangSC-Medium;
    font-size: .3rem;
    color: #333333;
    letter-spacing: -0.43px;
    line-height: 0.18rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .h-header .right {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  .h-header .right span {
    height: 0.7vh;
    width: 1.2vw;
    border-radius: 50%;
    background: #333333;
    margin-right: 3px;
  }
  .h-header .right span:first-child {
    margin-right: 15px;
  }
</style>