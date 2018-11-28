<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data(){
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
        title: '成都欢乐谷',
        desc: '超级旋转过山车刺激到让你怀疑人生'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
        title: '成都熊猫基地',
        desc: '看!熊猫宝宝在向你招手'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
        title: '青城山',
        desc: '青城山下白素贞,洞中千年修此'
      },]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/minxins.styl';
  .title
    margin-top: .2 rem
    line-height: .8 rem
    background: #ccc
    text-align: .2 rem
  .item
    overflow: hidden
    display: flex
    height: 1.9 rem
    .item-img
      width: 1.7 rem
      height: 1.7 rem
      padding: .1 rem
    .item-info
      flex: 1
      padding: .1 rem
      min-width: 0
      .item-title
        line-height: .54 rem
        font-size: .32 rem
        ellipsis()
      .item-desc
        line-height: .4 rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44 rem
        margin-top: .16 rem
        background: #ff9300
        padding: 0 .2 rem
        border-radius: .06 rem
        color: #fff
</style>
