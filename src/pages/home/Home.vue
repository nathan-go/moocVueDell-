<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recList="recommendList"></home-recommend>
        <home-weekend :weekList="weekList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './component/Header';
import HomeSwiper from './component/Swiper';
import HomeIcons from './component/Icons';
import HomeRecommend from './component/Recommend';
import HomeWeekend from './component/Weekend';
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    name: 'Home',
    data() {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekList: [],
            lastCity: '',
        };
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    computed: {
        ...mapState(['city']),
    },
    methods: {
        getHomeInfo() {
            axios
                .get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                // ret表示服务器表示数据为真，并且data是有值的时候
                const data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekList = data.weekList;
            }
        },
    },
    mounted() {
        //console.log('mounted');
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated() {
        if (this.lastCity !== this.city) {
            this.getHomeInfo();
            this.lastCity = this.city;
        }
    },
};
</script>

<style lang="stylus" scoped></style>
