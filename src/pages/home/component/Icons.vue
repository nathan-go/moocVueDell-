<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="show">
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
        show() {
            return this.iconList.length;
        },
    },
    props: {
        iconList: Array,
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
            },
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
.icons
  margin-top .1rem
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
