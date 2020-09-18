<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <button class="login" open-type="getUserInfo" lang="zh_CN" @getuserinfo="login">{{userinfo.nickName}}</button>
    </div>
    <YearProgress></YearProgress>

    <button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>
  </div>
</template>
<script>
  import qcloud from 'wafer2-client-sdk'
  import YearProgress from '@/components/YearProgress'
  import { showSuccess } from '@/util'
  import config from '@/config'
  export default {
    components: {
      YearProgress
    },
    data () {
      return {
        userinfo: {
          avatarUrl: '../../../static/img/unlogin.png',
          nickName: '点击登录'
        }
      }
    },
    methods: {
      scanBook () {
        wx.scanCode({
          success: (res) => {
            if (res.result) {
              console.log(res.result)
            }
          }
        })
      },
      login () {
        let user = wx.getStorageSync('userinfo')
        const self = this
        if (!user) {
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            success: function (userinfo) {
              qcloud.request({
                url: config.userUrl,
                login: true,
                success (userRes) {
                  showSuccess('登录成功')
                  wx.setStorageSync('userinfo', userRes.data.data)
                  self.userinfo = userRes.data.data
                }
              })
            },
            fail: function (err) {
              console.log('登录失败', err)
            }
          })
        }
      }
    },
    onShow () {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
      }
    }
  }
</script>

<style>
  .container {
    padding: 0 30rpx;
  }
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
  }
  .userinfo img {
    width: 150rpx;
    height: 150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  .userinfo .login {
    color: white;
    background: #EA5A49;
    margin-bottom: 15px;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    width: 200rpx;
  }
</style>