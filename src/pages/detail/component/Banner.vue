<template>
    <div>
        <div class="banner" @click="handleGallary">
            <img class="banner-img" :src="bannerImg" alt="" />
            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe62d;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="gallaryImgs"
            v-show="showGallary"
            @hideGallary="handleHideGallary"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/pages/common/gallary/Gallary';
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array,
    },
    data() {
        return {
            imgs: [
                {
                    id: '0001',
                    url:
                        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
                },
                {
                    id: '0002',
                    url:
                        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
                },
                {
                    id: '0003',
                    url:
                        'https://img1.qunarzz.com/vs_ceph_vs_tts/5e00057d-37f8-405a-b37a-60bc97065d51.jpg_r_1280x840x95_075e4d32.jpg',
                },
            ],
            showGallary: false,
        };
    },
    components: {
        CommonGallary,
    },
    methods: {
        handleGallary() {
            this.showGallary = true;
        },
        handleHideGallary() {
            this.showGallary = false;
        },
    },
};
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom 55%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .6rem
    display: flex
    color: #fff
    background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding 0 .2rem
    .banner-number
      margin-top .04rem
      padding 0 .4rem
      font-size .24rem
      height .32rem
      line-height .32rem
      border-radius .2rem
      background-color rgba(0,0,0,.8)
      .banner-icon
        font-size: .24rem
</style>
