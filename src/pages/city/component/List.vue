<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="city in item"
                        :key="city.id"
                    >
                        {{ city.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'CityList',
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    props: {
        cities: Object,
        hot: Array,
    },
};
</script>

<style lang="stylus" scoped>
.border-topbottom, .border-bottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.list
  position absolute
  left 0
  right 0
  top 1.58rem
  bottom 0
  overflow: hidden
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
  .button-list
    overflow: hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        text-align center
        margin .1rem
        border: .02rem solid #ccc
        padding .1rem 0
        border-radius .06rem
  .item-list
    color: #666666
    line-height .76rem
    padding: 0 .2rem
</style>
