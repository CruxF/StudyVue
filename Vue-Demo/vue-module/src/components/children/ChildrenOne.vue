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