<template>
  <div class="ChildrenTwo">
    <ul>
      <li v-for="childItem in content" @click="ChildrenOnclick()">{{childItem}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ChildrenTwo',
    props: ["content", "index"],
    data() {
      return {

      }
    },
    created() {
      console.log(this.index);
    },
    methods: {
      ChildrenOnclick() {
        console.log(this.index);
        // 发布订阅模式
        this.$emit("delete", this.index)
      }
    }
  }
</script>

<style>

</style>