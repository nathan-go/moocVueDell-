<template>
    <div>
        <router-link to="/">
            <div class="header-abs" v-show="showAbs">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0,
            },
        };
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop;
            if (top > 60) {
                this.showAbs = false;
                let opacity = (top - 60) / (140 - 60);
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle.opacity = opacity;
            } else {
                this.showAbs = true;
            }
        },
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll);
    },
    deactivated() {
        console.log('deactivated');
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.header-abs
  position: absolute
  left .1rem
  top .1rem
  width .8rem
  height .8rem
  border-radius .4rem
  background-color rgba(0,0,0,.8)
  text-align center
  .back-icon
    color rgba(255,255,255,.8)
    line-height .8rem
    font-size: .4rem
    font-weight bold
.header-fixed
  z-index:2
  position: fixed
  top 0
  left 0
  height 1rem
  width 100%
  background-color $bgColor
  .back-icon
    padding-left .2rem
    color rgba(255,255,255,.8)
    line-height 1rem
    font-size: .4rem
    font-weight bold
</style>
