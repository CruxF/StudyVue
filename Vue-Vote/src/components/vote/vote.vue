<template>
  <div class="vote">
    <!-- 顶部导航样式 -->
    <v-header></v-header>
    <!--中间主体内容-->
    <div class="v-body">
      <ul>
        <li class="v-li" v-for="(item,index) in lists" v-if="index==pageIndex">
          <div class="v-header">
            <h5>{{index+1}}{{item.productName}}</h5>
          </div>
          <div class="v-content">
            <ul>
              <li v-for="(child,index) in item.parts" @click="isshow(index)">
                <span v-bind:class="{show:ishow==index}">
              	  <input type="radio" name="love" v-bind:id="child.partsId" v-bind:class="{opaty:ishow==index}" v-on:click="changePageIndex()" /> 
              	</span>
                <label v-bind:for="child.partsFor">{{child.partsName}}</label>
              </li>
            </ul>
          </div>
          <!--底部箭头区-->
          <router-link to="/advice">
            <div class="v-footer">
            <span></span>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
	import axios from 'axios';
  import header from '@/components/header/header.vue';
  export default {
    data() {
      return {
        ishow: -1,
        pageIndex:0,       
        lists:[
        	{
	        "productName":"、请问你对小区的环境，有什么感受？",
	        "parts":[
	          {
	            "partsId":"worst",
	            "partsFor":"worst",
	            "partsName":"非常不满意"
	          },
	          {
	            "partsId":"bad",
	            "partsFor":"bad",
	            "partsName":"不满意"
	          },
	          {
	            "partsId":"general",
	            "partsFor":"general",
	            "partsName":"一般"
	          },
	          {
	            "partsId":"good",
	            "partsFor":"good",
	            "partsName":"满意"
	          },
	          {
	            "partsId":"better",
	            "partsFor":"better",
	            "partsName":"非常满意"
	          }
	        ]
	      },
	      {
	        "productName":"、请问你对小区的生活，有什么感受？",
	        "parts":[
	          {
	            "partsId":"worst",
	            "partsFor":"worst",
	            "partsName":"非常不满意"
	          },
	          {
	            "partsId":"bad",
	            "partsFor":"bad",
	            "partsName":"不满意"
	          },
	          {
	            "partsId":"general",
	            "partsFor":"general",
	            "partsName":"一般"
	          },
	          {
	            "partsId":"good",
	            "partsFor":"good",
	            "partsName":"满意"
	          },
	          {
	            "partsId":"better",
	            "partsFor":"better",
	            "partsName":"非常满意"
	          }
	        ]
	      },
	      {
	        "productName":"、请问你对小区的宠物，有什么感受？",
	        "parts":[
	          {
	            "partsId":"worst",
	            "partsFor":"worst",
	            "partsName":"非常不满意"
	          },
	          {
	            "partsId":"bad",
	            "partsFor":"bad",
	            "partsName":"不满意"
	          },
	          {
	            "partsId":"general",
	            "partsFor":"general",
	            "partsName":"一般"
	          },
	          {
	            "partsId":"good",
	            "partsFor":"good",
	            "partsName":"满意"
	          },
	          {
	            "partsId":"better",
	            "partsFor":"better",
	            "partsName":"非常满意"
	          }
	        ]
	      }
        ]
      }
    },
    mounted() {
			this.$nextTick(function () {
//      this.voteView();
      })
    },
    methods: {
      isshow(index) {
        this.ishow = index;
      },
      changePageIndex(){
      	this.ishow = -1;
      	if(this.pageIndex < 2){
      		this.pageIndex++;
      	}else{
      		this.pageIndex == 2;
      	}
      },
      voteView(){
      	var _this = this;
//    	debugger
      	axios.get("../../data/vote.json",{"id":123}).then(function(res){
      		_this.lists = res.data.result.list;
      		console.log(res);
      	});
      }
    },
    components: {
      'v-header': header
    }
  }
</script>
<style scoped="scoped">
  .v-body {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-top: 6.6vh;
    margin-bottom: -6.6vh;
    border-top: 1px solid #EBECF0;
    box-sizing: border-box;
  }
  .v-body ul {
    list-style: none;
    height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .v-body ul h5 {
    padding: 0;
    margin: 0;
  }
  .v-body .v-li {
    height: 100%;
    width: 89.3vw;
    background-color: white;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .v-body .v-header {
    height: 8.5vh;
    width: 90%;
    line-height: 8.5vh;
    border-bottom: 1px solid #F0F1F5;
    overflow: hidden;
  }
  .v-header h5 {
    font-family: PingFangSC-Medium;
    font-size: .273rem;
    color: #3196FA;
    font-weight: normal;
  }
  .v-content li {
    height: 7.6vh;
    width: 90%;
    line-height: 7.6vh;
    border-bottom: 1px solid #F0F1F5;
    display: flex;
    align-items: center;
  }
  .v-content li span {
    width: 6vw;
    height: 3.3vh;
    /*background: #333;*/
  }
  .v-content .show {
    background-image: url(red@3x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .v-content li input {
    width: 6vw;
    height: 3.3vh;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    margin-top: -5.2vh;
  }
  .opaty {
    opacity: 0;
  }
  .v-content li label {
    font-family: PingFangSC-Regular;
    font-size: 0.256rem;
    color: #525C66;
    letter-spacing: 0;
    margin-left: 16px;
  }
  .v-footer {
    position: absolute;
    left: 50%;
    bottom: 6.6vh;
    height: 10vh;
    width: 15vw;
    transform: translateX(-50%);
  }
  .v-footer span {
    height: 5.1vh;
    width: 9.1vw;
    background-image: url(blue@3x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 2.7vh;
    left: 50%;
    transform: translateX(-50%);
  }
</style>