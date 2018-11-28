<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>

</template>

<script>
import HomeHeader from './components/Header';// 引入头部
import HomeSwiper from './components/Swiper';// 引入录播图
import HomeIcons from './components/Icons';// 引入录播图
import HomeRecommend from './components/Recommend'; //引入推荐
import HomeWeekend from './components/Weekend'; //引入推荐

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  }
};
</script>

<style>

</style>

