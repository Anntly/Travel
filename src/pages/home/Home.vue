<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>

<script>
import HomeHeader from './components/Header';// 引入头部
import HomeSwiper from './components/Swiper';// 引入录播图
import HomeIcons from './components/Icons';// 引入录播图
import HomeRecommend from './components/Recommend'; //引入推荐
import HomeWeekend from './components/Weekend'; //引入推荐
import axios from 'axios';// 引入ajax

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if(res.ret && res.data){
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      console.log(res);
    },
  },
  mounted () {
    this.getHomeInfo();
  }
};
</script>

<style>

</style>

