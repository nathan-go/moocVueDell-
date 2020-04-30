<template>
    <div class="header">
        <div class="header-left">c</div>
        <div class="header-input">输入城市</div>
        <div class="header-right">三亚</div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style lang="stylus" scoped>
.header
  height: .86rem
  line-height .86rem
  display: flex
  background-color #00bcd4
  color: #fff
  .header-left
    width: .64rem
    float: left
  .header-input
    height: .64rem
    flex: 1
    background-color: #fff
    border-radius: .1rem
    margin-top: .12rem
    margin-left: .2rem
    color: #ccc
    line-height: .64rem
    text-indent: .1rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
</style>
