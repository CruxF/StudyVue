<template>
  <div id="tml">
    <!--使用mui框架，实现新闻资讯列表样式-->
    <ul class="mui-table-view">
      <li v-for="item in list" class="mui-table-view-cell mui-media">
        <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis' v-text="item.zhaiyao" style="margin-top: 3px;"></p>
            <div class="ft">
              <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD')}}</span>
              <span>点击数：{{item.click}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        list: [] //新闻列表功能
      }
    },
    created() {
      this.getnewslist();
    },
    methods: {
      //获取JSON中的新闻资讯
      getnewslist() {
        //1.0确定url
        var url = '../../statics/json/newslist.json';
        // 2.0调用$http.get()
        this.$http.get(url).then(function (response) {
          //3.0获取响应报文体数据
          var data = response.body;
          //4.0判断响应报文体中的状态值
          //如果非0,则将服务器响应回来的错误消息提示给用户
          if (data.status != 0) {
            Toast(data.message);
            return;
          }
          //5.0如果服务器返回数据正常，则赋值给list
          this.list = data.message;
        })
      }
    }
  }
</script>

<style>
  .mui-table-view img {
    height: 80px;
    width: 80px;
  }
  .mui-table-view .mui-media-object {
    height: 80px;
    line-height: 80px;
    max-width: 80px;
  }
  .ft {
    margin-top: 1.5em;
    font-size: 14px;
    color: #0094ff;
  }
</style>