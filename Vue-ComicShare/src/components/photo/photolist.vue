<template>
  <div id="tml">
    <!--图片分类-->
    <div id="cate">
      <ul v-bind="{style:'width:'+ulWidth+'px'}">
        <li>全部</li>
        <li v-for="item in cates">{{item.title}}</li>
      </ul>
    </div>

    <!--图片列表-->
    <div id="imglist">
      <ul>
        <li v-for="item in list">
        	<router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
          <img v-lazy="item.img_url">
          <div id="desc">
            <h5 v-text="item.title"></h5>
            <p v-text="item.zhaiyao"></p>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        ulWidth: 320,
        cates: [], //
        list: []
      }
    },
    created() {
      this.getcates();
      this.getimages();
    },
    methods: {
      getimages() {
        //1.0确定url
        var url = '../../../statics/json/photolist.json';
        // 2.0调用$http.get()
        this.$http.get(url).then(function(response) {
          //3.0获取响应报文体数据
          var data = response.body;
          //4.0判断响应报文体中的状态值
          //如果非0,则将服务器响应回来的错误消息提示给用户
          if(data.status != 0) {
            Toast(data.message);
            return;
          }
          //5.0如果服务器返回数据正常，则赋值给list
          this.list = data.message;
        })
      },
      getcates() {
        //1.0确定url
        var url = '../../../statics/json/phototitle.json';
        // 2.0调用$http.get()
        this.$http.get(url).then(function(response) {
          //3.0获取响应报文体数据
          var data = response.body;
          //4.0判断响应报文体中的状态值
          //如果非0,则将服务器响应回来的错误消息提示给用户
          if(data.status != 0) {
            Toast(data.message);
            return;
          }
          //5.0如果服务器返回数据正常，则赋值给list
          this.cates = data.message;
          //6.0实现当前分类数据所在的ul的总宽度
          var w = 62;
          var count = data.message.length + 1;
          this.ulWidth = w * count;
        })
      }
    }
  }
</script>

<style scoped>
  /*图片分类*/ 
  #cate {
    width: 375px;
    max-width: 375px;
    overflow-x: auto;
  }
  #cate ul {
    margin: 0px;
    padding-left: 10px;
  }
  #cate li {
    list-style: none;
    display: inline-block;
    color: #0094FF;
    font-size: 14px;
    padding-left: 6px;
  }
  /*实现图片列表样式*/  
  #imglist {}
  #imglist ul {
    padding: 0;
  }
  #imglist li {
    list-style: none;
    position: relative;
  }
  #imglist img {
    width: 100%;
    height: 200px;
  }
  #desc {
    width: 100%;
    height: auto;
    background-color: #272020;
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #desc h5 {
    color: #F0F0F0;
    font-weight: bold;
  }
  #desc p {
    color: #fff;
  }
</style>