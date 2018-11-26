// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastClick from 'fastclick';
import App from './App';
import router from './router';
import './assets/styles/reset.css';// 解决兼容问题
import './assets/styles/border.css';// 解决border1px问题

Vue.config.productionTip = false;
fastClick.attach(document.body);// 解决移动端click时间300ms延迟的问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
