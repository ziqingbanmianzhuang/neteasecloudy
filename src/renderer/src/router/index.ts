import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import My from '../views/myPage.vue'
import Defau from '../views/Defau.vue'
import SignPage from '../views/SignPage.vue'
import SignTips from '../views/SignTips.vue'
const routes = [
  {path:'/',component:Defau},
  {path:'',component:Defau},
  { path: '/my', component: My },
  { path: '/find', component: Find },
  { path: '/sign', component: SignPage },
  { path: '/signtips', component: SignTips }
]
export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
