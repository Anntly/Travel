<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>

</template>

<script>
import HomeHeader from './components/Header';// 引入头部
import HomeSwiper from './components/Swiper';// 引入录播图

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  }
};
</script>

<style>

</style>

