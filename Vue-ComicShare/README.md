# 动漫分享及产品售卖平台


**项目简介**

这是一个用vue2.0开发的关于动漫分享的单页面应用。使用了Vue.js + ES6 + webpack + vue-router + vue-resource等前端最热的技术，采用组件化、模块化的开发方式，实现三大核心模块（动漫资讯、图片分享以及商品购买）。


## 实现细节

根组件`App.vue`使用最接近原生APP体验的高性能框架——MUI，实现顶部与尾部的全局样式。

主页`Home.vue`轮播图使用mint-ui框架，图片地址配置在json文件中，利用v-for指令和vue-resource调用json中的数据，九宫格的展示部分使用了MUI框架。

动漫资讯`newslist.vue`结合框架，使用父子组件传值完成相互间特定的跳转，相关数据依然是存储在json文件中，利用vue-resource取得对应的数据。

图片分享`photolist.vue`利用框架实现了图片的懒加载，在缩略图中使用了vue-preview实现了图片的浏览特效。

商品购买`goodslist`使用HTML 5中localStorage存储本地数据技术，实现购买商品信息的存储以及调用。


## 技术栈

- Vue.js：一个前端 MVVM 框架，主要思想是双向数据绑定和组件化
- vue-router：用 Vue.js + vue-router 创建单页面应用，是将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们
- vue-resource：这是一个 Vue.js 的插件，提供了使用 XMLHttpRequest 或 JSONP 进行Web请求和处理响应的服务
- webpack：打包 Vue.js 项目代码资源文件
- MUI：使用最接近原生APP体验的高性能框架
- Mint-ui：基于Vue.js的移动端组件裤
- Moment.js：日期处理类库
- vue-preview：一个Vue.js的插件，实现了图片浏览特效的功能


## 收获

1. 对 vue 的组件、指令、路由、模版渲染、事件绑定、计算属性等有了一定掌握
2. 熟悉了 vue 组件之间的交互、传值
3. 熟悉了在 vue 项目中使用第三方插件（组件）和库
4. 熟悉了组件化、模块化的开发思维
5. 熟悉了 vue-router 控制路由和子路由的方式
6. 熟悉了 vue-resource 是如何进行web请求和处理响应
7. 再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 发布上线


## Build Setup

``` bash
# clone the repo into your disk.
$ git clone https://github.com/cruxf/ComicShare.git

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

```






