<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push({
        path: '/'
      })
    },
    ...mapActions(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        var Element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(Element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped="scoped">
@import '~styles/variables.styl'
.border-bottom:before {
  border-color: #ccc;
}
.border-bottom:after {
  border-color: #ccc;
}
.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.title {
  line-height: .54rem;
  background: #eee;
  padding-left: .2rem;
  color: #666;
  font-size: .26rem;
}
.button-list {
  padding: .1rem .6rem .1rem .1rem;
  /*触发BFC*/
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.3%;
}
.button {
  margin: .1rem;
  padding: .1rem 0;
  text-align: center;
  border: .02rem solid #ccc;
  border-radius: .06rem;
}
.item {
  line-height: .76rem;
  color: #666;
  padding-left: .2rem;
}
</style>
