<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  },
  // 解决轮播图首屏不是第一张图片的问题
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
/*>>>样式穿透*/
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
/*让元素的宽高比始终为31，这是为了解决网速过慢时页面抖动问题，设置height不行的*/
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31%;
}

.swiper-img {
  width: 100%;
}
</style>
