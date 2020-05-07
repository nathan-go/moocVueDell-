<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.header
  position: relative
  overflow: hidden
  height: .86rem
  line-height .86rem
  text-align: center
  color: #fff
  background-color $bgColor
  font-size: .32rem
  .header-back
    width: .64rem
    font-size: .4rem
    text-align: center
    position: absolute
    left: 0
    top: 0
    color: #fff
</style>
