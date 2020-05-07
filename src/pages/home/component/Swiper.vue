<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
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
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop: true,
            },
            swiperList: [
                {
                    id: '0001',
                    url:
                        'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg',
                },
                {
                    id: '0002',
                    url:
                        'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg',
                },
            ],
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
  padding-bottom: 31.25%
  .swiper-image
    width: 100%
</style>
