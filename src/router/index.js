import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import MSite from '../pages/MSite/MSite.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
 //注册路由
 mode:'history', 
  routes:[
    {
      path:'/order',
      component:Order,
      meta:{isShow:true}
    },
    {
      path:'/search',
      component:Search,
      meta:{isShow:true}
    },
    {
      path:'/profile',
      component:Profile,
      meta:{isShow:true}
    },
    {
      path:'/msite',
      component:MSite,
      meta:{isShow:true}
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'',
      redirect:MSite
    }   
  ]
})