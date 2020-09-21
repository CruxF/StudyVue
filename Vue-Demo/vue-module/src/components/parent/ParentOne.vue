<template>
  <div class="parentOne">
    <children-item :content="item" v-for="item in list" :key="item.id"></children-item>
  </div>
</template>

<script>
  import ChildrenItem from "../children/ChildrenOne.vue"
  export default {
    name: "ParentOne",
    data() {
      return {
        list: [
          { id: "001", title: "这是父组件第一项内容" },
          { id: "002", title: "这是父组件第二项内容" },
          { id: "003", title: "这是父组件第三项内容" }
        ]
      }
    },
    components: {
      "children-item": ChildrenItem
    }
  }
</script>

<style>

</style>