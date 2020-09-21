<template>
  <div class="middle">
    <h4>请填写基本信息</h4>
    <div class="info-li">
      <ul>
        <li class="border-1px">姓名：<input type="text" placeholder="请输入姓名" v-model="micontent.lenderName" /></li>
        <li class="border-1px">手机号：<input type="text" placeholder="请填写手机号" v-model="micontent.lenderPhone" /></li>
        <li class="border-1px">身份证号码：<input type="text" placeholder="请填写身份证号" v-model="micontent.lenderIDNum" /></li>
        <li class="border-1px">新农保账户：<input type="text" placeholder="请填写三农补贴账户" v-model="micontent.accountNumber" /></li>
        <li class="border-1px">贷款金额(元)：<input type="text" placeholder="请填写贷款金额" v-model="chloanAmount" /></li>
        <li class="border-1px">贷款周期(月)：<input type="text" placeholder="请填写贷款周期" v-model="micontent.loanTerm" /></li>
        <li class="border-1px">贷款用途：<input type="text" placeholder="请填写贷款用途" v-model="micontent.loanUse" /></li>
        <li class="border-1px">银行卡：<input type="text" placeholder="请填写银行卡" v-model="micontent.bankCard" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Middle",
    props: ["micontent"],
    data() {
    	return {
    		"chloanAmount": this.keepTwoNum(this.micontent.loanAmount)
    	}
    },
    methods: {
    	keepTwoNum(value) {
    		value = Number(value);
    		return value.toFixed(2);
    	}
    }
  }
</script>

<style lang="stylus" scoped="scoped">
  @import "../../../assets/styles/border.styl";
  .middle {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  h4 {
    font-family: "PingFangSC-Medium";
    font-size: 15px;
    color: #8A9299;
    margin-bottom: 8px;
  }
  li {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    color: #2A343D;
    border-1px(#F0F0F0);
    padding: 12px 0;
  }
  input {
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    font-weight: bold;
    color: #2A343D;
    padding-left: 3px;
    width: 56vw;
  }
  input::-webkit-input-placeholder {
  	font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #C9CDD1;
  }
</style>