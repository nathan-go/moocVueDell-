<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img
                            class="icon-img-content"
                            :src="item.url"
                            :alt="item.desc"
                        />
                    </div>
                    <p class="icon-desc">
                        {{ item.desc }}
                    </p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeIcons',
    computed: {
        pages() {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        },
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
            },
            iconList: [
                {
                    id: '0001',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店',
                },
                {
                    id: '0002',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票',
                },
                {
                    id: '0003',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                    desc: '火车票',
                },
                {
                    id: '0004',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc: '度假',
                },
                {
                    id: '0005',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '特价酒店',
                },
                {
                    id: '0006',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '特价机票',
                },
                {
                    id: '0007',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                    desc: '特价火车票双十一特价火车票的哦',
                },
                {
                    id: '0008',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc: '特价度假',
                },
                {
                    id: '0009',
                    url:
                        'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '景点门票',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icon
  overflow: hidden
  position: relative
  float: left
  width: 25%
  padding-bottom: 25%
  height: 0;
  .icon-img
    position: absolute
    top:0
    left:0
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding .1rem
    .icon-img-content
      height: 100%
      display: block
      margin 0 auto
  .icon-desc
    position: absolute
    left: 0;
    right: 0
    bottom: 0
    line-height .44rem
    height: .44rem
    text-align: center
    color: $darkTextColor
    ellipsis()
</style>
