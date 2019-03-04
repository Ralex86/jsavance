import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeScene from './scene/HomeScene.vue';
import MovieFormScene from './scene/MovieFormScene.vue';
import MovieDetailScene from './scene/MovieDetailScene.vue';

Vue.config.productionTip = false;

const routes = [
  {path: '/', component: HomeScene},
  {path: '/new', component: MovieFormScene},
  {path: '/movie/:id', component: MovieDetailScene, props: true},
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount('#app');
