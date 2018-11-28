<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-img-content" :src="item.imgUrl">
        </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data(){
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '成都必游'
      },{
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '川剧变脸'},{
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png',
        desc: '去哪甄选'
      },{
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '滑雪'
      },{
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
        desc: '黑水彩林'
      },{
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      },{
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '成都熊猫基地'}
        ]
    }
  },
  computed: {
      pages(){
        const pages = [];
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index / 8);
          if(!pages[page]) {
              pages[page] = [];
          }
          pages[page].push(item);
        })
        return pages
      }
    },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/minxins.styl';
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1 rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      height: 0
      .icon-image
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44 rem
        box-sizing: border-box
        padding: .1 rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44 rem
        line-height: .44 rem
        text-align: center
        color: $darkTextColor
        ellipsis()

</style>
