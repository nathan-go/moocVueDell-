<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.url" :alt="item.id" class="swiper-image" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        swiperList: Array,
    },
    computed: {
        showSwiper() {
            return this.swiperList.length;
        },
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop: true,
            },
        };
    },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 30.48%
  .swiper-image
    width: 100%
</style>
