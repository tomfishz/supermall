<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'


import {getHomeMultidata} from 'network/home'
import RecommendView from './childComps/RecommendView.vue'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata()
    .then((result) => {
      this.banners = result.data.data.banner.list
      this.recommends = result.data.data.recommend.list
    })
    .catch((err) => {

    })
  },
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
