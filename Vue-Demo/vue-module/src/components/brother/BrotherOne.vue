<template>
  <div class="brotherOne">
    <span>我是发送方组件</span>
    <button @click="btnMessage()">点击发送信息</button>
    <brother-two></brother-two>
  </div>
</template>

<script>
  import BrotherTwo from "./BrotherTwo"
  export default {
    name: 'BrotherOne',
    data() {
      return {
        message: "这是来自兄弟之间的爱"
      }
    },
    methods: {
      btnMessage() {
        this.bus.$emit("ReceiveMessage", this.message)
      }
    },
    components: {
      BrotherTwo
    }
  }
</script>

<style>

</style>