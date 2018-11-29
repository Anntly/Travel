import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home'; // ./src/pages...
import City from '@/pages/city/City';


Vue.use(Router);

// 路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/city',
      name: 'City',
      component: City,
    },
  ],
});
