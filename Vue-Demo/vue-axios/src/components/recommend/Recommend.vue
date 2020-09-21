<template>
  <div class="recommend">
    <header-item></header-item>
    <middle-item :micontent="MiddleInfo"></middle-item>
    <footer-item :focontent="SuveyProblemList"></footer-item>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import Middle from './middle/Middle.vue'
  import Footer from './footer/Footer.vue'
  // 导入axios插件
  import axios from 'axios'
  export default {
    name: 'Recommend',
    data() {
      return {
      	SuveyProblemList: [],
        MiddleInfo: {
          "lenderName": "张三",
          "lenderPhone": "13820902345",
          "lenderIDNum": "441633199104021446",
          "accountNumber": "64548015789466843",
          "bankCard": "64548015789466843",
          "loanAmount": 100000,
          "loanUse": "粮食生产，加工及流通",
          "loanTerm": 5,
          "qAnswer": [{
            "qId": "001",
            "anster": "Y"
          }, {
            "qId": "002",
            "anster": "N"
          }]
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getSuveyProblem();
      });
    },
    methods: {
      getSuveyProblem() {
        var self = this;
        axios({
          method: 'get',
          url: '../../../static/data/SurveyProblem.json',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function(res) {
        	var response = res.data;
        	if(response.code == "001"){
        		self.SuveyProblemList = res.data.data;
        	}
        }).catch(function(error) {
          console.log("访问失败！")
        })
      }
    },
    components: {
      'header-item': Header,
      'middle-item': Middle,
      'footer-item': Footer
    }
  }
</script>

<style>

</style>