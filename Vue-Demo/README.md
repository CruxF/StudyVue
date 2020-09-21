# 学习资源

1、[vue基础知识(版本为1.0，还是有些看点)](https://github.com/keepfool/vue-tutorials)<br>

2、[vue2.0非常好的一些博文](http://www.cnblogs.com/xiaohuochai/tag/Vue/)<br>

3、[我已经整理好的大白话说Vue2.0](https://github.com/CruxF/StudyVue/issues/21)


# 1、vue-cart => 实现购物车和地址选配功能

### 前言

该案例来源于慕课网的教程[使用vue2.0实现购物车和地址选配功能](https://www.imooc.com/learn/796)。根据这门课程，做了一些总结和分析，进一步提升自己的vue使用水平。<br>

在文件夹目录中，[cart.html](https://github.com/CruxF/Vue-base/blob/master/vue-cart/cart.html)和[address](https://github.com/CruxF/Vue-base/blob/master/vue-cart/address.html)为原始代码，没有做过任何的修改，可以在充分理解该门课程下，自己动手实现一遍案例中的功能。因为vue-resource已经不被推荐使用，于是我用了axios替代了vue-resource来获取json中的数据。<br>

**【注意】：** <br>
由于本地的vue和vue-resource会面临过时的危机，而自己一开始也是因为使用别人那个过时vue-resource，一直无法取得json中的数据，所以我们最好通过CDN引入外部资源，该案例需要用到的相关资源地址：<br>
[vue官网](https://cn.vuejs.org/v2/guide/)<br>
[vue-resource](https://github.com/pagekit/vue-resource)<br>
[axios](https://github.com/axios/axios)<br><br>

### 训练方法

一步一个脚印，我们首先分析下**购物车** 实现所有功能的过程。<br>

1、渲染商品信息、商品金额、商品数量以及每一种商品的总额。<br>
【分析】<br>
由于以上所有的数据都保存在一个json文件中，那么我们肯定要先将所需要的数据取出来，然后使用一个数组将得到的数据保存起来。为了程序的健壮性和易读性，我们需要将获取json数据封装成一个方法，接着在某一个钩子函数中调用该方法。<br>

以上是对实例化一个Vue里面JavaScript代码的编写思路，下面我们就得寻思如何将获取到的数据渲染到html页面，这时候应该每个人都能想到使用v-for指令来循环，但是也要更深的思考一下：v-for的位置应该放在哪？v-for里面的值分别代表了哪些数据？图片的路径该如何绑定？总价格该怎么去计算？v-for里面是否还可以继续嵌套v-for？为什么需要在v-for里面再嵌套一层v-for？把这些慢慢地捋清楚了，对我们的编程思维会有很大的提升，从此也就能够举一反三了。<br><br>


2、格式化金额<br>
【分析】<br>
一般情况下，在一个Vue项目中要对某一类数据进行格式化，那么肯定得用到过滤器。既然如此，那我们的思路就很清晰了：首先得定义一个过滤器，在这个过程中得分清楚局部过滤器和全局过滤器的定义以及应用的场景，接着我们就得在html页面上调用这个过滤器，如何去调用？如何传递额外的参数？这些我们都得熟悉。<br><br>


3、单件商品金额计算<br>
【分析】<br>
商品金额与商品数量挂钩，想到商品数量的增减，一般人会定义两个不同的方法。其实完全没必要，我们只要在传递的参数上动动手脚就行了。这时候我们就要很清楚：单击数据改变，那么双向数据绑定是一定需要的，也需要在两个按钮中绑定事件，触发事件则调用方法。那么该如何传递参数？每一个参数又代表什么呢？商品数量的上下限怎么去设置？这些我们想明白后，下手就容易多了。<br><br>


4、商品单选功能。<br>
【分析】<br>
经过测试，我们在相应的元素添加上check类名，那单选按钮的样式就显示出来了。那这样有眉目了，下面先看一段代码解读。<br>
v-bind:class="{'check': item.checked}"含义是当item.checked为真的时候，check这个类名会被附加，即页面最终渲染会是class="item-check-btn check"。<br>
这时候我们就需要定义一个事件来改变item.checked的值，由于json文件中并没有checked这个属性，因此我们必须自己来注册属性，如何去注册一个对象的属性？这才是我们应该掌握的知识点。<br><br>


5、全选和取消全选
这段代码有点绕，讲不太清楚，我还是直接放代码，根据代码来理解。<br>
```html
<div class="item-all-check">
  <a href="javascript:void(0)">
    <span class="item-check-btn" :class="{'check':checkAllFlag}">
      <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
    </span>
    <span v-show="!checkAllFlag" @click="checkAll(true)">全选</span>
  </a>
</div>
<div class="item-all-del">
  <a href="javascript:void(0)" class="item-del-btn" @click="checkAll(false)">
    <span v-show="checkAllFlag">取消全选</span>
  </a>
</div>
```
下面是JavaScript处理方法：<br>
```js
checkAll: function (flag) {
  this.checkAllFlag = flag;
  var _this = this;
  this.productList.forEach(function (item, index) {
    if (typeof item.checked == 'undefined') {
      _this.$set(item, "checked", flag);
    } else {
      item.checked = flag;
    }
  });
}
```
根据上面两段代码来分析：点击全选，checkAllFlag的值变成true，而productList对象组里的对象checked属性要么被创建赋值为true，要么直接被赋值为true（已经被单选上的商品）。此刻对应的页面就是全选按钮样式被添加上，“全选”两个字消失，而“取消全选”两个字出现。对于点击取消全选，执行流程也是一样的，即不说了，需要时刻记住的是：Vue项目中数据是能够共享的。<br><br>


6、商品总金额计算<br>
【分析】<br>
商品的总金额 = 各类商品数量X各类商品金额。实现思路很简单，只要定义一个方法，当商品的按钮被点击选中的时候，那么计算总金额，需要注意的是金额的叠加问题和清除问题，然后就是在何时何地调用该方法，最后就是将总金额渲染到html页面。<br><br>


7、删除商品<br>
【分析】<br>
在html代码中，有一个蒙层效果`<div class="md-overlay" v-if="delFlag"></div>`，我们在删除商品这个过程中需要定义两个比较重要的点击事件：一个事件点击删除，我们需要把要删除的对象保存起来，同时显示出蒙层；另外一个事件就是要从对象组里面获取该对象的索引值，然后根据splice方法删除索引值从而达到删除对象的效果。<br><br>

关于购物车功能的实现思路就分析到这里，还有更多的小细节可以自己试着补充一下。如果觉得这分析欠妥的话，希望给些建议，疑义相与析，[点击查看演示](https://cruxf.github.io/Vue-base/vue-cart/cart01.html)。下面开始关于地址选项的分析。<br><br>


**地址选项分析：** <br>

1、渲染出所有地址<br>
【分析】<br>
这个和前面的购物车渲染商品信息大同小异，需要注意的是json里面的数据，因为有时候数据的不用，我们调取json数据要写的代码也是不一样的。<br><br>

2、开始默认显示3组数据<br>
【分析】<br>
要实现这个功能，我们需要明白的就是v-for指令里面不仅仅可以循环对象组，还可以循环方法，只要方法中返回的是一组对象即可，并且该方法要在计算属性中定义，因为在截取数据前，首先的缓存数据，截取数据使用的方法为：slice()。<br><br>

3、显示更多<br>
【分析】<br>
可以定义一个方法，改变数据截取的数量。下面介绍一个利用三元运算符来实现这个功能：<br>
`<a class="addr-more-btn up-down-btn" href="javascript:" @click="(limitNum == 3) ? limitNum=addressList.length : limitNum=3">`<br><br>

4、选中样式切换<br>
【分析】<br>
我们都知道，在v-for指令中，能将数据的索引值遍历出来，那么这个索引值有什么用呢？下面请看一段代码：<br>
`<li v-for="(item,index) in filterAddress" v-bind:class="{'check': index == currentIndex}" @click="currentIndex=index">`<br>
该段代码十分巧妙的使用索引值来实现点击切换样式，它的实现原理就像是：2 = y？然后点击事件触发的时候，就把y赋值为2（2在这象征的是索引值），因此2 = y为true，故check这个类被添加进去。<br><br>

5、设置默认地址<br>
【分析】<br>
在json文件中，我们有个属性是用来说明页面是显式“设为默认”还是“默认地址”，这个功能我们可以通过v-if去实现。当我们点击“设为默认”的时候，可以调用一个方法，传递的参数为当前对象的ID值，接着我们去遍历对象组，判断对象组里面是否有对象的ID值等于传递进来的对象ID值，如果相等，则把“默认地址”显示出来，而其他的则隐藏。<br><br>

6、配送方式选项<br>
【分析】<br>
实现思路与技巧都与第4步“选中样式切换”一样。可以看以下代码：<br>
```html
<li v-bind:class="{'check': shippingMethod == 1}" @click="shippingMethod = 1">
  <div class="name">标准配送</div>
  <div class="price">Free</div>
</li>
<li v-bind:class="{'check': shippingMethod == 2}" @click="shippingMethod = 2">
  <div class="name">高级配送</div>
  <div class="price">180</div>
</li>
```
费了好长段时间，终于分析完了，[点击查看演示](https://cruxf.github.io/Vue-base/vue-cart/address01.html)。之前断断续续看了几遍视频，却总是不明就里，原来是过于浮躁，急于求成，导致浪费很多时间。其实对于技术，我现在才明白：不努力去理解代码，那么敲再多、敲再久能力也不会有任何的提高。<br><br>


# 2、vue-tab => Vue实现选项卡效果

这是一个利用Vue数据驱动特点做的一个选项卡，相比于纯JavaScript或者jQuery来说，方便简洁了不少。该案例原地址[请戳这里](https://juejin.im/post/5a0c191f6fb9a04514639419)<br>

案例的实现思路非常简单，一步步来说。<br>
1、点击顶部样式发生改变：<br>
当点击a标签的时候，会得到一个curId的属性和值，而类名为cur的class则根据curId属性的值来决定是否添加。<br>

2、底部文字变化：<br>
因为vue是根据数据的变化而实现某些功能的，数据驱动是vue的一大亮点。在点击a标签的时候，就创建了数据curId，v-bind:class和v-show都根据数据的真假而做出相应的行为。<br>

[点我查看效果呀](https://cruxf.github.io/Vue-base/vue-tab/index.html)<br><br>


# 3、vue-compre => Vue实现对数据的增删查

### 案例需求：
创建一个品牌展示表格，表头有编号（id），品牌名称（name），创建时间（time）和操作，需要实现的功能是对数据的增删查操作，和时间的格式化。这是一个[初始的静态页](https://cruxf.github.io/Vue-base/vue-compre/index01.html)<br>

**开发步骤一：** <br>
使用v-for指令遍历展示数据，最终呈现效果[点我看效果呀](https://cruxf.github.io/Vue-base/vue-compre/index02.html)<br>

**开发步骤二：** <br>
删除数据。首先，我们需要定义一个鼠标点击事件，并传入一个参数，当做被选中目标的ID值；接着我们要在Vue实例中定义一个方法，接收传递过来的参数，并将其保存下来，让对象的id等于传入的id；最后根据保存下来的id来删除指定的对象，在这过程中，要知道两个方法findIndex()和splice()[点我看效果呀](https://cruxf.github.io/Vue-base/vue-compre/index03.html)<br>

**开发步骤三：** <br>
增加数据。不用多想，使用双向数据绑定指令v-model，在静态页面中绑定相关的数据；接着将数据传递进一个方法中，把数据包装成数组要求的对象；最后将对象追加到数组中，并将输入框清空[点我看效果呀](https://cruxf.github.io/Vue-base/vue-compre/index04.html)<br>

**开发步骤四：** <br>
格式化时间。这里采用的全局过滤器，期间需要明白如何定义一个全局过滤器？如何调用全局过滤器？以及过滤器中各个参数的含义分别是什么[点我看效果呀](https://cruxf.github.io/Vue-base/vue-compre/index05.html)<br>

**开发步骤五：** <br>
查找数据。在这一过程中，v-for指令不再是遍历遍历已经被写好的数组对象里的数据了，而是要遍历一个在计算属性里定义的函数。在该函数里面，首先判断搜索框里面是否有值，如果没有，则返回原先的数组对象；如果有，那么就在原先数组上定义一个过滤器，在过滤器中又返回一个数组，然后在数组中查找存在的值并将其返回。在这过程中，要知道Object.keys()方法、some()方法、toLowerCase()方法以及indexOf()方法[点我看效果呀](https://cruxf.github.io/Vue-base/vue-compre/index06.html)<br>

**开发中所用到的方法：** <br>

1、findIndex()：返回传入一个测试条件（函数）符合条件的数组第一个元素位置[更多详情](http://www.runoob.com/jsref/jsref-findindex.html)<br>

2、splice()：向/从数组中添加/删除项目，然后返回被删除的项目[更多详情](http://www.w3school.com.cn/jsref/jsref_splice.asp)<br>

3、Object.keys()：会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）[更多详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br>

4、some()：只要数组中有一项在callback上被返回true，就返回true[更多详情](https://www.cnblogs.com/linsx/p/6796888.html)<br>

5、toLowerCase()：用于把字符串转换为小写。<br>

6、indexOf()：用来判断数组是否包含某个元素项目[更多详情](https://www.cnblogs.com/laneyfu/p/6136777.html)<br>

7、filter()：过滤筛选（callback在这里担任的是过滤器的角色，当元素符合条件，过滤器就返回true，而filter则会返回所有符合过滤条件的元素）[更多详情](https://www.cnblogs.com/linsx/p/6796888.html)<br>


# 4、vue-moudle => Vue各类组件传值的实现方式


**1、父组件向子组件传值** 

首先在父组件定义好数据，接着将子组件导入到父组件中。父组件只要在调用子组件的地方使用v-bind指令定义一个属性，并传值在该属性中即可，此时父组件的使命完成，请看下面关键代码：
```html
<div class="parentOne">
  <children-item :content="item" v-for="item in list" :key="item.id"></children-item>
</div>
```
【解析】

上面代码中`<children-item></children-item>`是导入进来的子组件，`content`是被v-bind指令定义的属性，当然不用v-bind指令定义也一样可以。只不过加了V-bind指令后，属性值就会被当做JavaScript表达式来解析，而不加v-bind指令就会被当做字符串解析。比如`Boolean="false"和:Boolean="false"`解析出来的结果是不同滴。如果还是有点迷糊，请来看[完整源码](https://github.com/CruxF/Vue-base/blob/master/vue-module/src/components/parent/ParentOne.vue)


好了，下面我们来看看子组件此时要做的事情是什么？


首先在子组件中要使用关键词`props`接收父组件传递过来的属性，然后直接对这个属性动手动脚就行了，十分简单，在这直接上完整源码：
```html
<template>
  <div class="ChildrenOne">
    <ul>
      <li v-for="childItem in content">{{childItem}}</li>
      <li>{{message}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ChildrenOne',
    props: ["content"],
    data() {
      return {
        message: this.content.id
      }
    }
  }
</script>
<style>

</style>
```

**2、子组件向父组件传值** 

子组件向父组件传值这一个技术点有个专业名词，叫做“发布订阅模式”，很明显在这里子组件为发布方，而父组件为订阅方。根据这个专业名词，我们来看看子组件里面发生的事情。首先，需要触发子组件视图层里的某个事件，接着由该事件触发的方法中又使用关键方法`$emit()`发布了一个自定义的事件，并且能够传入相关的参数。子组件所要的事情就只有这么多，下面我们看看核心源码：
```js
ChildrenOnclick() {
  // 发布自定义事件
  this.$emit("delete", this.index)
}
```
【解析】

上面代码中，当ChildrenOnclick方法被触发的时候，自定义了一个delete事件，并传入了相关参数`this.index`。这里是[完整源码](https://github.com/CruxF/Vue-base/blob/master/vue-module/src/components/children/ChildrenTwo.vue?1525682691399)，能帮助你更好的理解。


在父组件中，只要订阅由子组件发布的自定义事件即可。只要子组件的自定义事件被触发，那么父组件就会执行相关的方法，下面是核心代码：
```html
<children-item 
   :content="item" 
   :index="index" 
   v-for="(item,index) in list" 
   :key="item.id" 
   @delete="handleParentClick"
  >
</children-item>
```
【解析】

上面代码中，`@delete`是子组件自定义的事件，当该事件在子组件被触发的时候，那么`handleParentClick`这个方法就会被执行，请看[完整的代码](https://github.com/CruxF/Vue-base/blob/master/vue-module/src/components/parent/ParentTwo.vue?1525683050063)，以便更好的理解。


**3、兄弟组件传值** 

这块我还不是灰常明白，只是知道大概如何去实现。首先在由vue-cli搭建起来的项目中的main.js创建一个事件总线，也就是中转站，作为通信的桥梁。核心代码如下：
```js
// 建立中转站，实现组件与组件之间的传值
let bus = new Vue()
Vue.prototype.bus = bus
```
main.js[完整代码](https://github.com/CruxF/Vue-base/blob/master/vue-module/src/main.js?1525684248803)请点击哦。<br>


接着我们在发送方组件里面使用关键字`$emit()`定义一个自定义事件，并传入参数。核心代码如下：
```js
methods: {
  btnMessage() {
    this.bus.$emit("ReceiveMessage", this.message)
  }
}
```
【解析】

上面代码中，`this.bus`为在main.js里定义好的一个中转站变量，`ReceiveMessage`为自定义事件，`this.message`为定义好的参数。[完整代码](https://github.com/CruxF/Vue-base/blob/master/vue-module/src/components/brother/BrotherOne.vue)在此。^_^


最后是接收方组件，只要使用`this.bus.$on`关键字就能够监听到发送方触发的事件，并在内部通过一个函数接收传入进来的参数，执行相关的动作，下面请看完整代码：
```html
<template>
  <div class="brotherOne">
    <h5>我是接收方组件，下面是接收到的信息</h5>
    <span>{{name}}</span>
  </div>
</template>
<script>
  export default {
    name: 'BrotherTwo',
    data() {
      return {
        name: "我缺爱啊"
      }
    },
    mounted() {
      let self = this;
      this.bus.$on("ReceiveMessage", function(item) {
        self.name = item;
      })
    }
  }
</script>
<style>

</style>
```


# 5、vue-aixos  => vue开发移动端项目小栗子
捣鼓这个小栗子目的很简单，就是为了持续提高自己开发Vue的熟练度(至少现在已经享受组件化开发了)，这个小栗子解决几个目前移动端开发的某些问题，尽量不要吐槽我没有使用最简的stylus语法，实属无奈，这个不谈。下面一起来看一下以下几个问题的解决吧。<br>

**一：使用stylus解决移动端1px问题** <br>
关于这个问题的产生原因，以及大概的解决原理，都在[我Blog](https://github.com/CruxF/IMOOC/issues/4)有较为详细的介绍，在此不再重复说明。现在仔细说一下利用stylus解决1px问题的过程，总共分为以下几个步骤：<br>

- 下载安装stylus的依赖包`cnpm install stylus stylus-loader --save-dev`；
- 将[这份源码](https://github.com/CruxF/Vue-base/blob/master/vue-axios/src/assets/styles/border.styl)copy到你的项目中，通过阅读这份源码和我之前写的博文，应该能理解移动端解决1px的原理；
- 最后是在需要解决1px的组件中导入该文件，为目标元素设置相应的类名，具体的请看下面的示例：
```html
<template>
  <div class="middle">
    <ul>
      <li class="border-1px">姓名：</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Middle",    
  }
</script>
<style lang="stylus" scoped="scoped">
  @import "../../../assets/styles/border.styl";
  li {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    color: #2A343D;
    border-1px(#F0F0F0);
    padding: 12px 0;
  }
</style>
```

**二：解决移动端开发300ms问题** <br>
关于问题的产生背景以及解决的原理还是和上文一样，在我的Blog中有介绍。由于现在开发都追求效率，为此我们可以选择通过fastclick插件来解决这个问题，下面是详细步骤：<br>

- 下载安装fastclick的jar包`npm install fastclick --save`；
- 在通过vue-cli搭建起来的项目中，进入main.js文件，在里面导入`import fastClick from 'fastclick`，最后也是在main.js中使用`fastClick.attach(document.body)`。<br>

**三：让页面在不同设备下显示不同的图片大小** <br>
这个需求的产生背景是为了避免在物理像素较高的设备中图片变得不清晰。这个问题也挺好解决，涉及到的技术点还是和前端1px问题有很大的关系，因为都是需要判断DPR这个玩意。DPR是啥？看我的Blog去啊，下面我们来看核心代码（假设文件名为image.styl）：
```js
bg-image($url)
  background-image: url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
background-image: url($url + "@3x.png")
```
下面是我们应用在组件中的代码：
```html
<template>
  <div class="header">
    <div class="h-back"></div>
    <div class="h-title">推荐信息</div>
  </div>
</template>
<script>
  export default {
    name: "Header"
  }
</script>
<style lang="stylus" scoped="scoped">
  @import "../../../assets/styles/image.styl"
  .h-back {
  	height: 24px;
  	width: 24px;
  	bg-image("../imgs/back");
  	background-size: 24px 24px;
  	background-repeat: no-repeat;
  	flex: 1;
  }
</style>
```

**四：通过axios和后台数据交互** <br>
什么是axios在这不解释，为什么前端要做和后台数据交互的事情也不解释。下面马上来看如何使用axios如何获取本地mock后台数据：<br>

- 下载安装axios的jar包，`cnpm install axios`或者`cnpm install axios --save`；
- 在所需要获取后台数据的组件导入`import axios from 'axios'`；
- 下面来看具体的全部代码：
```html
<template>
  <div class="recommend">
    <header-item></header-item>
    <middle-item :micontent="MiddleInfo"></middle-item>
    <footer-item :focontent="SuveyProblemList"></footer-item>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import Middle from './middle/Middle.vue'
  import Footer from './footer/Footer.vue'
  // 导入axios插件
  import axios from 'axios'
  export default {
    name: 'Recommend',
    data() {
      return {
      	SuveyProblemList: [],        
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getSuveyProblem();
      });
    },
    methods: {
      getSuveyProblem() {
        var self = this;
        axios({
          method: 'get',
          url: '../../../static/data/SurveyProblem.json',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function(res) {
        	var response = res.data;
        	if(response.code == "001"){
        		self.SuveyProblemList = res.data.data;
        	}
        }).catch(function(error) {
          console.log("访问失败！")
        })
      }
    },
    components: {
      'header-item': Header,
      'middle-item': Middle,
      'footer-item': Footer
    }
  }
</script>

<style>

</style>
```
axios使用过程中目前遇到的坑：使用post方式是无法获得本地json数据的。解决方式参考这里[传送门](https://www.cnblogs.com/yuri2016/p/6784109.html)
以上代码是从后台得到数据，那么下面我们看看如何返回一些数据到后台<br>
```js
RecommendSubmit() {
  // 向后端发送数据
  var self = this;
  axios({
    method: 'post',
    url: 'http://192.168.1.14:8080/hnd/save',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: self.MiddleInfo
  }).then(function(res) {
    if(res.data.code === "001") {
      console.log("访问后台接口数据成功");
      self.$router.push({
        path: "/Submit"
      })
    }
  }).catch(function(error) {
    var obj = {
      code: "001",
      msg: "ok"
    }
    if(obj.code === "001") {
      console.log("访问模拟接口数据成功");
      self.$router.push({
        path: "/Submit"
      })
    }
  })
}
```
向后台返回数据是通过post方式，data代表着MiddleInfo这个对象里面存储的所有数据。由于存在跨域问题，因此then()方法无法执行，我们需要在catch()方法中模拟后台返回给前端的状态值，比如以上代码的obj对象就是模拟后台成功接收了前端的数据，然后再返回的一些数据。通过判断code这个值然后去做相应的操作。<br>

等项目真正上线了，那么就不会有跨域的问题，此时then()中的操作就会被执行。在打包文件（npm run build）为后台同学部署到服务器上的时候，记得把config文件夹的index.js文件中的两个assetsPublicPath属性后加个点，比如在本地运行：`assetsPublicPath: '/'`，在服务器上运行：`assetsPublicPath: './'`<br>


**五：通过方法代替路由跳转** <br>
有很多需求是这样的：需要判断输入的内容提交到数据库是否正确再进行路由跳转，然而在<router-link>标签中绑定方法是无效的也是错误的，那么我们该如何解决呢？下面看具体代码：
```html
HTML结构
<button @click="RecommendSubmit()">提交</button>

RecommendSubmit() {      	
  this.$router.push({
    path: '/Submit'
  });   	
}
```
【注意】尽量使用this.$router.push而不要使用this.$router.replace，因为经过实测：this.$router.replace最终会让页面跳转变得很奇怪。<br>

以上就是在移动端开发中比较常遇到的问题，至于适配那方面，有时间再来扯一扯。下面是一些刚刚遇见的比较实用的CSS样式，希望各位大佬能轻点喷.....<br>

**（1）改变input框内的placeholder文字颜色** <br>
直接上代码，没啥好说的
```
input::-webkit-input-placeholder {
  color: #C9CDD1;
}
```

**（2）单选按钮切换自定义样式** <br>
先看下面一段代码，再来细细分析一下
```css
input[type=radio] {
    position: relative;
    width: 25px;
    height: 1px;
  }
  input[type=radio]::before, input[type=radio]::after {
    position: absolute;
    display: block;
    content: '';
    border-radius: 50%;
    transition: .3s all esae;
  }
  input[type=radio]::before {
    top: -10px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
  }
  input[type=radio]::after {
    top: -6px;
    left: 4px;
    width: 11px;
    height: 11px;
    background-color: #fff;
  }
  input[type=radio]:checked::before {
    border-color: #27AE60;
  }
  input[type=radio]:checked::after {
    background-color: #27AE60;
  }
```
【代码分析】<br>
首先将默认的单选按钮设置相对定位，并且高度为1px，即让默认的单选按钮区域消失。<br>
接着在单选按钮的之前和之后各插入一个空元素（content），并且为这两个设置统一样式，如定位方式（position）、元素特性（display）、边框样式（border-radius）和过渡动画（transition）。<br>
当然也要为这两个元素设置单独的样式，在这案例代码中，单选按钮之前的元素为一个背景颜色透明，边框为2px的区域，单选按钮之后的元素为一个有背景颜色的区域。最后是当选中单选按钮区域的时候，改变之前和之后的元素样式即可。<br>




今天就先说到这，更多内容请看下回分解！<br>


### 项目运行
```
步骤一:git clone git@github.com:CruxF/Vue-base.git
步骤二:cd Vue-base
步骤三:cd vue-axios
步骤四:npm install  （前提：安装好了node、npm、git、webpack）
步骤五:npm run dev
```













