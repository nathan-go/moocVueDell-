<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './component/Header';
import CitySearch from './component/Search';
import CityList from './component/List';
import CityAlphabet from './component/Alphabet';
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    data() {
        return {
            cities: {},
            hotCities: [],
        };
    },
    mounted() {
        this.handleData();
    },
    methods: {
        handleData() {
            axios.get('/api/city.json').then(this.getCityInfoSucc);
        },
        getCityInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                // handle the data
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        },
    },
};
</script>

<style lang="stylus" scoped></style>
