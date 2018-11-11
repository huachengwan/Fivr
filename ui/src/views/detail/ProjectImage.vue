<template>
  <div class='left wrapper'>
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1">
        <v-img :src='data.main_image__path' aspect-ratio='1' width='100%'/>
      </swiper-slide>
      <swiper-slide class="slide-1" v-for='image_path in data.additional_image_paths'>
        <v-img  :src='image_path' width='100%' aspect-ratio='1'/>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1">
        <v-img :src='data.main_image__path' aspect-ratio='1' width='100%'/>
      </swiper-slide>
      <swiper-slide class="slide-1" v-for='image_path in data.additional_image_paths'>
        <v-img :src='image_path' width='100%' aspect-ratio='1'/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ProjectImage",
  data: () => ({
    swiperOptionTop: {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    swiperOptionThumbs: {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    },
  }),
  computed: {
    ...mapState('thing', ['selectedDetail']),
    data: function() {
      return this.selectedDetail.data
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  width: 360px
  margin-right: 30px
  .gallery-top
    height: 80%!important
    width: calc(100% -22px)
    padding: 10px
    border: 1px solid
  .gallery-thumbs
    height: 20%!important
    box-sizing: border-box
    width: calc(100% -22px)
    padding: 10px
    border: 1px solid
    margin-top: -1px
    .swiper-slide
      width: 25%
      height: 100%
      opacity: 0.4
      &.swiper-slide-active
        opacity: 1
</style>