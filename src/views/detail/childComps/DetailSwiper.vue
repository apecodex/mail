<template>
  <div class="detail-swiper">
    <swiper class="Detailswiper">
      <swiper-item v-for="item in topImages" :key="item">
        <a :href="item">
          <img :src="item" :alt="item" class="detail-img">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default(){
          return []
        }
      }
  },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>
  .Detailswiper{
    max-height: 300px;
    overflow: hidden;
  }
  .detail-img {
    width: 100%;
    height: 100%;
  }
</style>