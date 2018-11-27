// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import fastClick from 'fastclick';
import 'styles/reset.css';// 解决兼容问题
import 'styles/border.css';// 解决border1px问题
import 'styles/iconfont.css';// 引入iconfont
import 'swiper/dist/css/swiper.css';// 引入轮播图
import App from './App';
import router from './router';

Vue.config.productionTip = false;
fastClick.attach(document.body);// 解决移动端click时间300ms延迟的问题
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
