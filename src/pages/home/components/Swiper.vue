<template>
<div class="wrapper">
  <swiper :options="swiperOption"  >
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <!--在组件中使用:src进行绑定-->
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data (){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
      }
      ,swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
        },
        {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/e5/fc2bfc8bfcccd402.jpg_750x200_1218ab5f.jpg'
      }]
    }
  },
}
</script>

<!--padding-bottom相对于width撑开31.25%-->
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 26.7%
  .swiper-img
    width: 100%
</style>
