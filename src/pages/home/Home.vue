<template>
    <div>
        <home-header :city="city"></home-header>
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
export default {
    name: 'Home',
    data() {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekList: [],
        };
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json').then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                // ret表示服务器表示数据为真，并且data是有值的时候
                const data = res.data;
                this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekList = data.weekList;
            }
        },
    },
    mounted() {
        this.getHomeInfo();
    },
};
</script>

<style lang="stylus" scoped></style>
