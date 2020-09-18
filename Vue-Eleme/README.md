# Vue.js高仿饿了么外卖

### 项目简介

这是一个根据慕课网实战课程——[vue.js高仿饿了么外卖App](https://coding.imooc.com/class/74.html)制作而成的单页面web应用，使用Vue.js+ES6+webpack+stylus等前端工程技术，采用组件化、模块化的开发方式。这个项目主要开发了外卖App最核心的模块（商品、评论、商家信息），完全高仿了饿了么外卖App。<br>

### 技术栈

【前端】<br>
- HTML/CSS/JavaScript：使用了HTML5中[localStorage](https://github.com/CruxF/HTML-5/blob/master/WebStorage/Explain.md)来实现收藏商家的信息存储；[移动端1px](https://www.cnblogs.com/lunarorbitx/p/5287309.html)问题解决；[flex布局](http://www.cnblogs.com/fengxiongZz/p/6543889.html)和[sticky footer布局](https://www.cnblogs.com/zsqos/archive/2017/06/02/6935646.html)；以及iconFont等<br>
- stylus：预编译CSS，高效快速的完成CSS样式以及实现各种情况的样式切换，[学习地址](http://www.zhangxinxu.com/jq/stylus/)<br>
- better-scroll：这是由课程老师黄轶编写的一款JavaScript插件，实现了页面平滑滚动的效果，[学习地址](https://github.com/ustbhuangyi/better-scroll)<br>
- Vue.js：一个前端 MVVM 框架，主要思想是双向数据绑定和组件化，[学习地址](https://cn.vuejs.org/)<br>
- vue-router：用 Vue.js + vue-router 创建单页面应用，是将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们，[学习地址](https://router.vuejs.org/zh-cn/)<br>
- vue-resource：这是一个 Vue.js 的插件，提供了使用 XMLHttpRequest 或 JSONP 进行Web请求和处理响应的服务。目前这个插件已经逐步被axios取代<br>
[vue-resource学习地址](https://github.com/pagekit/vue-resource)  [axios学习地址](https://github.com/axios/axios)<br>
- vue-cli：Vue.js 官方提供的一个脚手架工具，里面提供的一些基础的代码结构。[学习地址](http://www.cnblogs.com/fengxiongZz/p/7994448.html)<br>

【后端】<br>
- Node.js：使用 express 构建一个本地 HTTP server 来调试 Vue 项目<br>

【开发构建部署】<br>
- webpack：打包 Vue.js 项目代码资源文件，[学习地址](https://doc.webpack-china.org/)<br>
- git：将项目部署到github上，[学习地址](http://www.cnblogs.com/fengxiongZz/p/6477456.html)<br>
- github：存放项目代码的托管平台，只支持git作为唯一的版本库格式进行托管，[学习地址](https://github.com/CruxF/Blog/issues/1)<br>

### 收获

1、熟悉了一个项目完整的开发流程<br>
2、熟悉了组件化、模块化的开发模式，将多次重复开发的样式抽象成 Vue 组件<br>
3、学会使用 stylus预编译模块化的 CSS<br>
4、熟悉了前后端分离开发，利用json模拟后端数据存储在本地<br>
5、掌握了使用 Vue-cli 脚手架初始化 Vue.js 项目<br>
6、掌握了使用 vue-router 将组件映射到路由，进行页面路由切换<br>
7、熟悉了使用 vue-resource 进行 HTTP 请求获取数据<br>
8、了解 webpack 的打包原理、学会 ES6 + eslint 的开发方式、学会如何在Vue.js框架里和第三方JS插件交互<br>

### 不足

由于该门课程有一定的历史，在这期间发生了很多的变更，包括webpack的升级、vue-cli的升级以及vue.js的升级，导致了跟着老师的思路一点点的去开发，然后有部分效果并没有实现。并且有相当部分的内容一时还难以理解，要达到完全理解并学会灵活使用还需要付出很多的努力。在一步步地敲代码过程中，简单记录了每一个模块的开发，用来日后将其慢慢地分步理解和掌握，[地址](http://www.cnblogs.com/fengxiongZz/p/8214130.html)<br>

### 题外话

一个大佬的闲暇时间作品：[基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用](https://github.com/bailicangdu/vue2-elm)<br><br>


#### 源码下载以及项目运行

``` bash
# clone the repo into your disk.
$ git clone https://github.com/cruxf/Vue-eleme.git

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev
```



