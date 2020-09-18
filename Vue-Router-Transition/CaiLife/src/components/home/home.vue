<template>
  <div>
    <!-- 顶部导航样式 -->
    <mt-header fixed title="彩生活满意度调查问卷">
      
    </mt-header>
    <!--内容区域1-->
    <div id="page1">
      <div class="h-body">
        <h3>彩生活满意度调查问卷</h3>
        <p class="p1">请您对本月物业管理和服务员进行评价，我们会根据您的意见和反馈不断改进，为您提供更加满意的服务。</p>
        <p class="p2">注意！填完可以抽奖，送iPhone、彩饭票。</p>
      </div>
      <!--底部三角型区域-->
      <div class="h-footer">
      	<router-link to="/vote">
      		<span></span> 
      	</router-link>
      </div>
      <!--遮罩层-->
      <div v-bind:class="{mask:ismask}" @click="changeMask">
        <div class="m-content"> 问卷已经停止回收，请勿填写，不会被统计 </div>
      </div>
    </div>    
  </div>
</template>
<script>
  import { Radio } from 'mint-ui';
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
        let curtime1 = new Date("2017/03/21 22:59:30");
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
    }
  }
</script>
<style>
  .mint-header {
    background-color: #fff;
    color: #000;
  }
  
  .mint-header-button {
    color: #26a2ff;
  }
  
  html, body {
    height: 100%;
    width: 100%;
  }
  /*内容区域1*/
  
  #page1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .h-body {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #26a2ff;
    box-sizing: border-box;
    padding: 40px 12px 0;
    text-align: center;
    color: #fff;
  }
  
  .h-body h3 {
    margin-top: 100px;
    font-weight: normal;
    font-size: 20px;
    font-family: "微软雅黑";
    margin-bottom: 40px;
  }
  
  .h-body p {
    color: #fff;
    font-size: 13px;
    text-align: left;
  }
  
  .h-footer span {
    height: 14px;
    width: 14px;
    display: block;
    margin-left: -5px;
    background-color: #26a2ff;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: rotate(45deg);
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    animation: hfooter 1s ease 0.1s infinite;
  }
  @keyframes hfooter{
  	0%{
  		border-color: rgba(239,239,244,0.3);
  	}
  	20%{
  		border-color: rgba(239,239,244,0.5);
  	}
  	40%{
  		border-color: rgba(239,239,244,0.6);
  	}
  	60%{
  		border-color: rgba(239,239,244,0.7);
  	}
  	80%{
  		border-color: rgba(239,239,244,0.9);
  	}
  	100%{
  		border-color: rgba(239,239,244,1);
  	}
  }
  
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 10;
    display: block;
  }
  
  .mask .m-content {
    height: 45px;
    width: 96%;
    line-height: 45px;
    text-align: center;
    margin: 80px auto 0;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;
    background-color: #26a2ff;
    z-index: 99;
  } 
</style>