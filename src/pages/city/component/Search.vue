<template>
    <div>
        <div class="search">
            <input
                type="text"
                class="search-input"
                placeholder="输入城市名或拼音"
                v-model="keyword"
            />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleClick(item.name)"
                >
                    {{ item.name }}
                </li>
                <li
                    class="search-item border-bottom no-result"
                    v-show="hasSearchResult"
                >
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'CitySearch',
    data() {
        return {
            keyword: '',
            list: [],
            timer: null,
        };
    },
    props: {
        cities: Object,
    },
    watch: {
        keyword() {
            // 监听keyword的变化，
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (
                            value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        },
    },
    computed: {
        hasSearchResult() {
            return !this.list.length && this.keyword;
        },
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search, {
            click: true,
        });
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
@import '~@/assets/styles/variables.styl';
.search
  height .72rem
  background-color $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    height .62rem
    line-height .62rem
    width: 100%
    text-align: center
    border-radius: .06rem
    color: #666
    padding 0 .1rem
.search-content
  z-index 1
  overflow: hidden
  position: absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    color: #666
    background-color #fff
  .no-result
    background-color orange
</style>
