<template>
  <div id="tml">
    <!--评论组件-->
    <!--实现提交评论数据到服务器的静态结构-->
    <div id="postcomment">
      <h4>提交评论</h4>
      <p class="p"></p>
      <textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
      <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
    </div>
    <!--实现获取评论数据列表-->
    <div id="list">
      <h4>评论列表</h4>
      <p class="p"></p>
      <div v-for="(item,index) in list">
        <div class="title">
          <span>第{{index + 1}}楼</span>
          <span style="margin: 0px 7px;">用户：{{item.user_name}}</span>
          <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD')}}</span>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" v-text="item.content"></li>
        </ul>
      </div>
    </div>
    <!--实现获取更多按钮-->
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        id: 0,
        postcontent: '', //用来自动获取用户填写的评论内容
        list: [] //评论数据的数组
      }
    },
    created() {
      //获取url传入的id参数值赋值给data中的id属性
      this.id = this.$route.params.id;
      //获取当前资讯数据的评论信息列表
      this.getcommentlist();
    },
    methods: {
      //获取当前数据的评论数据 pageindex:代表的是当前获取的是哪一页的数据，默认值是1
      getcommentlist() {
        //确定评论数据的url
        var url = '../../statics/json/userslist.json';
        //发出ajax请求获取数据即可
        this.$http.get(url).then(function (res) {
          if (res.body.status != 0) {
            Toast(res.body.message);
            return;
          }
          //3.0 message数组中的数据赋值给this.list
          this.list = this.list.concat(res.body.message);
        });
      },
      //1.0 评论数据的提交
      postcomment() {
        //2.0 判断用户是否填写评论内容
        if (this.postcontent.trim().length <= 0) {
          Toast('您要评论的内容不能为空');
          return;
        }
      }
    }
  }
</script>

<style scoped>
  /* 1.0 实现提交评论样式 */  
  #postcomment {
    padding: 5px;
  }
  .p {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  /*2.0 评论列表的样式*/ 
  #list {
    padding: 5px;
  }
  .title {
    padding: 5px;
    color: #6d6d72;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  textarea {
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    margin-right: 10px;
  }
</style>