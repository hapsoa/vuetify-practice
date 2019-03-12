import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Practice1/Practice1.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/line-graph',
      name: 'line-graph',
      component: () => import('./components/LineGraph/LineGraph.vue'),
    },
  ],
});
