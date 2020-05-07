<template>
    <ul class="list">
        <li class="item" v-for="(item, key) of cities" :key="key">{{ key }}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object,
    },
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
