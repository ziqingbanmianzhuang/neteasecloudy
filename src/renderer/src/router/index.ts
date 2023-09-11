import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import My from '../views/myPage.vue'
import Defau from '../views/Defau.vue'
const routes = [
  {path:'/',component:Defau},
  {path:'',component:Defau},
  { path: '/my', component: My },
  { path: '/find', component: Find }
]
export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
