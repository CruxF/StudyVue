<template>
  <div id="home">
    <!-- 顶部导航样式 -->
    <v-header></v-header>
    <!--中间内容区-->
    <div id="page1">
      <div class="h-body">
        <h3>XXX<br>满意度调查问卷</h3>
        <div class="p-content">
          <p class="cp">请您对本月物业管理和服务员进行评价，我们会根据您的意见和反馈不断改进，为您提供更加满意的服务。</p>
          <span>填完问卷即可参与抽奖</span>
        </div>
      </div>
      <!--底部三角型区域-->
      <div class="h-footer">
        <span class="sp1">上滑填写</span>
        <router-link to="/vote">
          <span class="sp2"></span>
        </router-link>
      </div>
      <!--遮罩层-->
      <div class="hidden" v-bind:class="{mask:ismask}">
        <div class="m-content">
          <p>问卷已经停止回收<br>请勿填写，不会被统计</p>
          <button @click="changeMask">返回首页</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import header from '@/components/header/header.vue'
  export default {
    data() {
      return {
        ismask: false,
      }
    },
    mounted() {
      this.showIsmask()
    },
    methods: {
      //根据时间来判断是否显示遮罩层
      showIsmask() {
        //当前时间戳
        let curtime = new Date();
        let nowtime = curtime.getTime();
        //活动结束时间戳
        let curtime1 = new Date("2018/03/30 22:59:30");
        let nowtime1 = curtime1.getTime();
        //两段时间戳的差值
        let differtime = nowtime - nowtime1;
        if (differtime > 0) {
          console.log("活动有效");
        } else {
          this.ismask = true;
        }
      },
      changeMask() {
        this.ismask = false;
      }
    },
    components: {
      'v-header': header
    }
  }
</script>
<style scoped="scoped">
  /*内容区域*/
  .h-body {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(bg@3x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    margin-top: 6.6vh;
    margin-bottom: -6.6vh;
    text-align: center;
  }
  .h-body h3 {
    margin-top: 8.7vh;
    font-family: PingFangSC-Medium;
    font-size: 0.648rem;
    color: #FFFFFF;
  }
  .h-body .p-content {
    height: 21vh;
    width: 82.9vw;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 0.06rem;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    text-align: left;
    position: relative;
  }
  .p-content p{
  	margin: 0;
  	padding: 0;
  }
  .p-content .cp {
    font-family: PingFangSC-Regular;
    font-size: .255rem;
    color: #3196FA;
    letter-spacing: 0;
    line-height: .392rem;
  }
  .p-content span {
    font-family: PingFangSC-Medium;
    font-size: .256rem;
    color: #3196FA;
    letter-spacing: 0;
    line-height: .358rem;
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-weight: bold;
  }
  .h-footer {
    width: 40vw;
    height: 8.8vh;
    position: absolute;
    left: 50%;
    bottom: 1.3vh;
    margin-left: -20vw;
    margin-bottom: 1.3vh;
    text-align: center;
  }
  .h-footer .sp1 {
    opacity: 0.8;
    font-family: PingFangSC-Medium;
    font-size: .307rem;
    color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .h-footer .sp2 {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 5.1vh;
    width: 9.1vw;
    display: block;
    background-image: url(white@3x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: block;
    transform: translateX(-50%);
  }
  .hidden {
    display: none;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 1;
    display: block;
  }
  .mask .m-content {
    height: 20.7vh;
    width: 72vw;
    z-index: 100;
    background: #FFFFFF;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    padding-top: 3.6vh;
    box-sizing: border-box;
  }
  .m-content p {
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    color: #333333;
    line-height: .426rem;
    margin: 0;
    padding: 0;
  }
  .m-content button {
    font-family: PingFangSC-Medium;
    font-size: 0.29rem;
    line-height: 0.24rem;
    color: #007AFF;
    letter-spacing: 0;
    background-color: #fff;
    position: absolute;
    left: 50%;
    bottom: 1.2vh;
    transform: translateX(-50%);
    border: none;
    cursor: pointer;
  }
</style>