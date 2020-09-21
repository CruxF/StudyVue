<template>
  <div class="header">
    <div class="h-back" @click="Toback"></div>
    <div class="h-title">惠农贷推荐信息</div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {

      }
    },
    methods: {
      Toback() {
        window.history.go(-1);
      }
    }
  }
</script>

<style lang="stylus" scoped="scoped">
  @import "../../../assets/styles/image.styl";
  .header {
    display: flex;
    padding: 8px 10px;
  }
  .h-back {
    height: .2rem;
    width: .2rem;
    bg-image("../imgs/back");
    background-size: .2rem .2rem;
    background-repeat: no-repeat;
    flex: 1;
  }
  .h-title {
    font-family: "PingFangSC-Medium";
    font-size: 17px;
    line-height: .2rem;
    color: #333;
    text-align: center;
    letter-spacing: 1px;
    flex: 10;
  }
</style>