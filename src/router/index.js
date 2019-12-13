import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../pages/order.vue'
import Search from '../pages/search.vue'
import Profile from '../pages/profile.vue'
import Msite from '../pages/msite.vue'

Vue.use(VueRouter)
export default new VueRouter({
 //注册路由
 mode:'hash', 
  routes:[
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'',
      redirect:Msite
    }   
  ]
})