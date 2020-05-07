<template>
    <div>
        <div class="rec-title">
            热销推荐
        </div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item of recList"
                :key="item.id"
            >
                <img class="item-img" :src="item.url" :alt="item.title" />
                <div class="item-info">
                    <p class="item-title">
                        {{ item.title }}
                    </p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recList: [
                {
                    id: '0001',
                    url:
                        'http://img1.qunarzz.com/sight/p0/2003/28/284dafc9676b1e06a3.water.jpg_200x200_1b020636.jpg',
                    title: '上海野生动物园',
                    desc: '会跳芭蕾的小海狮们',
                },
                {
                    id: '0002',
                    url:
                        'http://img1.qunarzz.com/sight/p0/1811/7e/7ecbd353174c66b1a3.img.jpg_200x200_f661532a.jpg',
                    title: '上海欢乐谷',
                    desc: '敢上1200米的木质过山车么？',
                },
                {
                    id: '0003',
                    url:
                        'http://img1.qunarzz.com/sight/p0/2003/2b/2b5bd22ea6a3cff9a3.water.jpg_200x200_35882e48.jpg',
                    title: '上海海昌海洋动物园',
                    desc: '帅的人都过去了，你还等什么呢？',
                },
                {
                    id: '0004',
                    url:
                        'http://img1.qunarzz.com/sight/p0/1603/8b/8b12625615da783c90.water.jpg_200x200_e4e7cadb.jpg',
                    title: '上海海湾国家森林公园',
                    desc: '这里最近很火的哦，快来看看吧',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.rec-title
   margin-top .2rem
   line-height .8rem
   background-color #eee
   text-indent .2rem
  .item
     display: flex
     height: 1.9rem
     overflow: hidden
   .item-img
     width 1.7rem
     height: 1.7rem
     padding .1rem
   .item-info
     flex: 1
     padding .1rem
     min-width 0
     .item-title
       line-height .54rem
       font-size: .32rem
       ellipsis()
     .item-desc
       line-height .4rem
       color: #ccc
       ellipsis()
     .item-button
       background-color #ff9300
       border radius 0.06rem
       padding 0 .2rem
       margin-top .26rem
       color: #fff
       line-height .4rem
</style>
