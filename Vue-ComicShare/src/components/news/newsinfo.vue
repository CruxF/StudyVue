<template>
  <div id="tml">
    <!--1.0 实现新闻详情-->
    <div class="title">
      <h4 v-text="info.title"></h4>
      <p>
        <span>{{ info.add_time | datefmt('YYYY-MM-DD') }}</span>
        <span>{{info.click}}次浏览</span>
        <div id="content" v-html="info.content"></div>
      </p>
    </div>
    <!--调用评论组件-->
    <comment></comment>
  </div>
</template>

<script>
  //导入评论组件 comment.vue
  import comment from '../subcom/comment.vue';
  export default {
    components: {
      comment // 注册评论组件
    },
    data() {
      return {
        id: 0, // 传入的id值
        info: {}
      }
    },
    created() {
      //1.0 获取url传入的id参数值赋值给data中的id属性
      this.id = this.$route.params.id;
      //2.0 请求服务器获取到这个id对应的详情数据对象
      this.getinfo();
    },
    methods: {
      getinfo() {
        //1.0 定义url
        var url = '../../statics/json/newsinfo.json';
        //2.0 发出ajax请求获取数据
        this.$http.get(url).then(function (res) {
          var body = res.body;
          if (body.status != 0) {
            alert(body.message);
            return;
          }
          for (var i = 0; i < body.message.length; i++) {
            if (this.id == body.message[i].id) {
              this.info = body.message[i];
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .title h4 {
    color: #0094ff;
  }
  .title p {
    color: rgba(0, 0, 0, 0.5);
  }
  .title,
  #content {
    padding: 5px;
  }
  #content {
    line-height: 27px;
  }
</style>