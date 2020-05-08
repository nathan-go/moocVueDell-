<template>
    <div>
        <div class="item" v-for="(value, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="iconfont item-title-icon">&#xe62d;</span>
                {{ value.title }}
            </div>
            <div v-if="value.children" class="item-children">
                <detail-list :list="value.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array,
    },
};
</script>

<style lang="stylus" scoped>
.item-title
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
.item-children
  padding 0 .2rem
</style>
