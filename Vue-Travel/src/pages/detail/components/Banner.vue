<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner img {
  width: 100%;
}
.banner-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: .6rem;
  display: flex;
  background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8));
}
.banner-title {
  flex: 1;
  font-size: .32rem;
  padding: 0 .2rem;
  color: #fff;
}
.banner-number {
  padding: 0 .4rem;
  height: .32rem;
  line-height: .32rem;
  border-radius: .2rem;
  margin-top: .14rem;
  margin-right: .1rem;
  background-color: rgba(0,0,0, .8);
  font-size: .24rem;
  color: #fff;
}
.banner-icon {
  font-size: .24rem;
}
</style>
