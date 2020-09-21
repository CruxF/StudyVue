<template>
  <div class="footer">
    <button class="btnOne">确定</button>
    <button class="btnTwo">修改</button>
  </div>
</template>

<script>
  export default {
    name: "SubmitFooter"
  }
</script>

<style lang="stylus" scoped="scoped">
  .footer {
    width: 100%;
    margin-top: .5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  button {
    height: .44rem;
    width: 2.7rem;
    line-height: .44rem;
    text-align: center;
    border: none;
    outline: none;
    border-radius: .22rem;
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #FFFFFF;
  }
  .btnOne {
  	margin-bottom: .16rem;
  	background-color: #52BA34;
  }
  .btnTwo {
  	border: 1px solid #52BA34;;
  	background-color: #fff;
  	color: #52BA34;;
  }
</style>