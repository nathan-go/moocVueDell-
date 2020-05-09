import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/Home.vue'),
    },
    {
        path: '/city',
        name: 'City',
        component: () => import('@/pages/city/City.vue'),
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('@/pages/detail/Detail.vue'),
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;
