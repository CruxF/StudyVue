<template>
  <div class="middle">
    <div class="middle-image">

    </div>
    <h4>提交成功</h4>
    <p>3个工作日内工作人员会与您联系</p>
  </div>
</template>

<script>
  export default {
    name: "SubmitMiddle"
  }
</script>

<style lang="stylus" scoped="scoped">
  @import "../../../assets/styles/image.styl";
  .middle {
    width: 100%;
    margin-top: .64rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .middle-image {
    height: .8rem;
    width: .8rem;
    bg-image("../imgs/Oval-3");
    background-size: .8rem .8rem;
  }
  h4 {
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    font-weight: bold;
    color: #2A343D;
    margin: 12px 0;
  }
  p {
    font-family: "PingFangSC-Regular";
    font-size: 15px;
    color: #8A9299;
  }
</style>