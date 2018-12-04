<template>
  <div>
    <home-header></home-header>
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
import { mapState } from 'vuex';// 引入vuex的state数据

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if(res.ret && res.data){
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      console.log(res);
    },
  },
  mounted () {
    this.lastCity = this.city; //加载时保存city
    this.getHomeInfo();
  },
  activated () { //路由的钩子函数,当页面重新被显示的时候执行
    if(this.lastCity != this.city){ //当两次城市不相同时发送ajax
    this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style>

</style>

