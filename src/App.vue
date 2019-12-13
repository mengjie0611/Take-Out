<template>
<div>
    <header></header>
    <main></main>
    <footer>
    <router-link :class= '{active:hasA}' class= 'nav' to="/msite">
    <div class='iconfont'>&#xe601;首页</div>
      </router-link>
    <router-link :class= '{active:hasA}' class= 'nav' to="/search">
    <div class='iconfont'>&#xe604;搜索</div>
    </router-link>
    <router-link :class= '{active:hasA}' class= 'nav' to="/order">
    <div class='iconfont'>&#xe60a;订单</div>
    </router-link>
    <router-link :class= '{active:hasA}' class= 'nav' to="/profile">
    <div class='iconfont'>&#xe600;我的</div>
    </router-link>
    <router-view></router-view>
  </footer>
</div>
</template>

<script type="text/ecmascript-6">
import './common/stylus/mixins.styl'
  export default {
    data() {
      return {
        hasA:false
      }
    },
    methods: {
     
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
header 
      width 100%
      height 50px
      background-color skyblue
main
     width 100%
     height 500px
     background-color green
footer
     display flex
     position absolute
     bottom 0
     width 100%
     height 100px
     line-height 100px
     text-align center
     .nav
           color black
           width 25%
     .active
           color blue
           background-color yellow   
           
</style>
