<template>
  <div class="submit">
    <submit-header></submit-header>
    <submit-middle></submit-middle>
    <submit-footer></submit-footer>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import Middle from './middle/Middle.vue'
  import Footer from './footer/Footer.vue'
  export default {
    name: "Submit",
    data() {
      return {}
    },
    components: {
      "submit-header": Header,
      "submit-middle": Middle,
      "submit-footer": Footer
    }
  }
</script>

<style lang="stylus" scoped="scoped">

</style>