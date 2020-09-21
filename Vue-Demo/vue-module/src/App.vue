<template>
  <div id="app">
    <div class="app-header">
      <div class="parentOne">
        <router-link to="/ParentOne">父组件向子组件传值</router-link>
      </div>
      <div class="parentTwo">
        <router-link to="/ParentTwo">子组件向父组件传值</router-link>
      </div>
      <div class="brotherOne">
        <router-link to="/BrotherOne">兄弟组件传值</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped="scoped">
  .app-header {
    width: 600px;
    height: auto;
    margin: 50px auto;
    overflow: hidden;
  }
  .app-header a {
    color: #42B983;
    text-decoration: none;
  }
  .app-header a:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  .app-header > div {
    float: left;
    margin-right: 50px;
  }
</style>