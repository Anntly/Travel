import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home'; // ./src/pages...
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';


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
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ],
  //使页面滚动行为不共享
  scrollBehavior (to,from, savedPosition) {
    return {x:0 ,y:0}
  }
});
