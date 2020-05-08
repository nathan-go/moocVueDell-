import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import 'swiper/css/swiper.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
