<template>
    <div class="container" @click="handleGallary">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="item of imgs" :key="item.id">
                    <img class="swipper-img" :src="item.url" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                loop: true,
                observeParents: true,
                observer: true,
            },
        };
    },
    methods: {
        handleGallary() {
            this.$emit('hideGallary');
        },
    },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content center
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color #000
  z-index: 99
  .wrapper
    height: 0
    width: 100%
    padding-bottom 100%
    .swipper-img
       width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
