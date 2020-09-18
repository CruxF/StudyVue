<template>
  <div id="tml">
    <h4 v-text="info.title" style="padding-top: 10px;"></h4>
    <p class="line"></p>
    <p v-html="info.content"></p>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        id: 0, // 代表的是当前商品的id
        info: {}
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getinfo();
    },
    methods: {
      getinfo() {
        //1.0 定义url
        var url = '../../../statics/json/goodsdesc.json';
        //2.0 发出ajax请求获取数据
        this.$http.get(url).then(function (res) {
          var body = res.body;
          if (body.status != 0) {
            alert(body.message);
            return;
          }
          //3.0 赋值
          for (var i = 0; i < body.message.length; i++) {
            if (this.id == body.message[i].id) {
              console.log(body.message[i])
              this.info = body.message[i];
              console.log(this.info);
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  #tmpl {
    padding: 5px;
    margin-top: 60px;
  }
  #tmpl h4 {
    color: #0094ff;
  }
  #tmpl .line {
    height: 1px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
</style>