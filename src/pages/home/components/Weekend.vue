<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
          </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data(){
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
        title: '远离烧烤模式',
        desc: '周末还在搓麻将?快出来赏美景'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
        title: '成都熊猫摩崖石刻造基地',
        desc: '来乐山，就要看乐山大佛'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
        title: '有温泉就是任性',
        desc: '一年四季，成都人的慢生活就是这么悠哉'
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
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1 rem
    .item-title
      line-height: .54 rem
      font-size: .32 rem
      ellipsis()
    .item-desc
      line-height: .4 rem
      color: #ccc
      ellipsis()
</style>
