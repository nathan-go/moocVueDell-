<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './component/Banner';
import DetailHeader from './component/Header';
import DetailList from './component/List';
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data() {
        return {
            list: [
                {
                    title: 'adult',
                    children: [
                        {
                            title: '1',
                            children: [
                                {
                                    title: '1-1',
                                },
                                {
                                    title: '1-2',
                                },
                            ],
                        },
                        {
                            title: '2',
                        },
                    ],
                },
                {
                    title: 'child',
                },
                {
                    title: 'good',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
