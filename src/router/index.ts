import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('../views/Story.vue'),
  },
  {
    path: '*',
    beforeEnter(to, from, next) {
      window.location.href = `https://scalia-vue-production.com${to.fullPath}`;
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
