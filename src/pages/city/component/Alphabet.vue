<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
.list
  position: absolute
  flex-direction column
  justify-content center
  text-align center
  display flex
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .42rem
    color $bgColor
</style>
