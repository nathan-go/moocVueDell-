<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont">&#xe62d;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        city: String,
    },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.header
  height: .86rem
  line-height .86rem
  display: flex
  background-color $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center;
      font-size: .4rem
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
    padding-left: .2rem
  .header-right
    color: #fff
    width: 1.24rem
    float: right
    text-align: center
    span
      font-size: .2rem
</style>
