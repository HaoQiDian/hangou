
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppFind from '../components/find/Appfind.vue'
import AppType from '../components/type/AppType.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppShopCar from '../components/shopcar/AppShopCar.vue'
import AppLogin from '../components/login/AppLogin.vue'
import AppRegister from '../components/register/AppRegister.vue'
import AppDetail from '../components/detail/AppDetail.vue'
import AppSearch from '../components/search/AppSearch.vue'
const routes = [  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/find',name:'find',component:AppFind},
  {path:'/type',name:'type',component:AppType},
  {path:'/mine',name:'mine',component:AppMine},
  {path:'/shopcar',name:'shopcar',component:AppShopCar},
  {path:'/login',name:'login',component:AppLogin},
  {path:'/register',name:'register',component:AppRegister},
  {path:'/detail',name:'detail',component:AppDetail},
   {path:'/search',name:'search',component:AppSearch},
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,store
})
import store from '../vuex/store'
export default router