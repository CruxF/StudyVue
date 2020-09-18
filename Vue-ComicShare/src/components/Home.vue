<template>
  <div id="tml">
  	<!--使用组件结合mint-ui实现轮播图-->
    <silder :imgs="list"></silder>

    <!--使用MUI的九宫格-->
    <div class="mui-content" style="margin-top: -30px;">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/goods/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/feedback">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/vide">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/callme">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import silder from './subcom/slider.vue';

  export default {
    components: {
      silder
    },
    data() {
      return {
        list: []
      }
    },
    created() {
      // 当页面中的data和methods对象都创建完毕以后，就会自动调用created
      this.getimgs();
    },
    methods: {
      getimgs() {
        // 实现轮播组件中的数据请求
        // 1.0 确定url
        var url = '../../statics/json/homeslide.json'
        console.log(url);
        // 2.0 调用$http.get()
        this.$http.get(url).then(function(response) {
          var data = response.body;
          //错误处理
          if(data.status != 0) {
            Toast(data.message);
            return;
          }
          // 如果服务器返回的数据正常则赋值给list
          this.list = data.message;
        });
      }
    }
  }
</script>

<style scoped>
  /*重写九宫格样式*/  
  .mui-content,
  .mui-content ul li a {
    background: #fff;
  }
  /*改变九宫格图标样式*/ 
  .mui-grid-9 .mui-icon-home:before,
  .mui-grid-9 .mui-icon-email:before,
  .mui-grid-9 .mui-icon-chatbubble:before,
  .mui-grid-9 .mui-icon-location:before,
  .mui-grid-9 .mui-icon-search:before,
  .mui-grid-9 .mui-icon-phone:before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
  .mui-grid-9 .mui-icon-home:before {
    background-image: url(../../statics/imgs/Hgrid/1.png);
  }
  .mui-grid-9 .mui-icon-email:before {
    background-image: url(../../statics/imgs/Hgrid/2.png);
  }
  .mui-grid-9 .mui-icon-chatbubble:before {
    background-image: url(../../statics/imgs/Hgrid/3.png);
  }
  .mui-grid-9 .mui-icon-location:before {
    background-image: url(../../statics/imgs/Hgrid/4.png);
  }
  .mui-grid-9 .mui-icon-search:before {
    background-image: url(../../statics/imgs/Hgrid/5.png);
  }
  .mui-grid-9 .mui-icon-phone:before {
    background-image: url(../../statics/imgs/Hgrid/6.png);
  }
</style>