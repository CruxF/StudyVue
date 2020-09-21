<template>
  <div class="parentTwo">
    <children-item 
    	:content="item" 
    	:index="index" 
    	v-for="(item,index) in list" 
    	:key="item.id" 
    	@delete="handleParentClick"
    >
    </children-item>
  </div>
</template>

<script>
  import ChildrenItem from "../children/ChildrenTwo.vue"
  export default {
    name: "ParentTwo",
    data() {
      return {
        list: [
          { id: "001", title: "这是父组件第一项内容" },
          { id: "002", title: "这是父组件第二项内容" },
          { id: "003", title: "这是父组件第三项内容" }
        ]
      }
    },
    methods: {
      handleParentClick(index) {
        this.list.splice(index, 1);
      }
    },
    components: {
      "children-item": ChildrenItem
    }
  }
</script>

<style>

</style>