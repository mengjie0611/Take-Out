<template>
  <div class="footer-guide">
    <div class="guide-item ":class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search1"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
      <span>
         <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
     <span >
       <i  class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  methods: {
    goto(path){
      if(path!==this.$route.path){
        this.$router.replace(path)
      }
    }
  },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
 @import '../../common/stylus/mixins.styl'
  .footer-guide
    background white
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    .guide-item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color $green
      span
        margin-top 5px
        font-size 12px
        i
          font-size 22px
      
</style>
