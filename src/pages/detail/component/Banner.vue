<template>
    <div>
        <div class="banner" @click="handleGallary">
            <img
                class="banner-img"
                src="https://img1.qunarzz.com/vs_ceph_vs_tts/59b3a2d2-0165-42c9-9bcf-1c1162c30006.jpg_r_640x420x95_faf2b42a.jpg"
                alt=""
            />
            <div class="banner-info">
                <div class="banner-title">大连生涯海洋世界</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe62d;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @hideGallary="handleHideGallary"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/pages/common/gallary/Gallary';
export default {
    name: 'DetailBanner',
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
                        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
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
