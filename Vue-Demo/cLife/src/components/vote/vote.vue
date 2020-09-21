<template>
  <div>
    <!-- 顶部导航样式 -->
    <mt-header fixed title="账单满意度调查问卷">
      <router-link to="/" slot="left">
        <mt-button icon="back">black</mt-button>
      </router-link>
    </mt-header>
    <div id="page2">
      <div class="h-content">
        <mt-radio :title=title v-model="value" :options="option1" @change="check"> </mt-radio>
        <div class="c-footer"> <span></span> </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Radio } from 'mint-ui';
  export default {
    data() {
      return {
        title: "1、请问你对小区的管理，总体印象感到？",
        value: "",
        option1: [
          {
            label: "非常满意",
            value: "A"
        	},
          {
            label: "比较满意",
            value: "B"
        	},
          {
            label: "一般",
            value: "C"
        	},
          {
            label: "不满意",
            value: "D"
        	},
          {
            label: "非常不满意",
            value: "E"
        	}
        ]
      }
    },
    mounted() {},
    methods: {
      check() {
        console.log(this.value)
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
  
  #page2 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  
  .h-content {
    box-sizing: border-box;
    padding: 40px 0 0 0;
  }
  
  .mint-radiolist-title {
    margin-top: 10px;
    color: black;
    font-size: 16px;
    padding: 20px 0;
  }
  
  .mint-cell-wrapper {
    height: 5rem;
  }
  
  .c-footer span {
    height: 16px;
    width: 16px;
    display: block;
    margin-left: -8px;
    background-color: rgb(239, 239, 244);
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: rotate(45deg);
    border-left: 3px solid black;
    border-top: 3px solid black;
    animation: cfooter 1s ease 0.1s infinite;
  }
  @keyframes cfooter{
  	0%{
  		border-color: #000;
  		opacity: 0.2;
  	}
  	20%{
  		border-color: #000;
  		opacity: 0.4;
  	}
  	40%{
  		border-color: #000;
  		opacity: 0.6;
  	}
  	60%{
  		border-color: #000;
  		opacity: 0.8;
  	}
  	80%{
  		border-color: #000;
  		opacity: 0.9;
  	}
  	100%{
  		border-color: #000;
  		opacity: 1;
  	}
  }
</style>