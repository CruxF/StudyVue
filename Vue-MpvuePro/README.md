# 前言
这篇总结是源自慕课网的实战教程——[全网首发mpvue课程](https://coding.imooc.com/class/218.html)，里面内容几乎都是完全摘抄，不喜勿喷。<br>


## 小程序开发环境搭建
这一步在这不多说，跟着[官方网站](https://developers.weixin.qq.com/miniprogram/dev/)走即可。<br>


## Vue程序开发环境搭建
- 步骤一：安装git，教程[请点击这里](https://jingyan.baidu.com/article/90895e0fb3495f64ed6b0b50.html)；
- 步骤二：安装node，下载地址[请点击这里](https://nodejs.org/zh-cn/)，在git命令行里查看node版本（node -v）和npm版本（npm -v）；
- 步骤三：安装webpack（npm install webpack -g），在git命令行查看webpack版本（webpack -v），更多细节[请点击这里](http://www.cnblogs.com/fengxiongZz/p/8075903.html)；
- 步骤四：安装vue-cli（npm install -g vue-cli），在git命令行查看vue-cli是否安装成功（vue list），更多细节[请点击这里](http://www.cnblogs.com/fengxiongZz/p/7994448.html)；


## 创建mpvue项目
步骤一：在git命令行输入vue init mpvue/mpvue-quickstart 项目名
步骤二：输入相关的信息，包括小程序的ID
步骤三：按照提示输入相关命令即可，如果使用npm无法install，那么就使用淘宝镜像cnpm安装
步骤四：最后输入命令npm run dev，接着进入微信开发者工具查看效果即可
![image](https://user-images.githubusercontent.com/20301892/41388503-cd27986e-6fbe-11e8-99ff-54e16ed0fbae.png)


## mpvue项目的主要目录结构图
![image](https://user-images.githubusercontent.com/20301892/41388782-270a3106-6fc0-11e8-9d16-3109696b6277.png)


## mpvue项目开发起步栗子
为了大概了解捋清楚mpvue项目开发的流程，我们可以先开发一个组件看看。

步骤一：在创建好的mpvue项目中的components目录下新建一个组件为todlist.vue，源码如下
```
<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="addContent">添加内容</button>
    <button @click="cleanContent">删除完成内容</button>
    <ul>
      <li v-for="(item,index) of list" :key="index" @click="toggle(index)" :class="{delete:item.state}">
        {{index}}:{{item.mes}}
      </li>
    </ul>
    <p>完成条数：{{Complete}}/{{list.length}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        inputValue: '',
        list: [
          { mes: '王者农药', state: false },
          { mes: '荒野行动', state: false },
          { mes: '地下城', state: false }
        ]
      }
    },
    computed: {
      Complete () {
        return this.list.filter(function (v) {
          return v.state
        }).length
      }
    },
    methods: {
      addContent () {
        this.list.push({
          mes: this.inputValue,
          state: false
        })
        this.inputValue = ''
      },
      toggle (index) {
        this.list[index].state = !this.list[index].state
      },
      cleanContent () {
        this.list = this.list.filter(function (v) {
          return !v.state
        })
      }
    }
  }
</script>
<style>
  .delete {
    text-decoration: line-through;
    color: #ddd;
  }
  input[type="text"] {
    border: 1px solid #ccc;
  }
</style>
```

步骤二：在pages目录下创建一个todolist目录，目录下有必不可少的main.js文件，新建一个todo.vue文件，源码如下
```
// main.js源码
import Vue from 'vue'
import App from './todo'

const app = new Vue(App)
app.$mount()

//todo.vue源码
<template>
  <div>
    <p>{{message}}</p>
    <todo-list></todo-list>
  </div>
</template>
<script>
  import TodoList from '@/components/todolist'
  export default {
    data () {
      return {
        message: '使用mpvue'
      }
    },
    components: {
      TodoList
    }
  }
</script>
<style>
  p {
    color: cornflowerblue;
    text-align: center;
  }
</style>
```

步骤三：在首页区域设置跳转路径，部分源码如下
```
<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
<a href="/pages/todolist/main" class="counter">去往TodoList示例页面</a>
```

### 自动编译代码，使其符合ESlint语法规范
每当我们新增一个组件的时候，都需要重新npm run dev。由于我们使用了ESlint语法规范，只要在package.json文件存在`"lint": "eslint --fix --ext .js,.vue src"`，那么我们就可以使用命令`npm run lint`，使我们的代码自动变成符合ESlint语法规范，而不用手动一个个改写。

假如不想使用ESlint语法规则，那么我们可以把build目录中的webpack.base.conf.js文件中第52行~60行的ESlint配置注释掉。

假如不想让某一个js文件遵循ESlint语法规范，那么可以在该文件的顶部输入`/* eslint-disable */`


## Koa2入门
关于koa2的基本知识在这就不介绍了，浪费时间和精力，详细说明[请点击这里](https://github.com/demopark/koa-docs-Zh-CN)进行查看。下面我们使用命令创建一个新的项目来体验一下到底啥是koa。

步骤一：新建一个项目，在git上使用命令npm init，接着使用命令npm install koa --save
步骤二：在项目的根目录之下创建一个server.js文件，源码如下
```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next)=>{
  ctx.body = 'hello koa'
})

app.listen(3000)
```
步骤三：使用命令node server.js开启服务，然后在浏览器打开`http://localhost:3000/`进行查看。

【代码说明】
1、ctx代表的是上下文，由koa传入的封装了request和response的变量，我们可以通过它访问request和response
2、next是koa传入的将要处理的下一个异步函数
3、app是启动应用


### 洋葱圈型的中间件机制
这在koa中是很重要的一个机制，与next关键字息息相关，在了解它之前，先看下面一副说明图
![image](https://user-images.githubusercontent.com/20301892/41398130-e9c42a08-6fe8-11e8-94d3-a9d9adafcb65.png)

刚开始看图可能会觉得懵，那么我们再用代码说明一下洋葱圈型的中间件机制到底是什么，源码如下
```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
  ctx.body = '1'
  // 下一个中间件
  next()
  ctx.body = ctx.body + '2'
})
app.use(async(ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body = ctx.body + '4'
})
app.use(async(ctx, next) => {
  ctx.body += '5'
  next()
  ctx.body = ctx.body + '6'
})
app.listen(3000)
```
使用命令node server.js执行之后的结果为：135642。根据这个结果，那么再看上面那副图，是不是瞬间就明白了中间的执行机制呢？在该段代码中ctx.body = '1'区域代表中间件1，ctx.body = '3'区域代表中间件2，ctx.body = '5'区域代表中间件3。

假如我们把第一个next()去掉会发生什么？答案很简单，就是下面的中间件并不会被执行，即最终输出结果为：12。原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用next()来调用下一个async函数，我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。


## async+await优雅处理异步
在上述的代码中处理同步程序没什么问题，但是当遇到异步程序时就出差错了，下面看代码
```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
  ctx.body = '1'
  setTimeout(()=>{
  	next()
  },2000)
  ctx.body = ctx.body + '2'
})
app.use(async(ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body = ctx.body + '4'
})
app.use(async(ctx, next) => {
  ctx.body += '5'
  next()
  ctx.body = ctx.body + '6'
})
app.listen(3000)
```
输出结果为12，后续的中间件并有被执行。原因是setTimeout()是异步程序，当app.use()程序执行完毕之后，setTimeout()才执行。

为了解决这个问题，很久很久以前的方式是如下这样的。我们先新建一个asyncwait.js文件
```
function ajax() {
  setTimeout(() => {
    console.log("hello")
  }, 1000)
}
ajax()
console.log("执行结束")
```
以上代码的执行结果为：执行结束   hello。因为setTimeout()是异步程序，所以并不会阻塞后续程序的执行。下面来解决一下不顺序的问题
```
function ajax(fn) {
  setTimeout(() => {
    console.log("hello")
    fn()
  }, 1000)
}
ajax(() => {
  console.log("执行结束")
})
```
以上代码执行结果为顺序执行：hello  执行结束。像这种远古的解决异步问题方式，带来了一个问题，就是callback回调地狱。

下面我们来看一下最新的异步程序解决方法，利用Promise，请看代码
```
function delay(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello:' + word)
    }, 2000)
  })
}

delay('孙悟空').then((word) => {
  console.log(word)
  return delay('猪八戒')
}).then((word) => {
  console.log(word)
  return delay('沙悟净')
}).then((word) => {
  console.log(word)
})
```
以上就是利用纯Promise解决异步问题，更多关于Promise的知识[请点击这里](https://github.com/CruxF/Blog/issues/7)

那么在koa中是如何解决异步问题的呢？下面直接看代码
```
function delay(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello:' + word)
    }, 2000)
  })
}
// async+await一起使用
async function start() {
  const word1 = await delay('孙悟空')
  console.log(word1)
  const word2 = await delay('猪八戒')
  console.log(word2)
  const word3 = await delay('沙悟净')
  console.log(word3)
}
start()
```


## 实现koa-logger中间件，打印所有请求的耗时
步骤一：在根目录下创建koa-logger.js文件，源码如下
```
module.exports = async(ctx, next) => {
  const start = new Date().getTime()
  await next()
  const end = new Date().getTime()
  
  console.log("请求路由地址：" + ctx.request.url)
  console.log("耗时多少：" + (end-start))
  console.log("内容长度：" + ctx.body.length)
}
```

步骤二：根目录下的server.js文件为测试文件，源码如下
```
const Koa = require('koa')
const app = new Koa()
const koaLog = require('./koa-logger')

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
app.use(koaLog)

// 输出结果是135642
app.use(async(ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '2'
})
app.use(async(ctx, next) => {
  ctx.body += '3'
  // 延迟2s执行这个中间件
  await delay()
  await next()
  ctx.body +='4'
})
app.use(async(ctx, next) => {
  ctx.body += '5'
  await next()
  ctx.body +='6'
})
app.listen(3000)
```

步骤三：使用命令node server.js打开服务器，在浏览器输入localhost:3000,，然后就可以看到在命令行出现的信息
![image](https://user-images.githubusercontent.com/20301892/41410994-db274442-700d-11e8-98b5-fd1410d6a00b.png)


## koa路由入门
在学习koa路由之前，我们先一起来看下面的代码
```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
  console.log(ctx)
  if(ctx.request.url == '/'){
  	ctx.body = '齐天大圣孙悟空'
  }else if(ctx.request.url == '/zhubajie'){
  	ctx.body = '天蓬元帅猪八戒'
  }else{
  	ctx.body ='白龙马'
  }
  await next()
  ctx.body += '2'
})

app.listen(3000)
```
执行命令node server.js，在浏览器分别输入localhost:3000、localhost:3000/zhubajie和localhost:3000/gg观察输出的结果

接下来我们开始正式学习koa的路由
步骤一：使用命令安装koa路由`npm install koa-router`
步骤二：改写上面的代码
```
const Koa = require('koa')
var Router = require('koa-router');
var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = '齐天大圣孙悟空'
}).get('/zhubajie', (ctx, next) => {
	ctx.body = '天蓬元帅猪八戒'
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000)
```
更多koa-router知识[请点击这里](https://github.com/alexmingoia/koa-router)


## 部署腾讯云后台开发环境
默认已经在小程序管理后台开通了腾讯云，并进行了关联。然后进入腾讯云，点击解决方案 ==> 微信小程序  ==> 按照开发环境中步骤说明一步步来就好了

开发环境配好之后，我们点击右侧下载Node.js Demo
![image](https://user-images.githubusercontent.com/20301892/41415321-e82bddee-701a-11e8-9952-1d77e26d0364.png)

接着我们把下载好的wafer2-quickstart-nodejs-master文件中的server整个目录拷贝到我们刚开始创建好的mpvue项目的根目录中。

在mpvue项目中的project.config.json文件中添加`"qcloudRoot": "./server/"`（下面的截图少了个斜杠）
![image](https://user-images.githubusercontent.com/20301892/41415662-a8de6fde-701b-11e8-9e10-4a352d36d515.png)

 
## 本地搭建Node服务
以上环境配好之后，开发的时候还会遇到一个小问题，比如我们在server文件目录下的routes目录下的index.js文件中额外添加了一个路由
```
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)

router.get('/demo',controllers.demo)
module.exports = router
```

在controllers文件目录下新建demo.js文件
```
module.exports = async (ctx)=>{
  ctx.state.data = {
    msg: 'hello 小程序后台'
  }
}
```
当我们需要看到msg信息的时候，需要把代码上传到腾讯云才可以，为了跳过这一步，我们可以在本地搭建一个服务器来运行项目。

**下面是具体的搭建步骤**
步骤一：下载MySQL，在我百度云上有，改天分享出来（端口号：5757，密码：ot）
步骤二：点击常见问题下面的“如何搭建本地环境”，根据提示一步步走
![image](https://user-images.githubusercontent.com/20301892/41456778-173f0c66-70b4-11e8-9504-4b796a4ca54c.png)

【备注】
腾讯云AppID在你的账号信息中查看；
腾讯云SecretId和SecretKey在你的访问管理中云API密钥下的API密钥管理中查看（如果没有，新建一个）。

步骤三：在MySQL中创建一个cAuth数据库
![image](https://user-images.githubusercontent.com/20301892/41457506-716b97b6-70b6-11e8-8d4b-2ad00a62d112.png)
步骤四：安装相关的依赖（npm install）
![image](https://user-images.githubusercontent.com/20301892/41457911-b4c0e312-70b7-11e8-8644-bc072f3daa4d.png)
步骤五：安装调试工具（npm install -g nodemon），可能得用管理员权限
![image](https://user-images.githubusercontent.com/20301892/41458085-34769e6c-70b8-11e8-82e7-c205b19d4768.png)
步骤六：npm run dev跑起来，接着在浏览器中访问localhost:7878/weapp/demo（config.js中port值不固定，当端口有误的话更改过来就行了）
![image](https://user-images.githubusercontent.com/20301892/41459352-f5f366bc-70bb-11e8-89f0-a1b536a0c797.png)
如果觉得网页原始JSON数据展示很丑的话，可以 安装一个“极简 Json 格式化”插件，然后展示内容就变成如下画面
![image](https://user-images.githubusercontent.com/20301892/41459862-64dc0cea-70bd-11e8-938e-04bcc9b8b231.png)

搞完以上的玩意后，项目根目录中可能需要安装N个包，此时需要将原先的node_modules文件夹删掉，然后npm install即可将项目重新跑起来。


## 与后台接口进行联调
步骤一：在src目录下创建一个配置文件config.js
```
const host = 'http://localhost:7878'
const config = {
  host
}
export default config
```
步骤二：在组件里面进行调用
```
<script>
  import config from './config'
  export default {
    created() {
    	wx.request({
    		url:config.host + '/weapp/demo',
    		success: function(res) {
    		  console.log(res)
    		}
    	})
      console.log('小程序项目启动')
    }
  }
</script>

<style>

</style>
```
步骤三：在微型开发者工具中查看效果（需要同时跑起两个服务，一个是在根目录下，另一个是在根目录下的server目录下）

**为了更加优雅的联调，我们可以进行如下的改写**
步骤一：在src目录下创建一个工具函数库util.js
```
import config from './config'
// 封装了一个Promise
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
```
步骤二：改写上一个组件的调用方式
```
<script>
  import { get } from './util'
  export default {
    async created() {
      const resValue = await get('/weapp/demo')
      console.log('优雅联调', resValue)
    }
  }
</script>

<style>

</style>
```


## 项目上线之前我们需要做什么？
步骤一：首先得把注释掉的ESlint语法规范打开（在build目录下的webpack.base.conf.js文件中）
步骤二：使用命令`npm run lint`自动编译代码，使全部代码符合规范


## 获取用户信息
在获取用户信息之前，首先得获得openID，这是一个非常繁琐的过程，我们可以使用一个方式跳过这一步。
步骤一：在server目录中使用命令`node tools/initdb.js`初始化数据库
![](https://github.com/CruxF/IMOOC/blob/master/ProImages/node.jpg?raw=true)
【注意】
确保在server目录下的config.js文件中的mysql得到正确的配置，尤其是端口号和密码要和安装的时候设置的相匹配
![](https://github.com/CruxF/IMOOC/blob/master/ProImages/mysql.jpg?raw=true)

接着我们在cAuat数据库中就能看到这么一张数据表
![](https://github.com/CruxF/IMOOC/blob/master/ProImages/mysqltable.jpg?raw=true)

步骤二：在根目录中使用命令`npm install wafer2-client-sdk --save`安装相关的依赖包
步骤三：在src目录下编写config.js配置代码
```
const host = 'http://localhost:7878'
const config = {
  host,
  loginUrl: `${host}/weapp/login`
}
export default config
```
步骤四：由于微信的 wx.getUserInfo 不再弹窗授权，得修改为 button 弹窗获取用户信息。我们在个人信息组件中这么来写即可
```
<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
  </div>
</template>

<script>
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config.js'
  export default {
    methods: {
      doLogin: function(e) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function(userInfo) {
            console.log('登录成功', userInfo)
          },
          fail: function(err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  }
</script>
<style>

</style>
```
步骤五：点击按钮，那么就能获取到用户数据并保存在数据库中
![](https://github.com/CruxF/IMOOC/blob/master/ProImages/mysqldata.png?raw=true)


## 增加一些用户交互效果
为了在获取用户信息的时候有一些交互效果出现，我们可以把相关的小程序组件封装起来，然后在某个页面进行调用，比如我们在src目录下的util.js文件中封装一些工具类函数，代码如下：
```
// 工具函数库
import config from './config'
// 封装了一个Promise
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
// 封装一个登录成功后出现的模态框
export function showSuccess(text) {
	wx.showToast({
	  title: text,
	  icon: 'success'
	})
}
```

接着我们在相关组件进行调用即可，具体代码如下
```
<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
  </div>
</template>

<script>
  import {get, showSuccess} from '@/util.js'
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config.js'
  export default {
    methods: {
      doLogin: function(e) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function(userInfo) {
            console.log('登录成功', userInfo)
            showSuccess('登录成功')
          },
          fail: function(err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  }
</script>
<style>

</style>
```

为了不让每一次点击都进行验证一次用户名，我们可以将信息缓存下来，具体代码如下
```
<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
  </div>
</template>

<script>
  import { get, showSuccess } from '@/util.js'
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config.js'
  export default {
    methods: {
      doLogin: function(e) {
        // 获取缓存信息
        let user = wx.getStorageSync('userinfo')
        if(!user) {
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            success: function(userInfo) {
              console.log('登录成功', userInfo)
              showSuccess('登录成功')
              // 使用key值userinfo保存userInfo的信息
              wx.setStorageSync('userinfo', userInfo)
            },
            fail: function(err) {
              console.log('登录失败', err)
            }
          })
        }
      }
    }
  }
</script>
<style>

</style>
```

以上代码有个严重的问题，那就是登录成功后，需要再次编译才可以将用户信息显示在页面。为了解决这个问题，我们需要这么写

步骤一：更改src目录下的config.js文件
```
// 配置项
const host = 'http://localhost:7878'
const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config
```
步骤二：更改用户组件
```
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
```


## 图书录入功能开发
一般情况下，前端和后台的数据交互有两种情况，一种是接收（get）数据，另外一种发送（post）数据。这两种方法其实都可以封装在一个工具函数库中，使用export导出，然后在相关的组件使用import导入即可，下面看一下具体的封装函数
```
// 工具函数库
import config from './config'
// http get工具函数，获取数据
export function get(url) {
  return request(url, 'GET', data)
}
// http post工具函数，发送数据
export function post(url) {
  return request(url, 'POST', data)
}
// 封装成一个请求公共函数
function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function(res) {
        if(res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
// 封装一个登录成功后出现的模态框
export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
```

## 如何获取豆瓣的API
步骤一：进入[官方网站](https://developers.douban.com/wiki/?title=book_v2#get_isbn_book)，复制“根据isbn获取图书信息”下面的get地址
步骤二：定义两个添加图书信息的方法
```
methods: {
  // 添加图书信息到addbook.js中
  async addBook(isbn) {
    console.log(isbn)
    const res = await post('/weapp/addbook', {
      isbn,
      openid: this.userinfo.openId
    })
    showModal('添加成功', `${res.title}添加成功`)
  },
  // 扫描图书的二维码
  scanBook() {
    wx.scanCode({
      success: (res) => {
        if(res.result) {
          this.addBook(res.result)
        }
      }
    })
  }
}
```
步骤三：在server目录下的routes目录下的index.js文件中配置路由信息
```
router.get('/demo', controllers.demo)
router.post('/addbook', controllers.addbook)
module.exports = router
```
步骤四：增加获取豆瓣图书信息的addboolk.js文件
```
const https = require('https')
// 新增图书
// 1.获取豆瓣信息：https://developers.douban.com/wiki/?title=book_v2#get_isbn_book
// 某图书的信息：https://api.douban.com/v2/book/isbn/9787536692930
// 2.入库
module.exports = async(ctx) => {
  const { isbn, openid } = ctx.request.body
  if(isbn && openid) {
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn
    const bookinfo = await getJSON(url)
    const rate = bookinfo.rating.average
    const { title, image, alt, publisher, summary, price } = bookinfo
    const tags = bookinfo.tags.map(v => {
      return `${v.title} ${v.count}`
    }).join(',')
    const author = bookinfo.author.join(',')
    console.log({
      rate,
      title,
      image,
      alt,
      publisher,
      summary,
      price,
      tags,
      author
    })
  }
}
// 工具函数库
function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = ''
      res.on('data', data => {
        urlData += data
      })
      res.on('end', data => {
        const bookinfo = JSON.parse(urlData)
        if(bookinfo.title) {
          resolve(bookinfo)
        }
        reject(bookinfo)
      })
    })
  })
}
```

## 将添加的图书信息保存在数据中
毫无疑问，首先得在数据库中创建一个数据表，专门在存放图书的数据。下面是具体的开发步骤：
步骤一：在server目录下的tools目录中新建snail.sql文件
```
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(20) NOT NULL,
  `openid` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `price` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `tags` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

```
步骤二：将以上的代码在mysql命令行里运行，然后可以用desc books查看数据表结构

步骤三：编写接口代码（addbooks.js）
```
const https = require('https')
const {mysql} = require('../qcloud')
// 新增图书
// 1.获取豆瓣信息：https://developers.douban.com/wiki/?title=book_v2#get_isbn_book
// 某图书的信息：https://api.douban.com/v2/book/isbn/9787536692930
// 2.入库
module.exports = async(ctx) => {
  const { isbn, openid } = ctx.request.body
  console.log('添加图书', isbn, openid)
  if(isbn && openid) {
    const findRes = await mysql('books').select().where('isbn', isbn)
    if(findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: '图书已存在'
        }
      }
      return
    }
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn
    const bookinfo = await getJSON(url)
    const rate = bookinfo.rating.average
    const { title, image, alt, publisher, summary, price } = bookinfo
    const tags = bookinfo.tags.map(v => {
      return `${v.title} ${v.count}`
    }).join(',')
    const author = bookinfo.author.join(',')
    try {
      await mysql('books').insert({
        isbn,
        openid,
        rate,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        tags,
        author
      })
      ctx.state.data = {
        title,
        msg: 'success'
      }
    } catch(e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '新增失败:' + e.sqlMessage
        }
      }
    }
  }
}
// 工具函数库
function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = ''
      res.on('data', data => {
        urlData += data
      })
      res.on('end', data => {
        const bookinfo = JSON.parse(urlData)
        if(bookinfo.title) {
          resolve(bookinfo)
        }
        reject(bookinfo)
      })
    })
  })
}
```


## 展示图书信息
挺简单的一个功能，开发步骤还是和之前的相类似，下面请看具体开发步骤。

步骤一：在sever目录中增加一个请求路由地址
```
router.get('/demo', controllers.demo)
router.post('/addbook', controllers.addbook)
router.get('/booklist', controllers.booklist)
module.exports = router
```
步骤二：在controllers目录中定义booklist.js文件，用作获取数据库的数据
```
const { mysql } = require('../qcloud')

module.exports = async(ctx) => {
  const books = await mysql('books').select('*')
  ctx.state.data = {
    list: books
  }
}
```
步骤三：定义获取图书数据的组件
```
<template>
  <div class="books">
    <div v-for="book of books" :key="book.id" :book="book"></div>
  </div>
</template>

<script>
  import { get } from '@/util'
  export default {
    data() {
      return {
        books: []
      }
    },
    methods: {
      async getList() {
        const books = await get('/weapp/booklist')
        this.books = books.list
      }
    },
    mounted() {
      this.getList()
    }
  }
</script>

<style>

</style>
```
小程序前端和后台进行数据交互的代码具体看util.js这个文件的源码。


## 图书下拉刷新
当我们新增一本图书后，往往无法立即在页面看到，此时我们就需要用到微信小程序开发中下拉配置和相关的API，来手动刷新页面，下面是具体的步骤。

步骤一：配置图书组件中main.js文件
```
import Vue from 'vue'
import Book from './Book'
const app = new Vue(Book)
app.$mount()
export default {
  config: {
    // 是否下拉刷新
    enablePullDownRefresh: true
  }
}
```
步骤二：在图书的根组件中编写相关的方法和相关特定函数
```
<script>
  export default {
    methods: {
      async getList() {
      	// 在当前页面显示导航条加载动画。
      	wx.showNavigationBarLoading()
        const books = await get('/weapp/booklist')
        this.books = books.list
        // 取消下拉事件
        wx.stopPullDownRefresh()
        // 隐藏导航条加载动画。
        wx.hideNavigationBarLoading()
      }
    },
    mounted() {
      this.getList()
    },
    // 下拉时该周期函数被触发
    onPullDownRefresh() {
    	this.getList()
    }
  }
</script>
```


## 图书滚动加载功能开发
由于小程序内部提供很多相关的API，因此开发这部分的代码不是太困难，主要是前端的逻辑和数据库知识的要求稍微高一些，下面看具体步骤。

步骤一：编写好前端代码
```
<template>
  <div class="books">
    <Card v-for="book of books" :key="book.id" :book="book"></Card>
    <p class="text-footer" v-if="!more">没有更多数据！</p>
  </div>
</template>

<script>
  import { get } from '@/util'
  import Card from '@/components/Card'
  export default {
    data() {
      return {
        books: [],
        page: 0,
        more: true
      }
    },
    methods: {
      async getList(init) {
        if(init) {
        	// 初始页码为0
          this.page = 0
          this.more = true
        }
        // 在当前页面显示导航条加载动画。
        wx.showNavigationBarLoading()
        const books = await get('/weapp/booklist', { page: this.page })
        if(books.list.length < 5 && this.page > 0) {
          this.more = false
        }
        if(init) {
          this.books = books.list
          // 取消下拉事件
          wx.stopPullDownRefresh()
        } else {
          // 下拉刷新，不能直接覆盖books，而是累加
          this.books = this.books.concat(books.list)
        }
        // 隐藏导航条加载动画。
        wx.hideNavigationBarLoading()
      }
    },
    mounted() {
      this.getList(true)
    },
    // 下拉周期函数
    onPullDownRefresh() {
      this.getList(true)
    },
    // 滚动到底部周期函数
    onReachBottom() {
      if(!this.more) {
        return false
      }
      this.page = this.page + 1
      this.getList()
    },
    components: {
      Card
    }
  }
</script>

<style>

</style>
```
步骤二：书写后台数据库代码
```
const { mysql } = require('../qcloud')

module.exports = async(ctx) => {
	const {page} = ctx.request.query
	const size = 5
  const books = await mysql('books')
                .select('books.*','cSessionInfo.user_info')
                .join('cSessionInfo','books.openid','cSessionInfo.open_id')
                .limit(size)
                .offset(Number(page) * size)
                .orderBy('books.id','desc')
  ctx.state.data = {
    list: books.map(v=>{
    	const info = JSON.parse(v.user_info)
    	return Object.assign({},v,{
    		user_info: {
    			nickName: info.nickName
    		}
    	})
    })
  }
}
```


## 图书访问次数统计功能
假如在数据表中并没有统计访问次数这个字段，那么我们需要使用命令`alter table books column count int default 0; `添加count这个统计字段。下面来看一下如何统计用户点击次数

步骤一：在跳转链接的时候讲book.id传递到下一个页面
```
<template>
  <a :href="detailUrl"></a>
</template>

<script>
  export default {
    props: ['book'],
    computed: {
      detailUrl() {
        return '/pages/detail/main?id=' + this.book.id
      }
    }
  }
</script>
```
步骤二：在另一个组件中接收该值，并且把这个值传递给mysql数据库保存
```
<template>
  <div>
    图书id为：{{bookid}}
  </div>
</template>

<script>
  import { get } from '@/util'
  export default {
    data() {
      return {
        bookid: ''
      }
    },
    methods: {
      async getDetail() {
        const info = await get('/weapp/bookdetail', { id: this.bookid })
      }
    },
    mounted() {
      // 接收传递过来的id值
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
    }
  }
</script>

<style scoped="scoped">

</style>
```
步骤三：定义后台数据处理bookedtail.js文件（自行配置跳转路由）
```
const { mysql } = require('../qcloud')
module.exports = async (ctx) => {
	const {id} = ctx.request.query
	await mysql('books')
	      .where('id',id)
	      .increment('count',1)
}
```

以上的代码仅仅只是帮助我们获取了某本的书的点击数，并且将点击数保存在数据库中。下面我们再来编写图书轮播图代码，点击量比较多的图书排在前列

步骤一：首先在图书根组件编写好相关的结构和传值代码（下面为核心代码）
```
<template>
  <div class="books">
    <TopSwiper :tops="tops"></TopSwiper>
  </div>
</template>

<script>
  import { get } from '@/util'
  import TopSwiper from '@/components/TopSwiper'
  export default {
    data() {
      return {
        tops: []
      }
    },
    methods: {
      async getTop() {
        const tops = await get('/weapp/top')
        this.tops = tops.list
      }
    },
    mounted() {
      this.getTop()
    },
    // 下拉周期函数
    onPullDownRefresh() {
      this.getList(true)
      this.getTop()
    },
    components: {
      TopSwiper
    }
  }
</script>
```
步骤二：创建一个子组件TopSwiper.vue
```
<template>
  <div class='swiper'>
    <swiper 
      :indicator-dots='true' 
      indicator-color='#EA5A49' 
      :autoplay='true' 
      :interval='6000' 
      :duration='1000' 
      :circular='true'
   >
      <div :key='imgindex' v-for='(top,imgindex) in imgUrls'>
        <swiper-item>
          <img 
             @click='bookDetail(img)' 
             class='slide-image' 
             mode='aspectFit' 
             v-for='img in top' 
             :key='img.id' 
             :src="img.image">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: ['tops'],
    computed: {
      imgUrls() {
        // 如果通用请用chunk函数  比如lodash的chunk方法
        let res = this.tops
        console.log([res.slice(0, 3), res.slice(3, 6), res.slice(6)])
        return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
      }
    },
    methods: {
      bookDetail(item) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.id
        })
      }
    }
  }
</script>
<style scoped="scoped">
  .swiper {
    margin-top: 5px;
  }
  .swiper .slide-image {
    width: 33%;
    height: 250rpx;
  }
</style>
```
步骤三：编写服务端top.js文件，以下代码会返回count值从大到小排序的数据
```
const { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  const top = await mysql('books').select('id', 'title', 'image', 'count').orderBy('count', 'desc').limit(9)
  ctx.state.data = {
    list: top
  }
}
```


## 实现图片预览功能
在小程序中想要实现这个功能那是十分简单的，因为官方已经在内部封装好了这个API，我们直接调用即可，下面看具体代码
```
<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb" @click.stop="preview">
        <img :src="book.image" class="img" mode="aspectFit" />
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    methods: {
      preview() {
        wx.previewImage({
          current: this.book.image,
          urls: [this.book.image]
        })
      }
    }
  }
</script>
```


## 图书详情开发
越写后面，越来越觉得很多开发方式的套路几乎是一毛一样的，下面的图书详情开发也是一样，具体步骤为

步骤一：将主组件编写好，包括结构和数据交互
```
<template>
  <div>
    <BookInfo :info="info"></BookInfo>
  </div>
</template>

<script>
  import { get } from '@/util'
  import BookInfo from '@/components/BookInfo'
  export default {
    data() {
      return {
        bookid: '',
        info: {}
      }
    },
    methods: {
      async getDetail() {
        const info = await get('/weapp/bookdetail', { id: this.bookid })
        // 更改页面顶部标题
        wx.setNavigationBarTitle({
          title: info.title
        })
        this.info = info
      }
    },
    mounted() {
      // 接收传递过来的id值
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
    },
    components: {
      BookInfo
    }
  }
</script>

<style scoped="scoped">

</style>
```
步骤二：编写后台数据处理bookdetail.js文件（记得路由跳转路径得增加）
```
const { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  const { id } = ctx.request.query
  const detail = await mysql('books').select('books.*', 'cSessionInfo.user_info').join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id').where('id', id).first()
  const info = JSON.parse(detail.user_info)
  // 得到用户名和头像
  ctx.state.data = Object.assign({}, detail, {
    user_info: {
      name: info.nickName,
      image: info.avatarUrl
    }
  })
  // 保存图书访问次数
  await mysql('books').where('id', id).increment('count', 1)
}
```
步骤三：编写BookInfo.vue子组件
```
<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back" :src="info.image" mode="aspectFill" />
      <img class="img" :src="info.image" mode="aspectFit" />
      <div class="info">
        <div class="title">{{info.title}}</div>
        <div class="author">{{info.author}}</div>
      </div>
    </div>

    <div class="detail">
      <img :src="userinfo.image" class="avatar" mode="aspectFit" /> 
      {{userinfo.name}}
      <div class="right text-primary">
        {{info.rate}}分
        <Rate :value="info.rate"></Rate>
      </div>
    </div>

    <div class="detail">
      {{info.publisher}}
      <div class="right">
        <span>价格：{{info.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Rate from '@/components/Rate'
  export default {
    props: ['info'],
    computed: {
      userinfo() {
        return this.info.user_info || {}
      }
    },
    components: {
      Rate
    }
  }
</script>
```


## 获取地理位置
在小程序中获取地理位置我们可以选择使用百度地图api接口，具体步骤如下

步骤一：进入百度地图开放平台，选择开发文档中web服务Api，接着是点击地理编码，再点击使用指南，假如你已经有了百度账号，并且成为了百度开发者，那么直接点击获取服务密钥，接着填写相关的应用名称、应用类型和APP ID即可。

步骤二：接着开开心心的在组件中编写代码即可，下面贴上全部的内容
```
<template>
  <div>
    <BookInfo :info="info"></BookInfo>
    <div class="comment">
      <textarea v-model="comment" class="textarea" :maxlength="100" placeholder="请输入图书短评"></textarea>

      <div class="location">
        <span style="margin-right: 12px;">地理位置</span>
        <switch color="#EA5A49" :checked="location" @change="getGeo"></switch>
        <span class="switch text-primary">{{location}}</span>
      </div>

      <div class="phone">
        <span style="margin-right: 12px;">手机型号</span>
        <switch color="#EA5A49" :checked="phone" @change="getPhone"></switch>
        <span class="switch text-primary">{{phone}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { get } from '@/util'
  import BookInfo from '@/components/BookInfo'
  export default {
    data() {
      return {
        bookid: '',
        info: {},
        comment: '',
        location: '',
        phone: ''
      }
    },
    methods: {
      async getDetail() {
        const info = await get('/weapp/bookdetail', { id: this.bookid })
        // 更改页面顶部标题
        wx.setNavigationBarTitle({
          title: info.title
        })
        this.info = info
      },
      // 获取地理位置
      getGeo(e) {
        let self = this
        // ak为在百度地图获取到的访问应用
        const ak = '75tFsa4F7ejTI4zYkVtr9dfnujUhmpHa'
        // url的来源在这里：https://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding
        let url = 'http://api.map.baidu.com/geocoder/v2/'

        if(e.target.value) {
          wx.getLocation({
            success: function(geo) {
              wx.request({
                url,
                data: {
                  ak,
                  location: `${geo.latitude},${geo.longitude}`,
                  output: 'json'
                },
                success: function(res) {
                  console.log(res)
                  if(res.data.status === 0) {
                    self.location = res.data.result.addressComponent.city
                  } else {
                    self.location = '未知地点'
                  }
                }
              })
            }
          })
        } else {
          self.location = ''
        }
      },
      // 获取手机型号
      getPhone(e) {
        console.log('手机型号获取')
        if(e.target.value) {
          const phoneInfo = wx.getSystemInfoSync()
          this.phone = phoneInfo.model
        } else {
          // 没选中
          this.phone = ''
        }
      }
    },
    mounted() {
      // 接收传递过来的id值
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
    },
    components: {
      BookInfo
    }
  }
</script>
```


## 保存用户评论数据
这个功能点十分重要，几乎每个应用软件中都必须要有，下面我们就来看一下如何一步步的开发这个功能

步骤一：创建一个保存用户评论的数据表
```
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(100) NOT NULL,
  `bookid` varchar(100) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
```
步骤二：前端传入相关数据，下面是部分核心代码
```
<template>
  <div>
    <div class="comment">
      <textarea v-model="comment" class="textarea" :maxlength="100" placeholder="请输入图书短评"></textarea>
      <button class="btn" @click="addComment">评论</button>
    </div>
  </div>
</template>

<script>
  import { get, post, showModal } from '@/util'
  export default {
    data() {
      return {
        userinfo: {},
        bookid: '',
        info: {},
        comment: '',
        location: '',
        phone: ''
      }
    },
    methods: {
      async addComment() {
        if(!this.comment) {
          return
        }
        // 获取评论内容，手机型号，地理位置，图书id，用户的openid
        const data = {
          comment: this.comment,
          bookid: this.bookid,
          openid: this.userinfo.openId,
          phone: this.phone,
          location: this.location
        }
        try {
          await post('/weapp/addcomment', data)
          this.comment = ''
        } catch(e) {
          showModal('失败', e.msg)
        }
      },
    mounted() {
      // 接收传递过来的id值
      this.bookid = this.$root.$mp.query.id
      // 获取用户信息
      const userinfo = wx.getStorageSync('userinfo')
      if(userinfo) {
        this.userinfo = userinfo
      }
    }
  }
</script>
```
步骤三：编写后台（server）相关的数据库处理代码
```
const { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  const { bookid, comment, openid, location, phone } = ctx.request.body
  console.log(bookid, comment, openid, location, phone)
  try {
    await mysql('comments').insert({ bookid, comment, openid, location, phone })
    ctx.state.data = {
      msg: 'success'
    }
  } catch(e) {
    ctx.state = {
      code: -1,
      data: {
        msg: '评论失败:' + e.sqlMessage
      }
    }
  }
}
```

## 小程序发布上线流程
由于业务开发的套路几乎一毛一样，而且自己目前的能力还没办法很好的将那些知识融会贯通，因此接下来的业务代码不做总结先。

本来是想总结一下上线的流程，无奈资金不够充裕，暂时放弃，等熬过这段时间再说。



