<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img
                    class="icon-img-content"
                    src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png"
                    alt=""
                />
            </div>
            <p class="icon-desc">
                热门景点
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeIcons',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.icons
  overflow:hidden;
  height: 0;
  padding-bottom 50%;
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
</style>
