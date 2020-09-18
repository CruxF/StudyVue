<template>
  <div id="tml">
    <!--实现的是图片详情和缩略图-->
    <div id="desc">
      <!--图片详情- 标题部分-->
      <div class="title">
        <h4>{{photoinfo.title}}</h4>
        <p>
          {{photoinfo.add_time | datefmt('YYYY-MM-DD')}} {{photoinfo.click}}次浏览
        </p>
        <p class="line"></p>
      </div>

      <!--缩略图使用到mui和vue-preview-->
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li v-for="(item,index) in list" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, list)">
          </li>
        </ul>
      </div>

      <!--图片详情- 摘要部分-->
      <p v-html="photoinfo.content"></p>
    </div>

    <!--集成评论组件-->
    <div id="comment">
      <comment :id="id"></comment>
    </div>
  </div>
</template>

<script>
  //导入评论组件
  import comment from '../subcom/comment.vue';
  import { Toast } from 'mint-ui';
  export default {
    components: {
      comment //注册评论组件
    },
    data() {
      return {
        //图片的id
        id: 0,
        //图片的详情描述数据对象
        photoinfo: {},
        list: []
      }
    },
    created() {
      this.id = this.$route.params.id;
      //ajax请求图片的详情数据
      this.getinfo();
      this.getimgs();
    },
    methods: {
      //获取图片详细描述数据
      getinfo() {
        var url = '../../../statics/json/photoinfo.json';
        this.$http.get(url).then(function (res) {
          var body = res.body;
          if (body.status != 0) {
            Toast(body.message);
            return;
          }

          //将正常的逻辑数据赋值给this.photoinfo对象
          for (var i = 0; i < body.message.length; i++) {
            if (this.id == body.message[i].id) {
              this.photoinfo = body.message[i];
            }
          }
        });
      },
      getimgs() {
        var url = '../../../statics/json/imginfo' + this.id + '.json';
        this.$http.get(url).then(function (res) {
          var body = res.body;
          if (body.status != 0) {
            Toast(body.message);
            return;
          }
          this.list = body.message;
        });
      }
    }

  }
</script>

<style scoped>
  /*图片详情样式*/
  
  #desc {
    padding: 10px;
  }
  #desc .title h4 {
    color: #0094ff;
  }
  #desc .title p {
    color: rgba(0, 0, 0, 0.4);
    margin-top: 10px;
  }
  #desc .title .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  .mui-content,
  .mui-content ul {
    background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 0px;
    border-bottom: 0px;
  }
  .mui-grid-view.mui-grid-9 {
    border-top: 0px;
    border-left: 0px;
  }
</style>