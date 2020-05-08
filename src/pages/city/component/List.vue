<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper" @click="handleClick(city)">
                        <div class="button">{{ this.city }}</div>
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
                        @click="handleClick(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="city in item"
                        :key="city.id"
                        @click="handleClick(city.name)"
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
import { mapState } from 'vuex';
export default {
    name: 'CityList',
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    props: {
        cities: Object,
        hot: Array,
        letter: String,
    },
    computed: {
        ...mapState(['city']),
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        },
    },
    methods: {
        handleClick(city) {
            // now, we will change the state, by using the dispatch
            this.$store.dispatch('changeCity', city);
            this.$router.push('/');
        },
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
