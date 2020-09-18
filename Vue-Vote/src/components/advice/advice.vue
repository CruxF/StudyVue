<template>
  <div class="advice">
    <!-- 顶部导航样式 -->
    <v-header></v-header>
    <!--中间主体内容部分-->
    <div class="a-header">
      <h4>{{message}}</h4>
      <div class="a-content">
        <form action="#" method="post">
          <textarea class="tear" placeholder="请输入内容"></textarea>
          <input class="inpu" type="button" value="提交" @click="islayer=!islayer" />
        </form>
      </div>
      <!--弹出框-->
      <div class="layer" v-show="islayer">
        <div class="l-content">
          <h4 class="border-1px">是否要形成投诉单？</h4>
          <div class="select">
            <button class="deter">确定</button><button class="cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import header from '@/components/header/header.vue';
  export default {
    data() {
      return {
        islayer: false,
        message: "8、对我们有什么建议？"
      }
    },
    methods: {

    },
    components: {
      'v-header': header
    }
  }
</script>
<style scoped="scoped">
  .advice {
    overflow: hidden;
  }
  .a-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-top: 6.6vh;
    margin-bottom: -6.6vh;
    border-top: 1px solid #EBECF0;
    box-sizing: border-box;
  }
  .a-header h4 {
    margin: 0;
    padding: 0;
    width: 89.3vw;
    height: 8.2vh;
    line-height: 8.2vh;
    font-family: PingFangSC-Medium;
    font-size: .273rem;
    color: #3196FA;
    margin: 0 auto;
    font-weight: normal;
  }
  .a-header .a-content {
    height: 28vh;
    width: 89.3vw;
    margin: 0 auto;
  }
  .a-content textarea {
    height: 28vh;
    width: 100%;
    box-sizing: border-box;
    background: #F2F3F4;
    border-radius: 6px;
    padding: 1.6vh 3.2vw;
    outline: none;
    resize: none;
    border: none;
  }
  .a-content .tear {
    font-family: PingFangSC-Regular;
    font-size: .238rem;
    color: #525C66;
  }
  .a-content input {
    position: absolute;
    bottom: 9.3vh;
    width: 89.3vw;
    height: 6.6vh;
    background: #3397FB;
    border-radius: 6px;
    border: none;
    outline: none;
    resize: none;
  }
  .a-content .inpu {
    font-family: PingFangSC-Medium;
    font-size: 0.307rem;
    color: #FFFFFF;
  }
  .layer {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
    background: #000000;
    z-index: 10;
  }
  .layer .l-content {
    position: relative;
    top: 50%;
    left: 50%;
    height: 17.2vh;
    width: 72vw;
    text-align: center;
    border-radius: 12px;
    background: #FFFFFF;
    transform: translate(-50%, -50%);
  }
  .l-content h4 {
    width: 72vw;
    height: 10.6vh;
    line-height: 10.6vh;
    border-bottom: 1px solid #E3E4E6;
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    color: #333333;
  }
  .l-content .select {
    z-index: 100;
    display: flex;
    align-content: center;
  }
  .l-content .deter {
    flex: 1;
    height: 6.5vh;
    font-family: PingFangSC-Medium;
    font-size: .29rem;
    color: #007AFF;
    border-bottom-left-radius: 12px;
    outline: none;
    resize: none;
    border: none;
    background-color: #fff;
    border-right: 1px solid #E3E4E6;
  }
  .l-content .cancel {
    flex: 1;
    height: 6.5vh;
    font-family: PingFangSC-Medium;
    font-size: .29rem;
    color: #333;
    border-bottom-right-radius: 12px;
    outline: none;
    resize: none;
    border: none;
    background-color: #fff;
  }
</style>