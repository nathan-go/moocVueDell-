<template>
    <ul class="list">
        <li
            class="item"
            v-for="(item, key) of letters"
            :key="key"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object,
    },
    data() {
        return {
            touchStatus: false,
        };
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            return letters;
        },
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText);
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchEnd() {
            this.touchStatus = false;
        },
        handleTouchMove(e) {
            if (this.touchStatus) {
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = e.touches[0].clientY - 79;
                const index = Math.floor((touchY - startY) / 20);
                if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index]);
                }
            }
        },
    },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
.list
  position: absolute
  flex-direction column
  justify-content center
  text-align center
  display flex
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .4rem
    color $bgColor
</style>
