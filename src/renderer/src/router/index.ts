import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import About from '../views/AboutPage.vue'
import My from '../views/myPage.vue'
import Setting from '../views/SettingPage.vue'
import Defau from '../views/Defau.vue'
import SignPage from '../views/SignPage.vue'
import SignTips from '../views/SignTips.vue'
const routes = [
  {path:'/',component:Defau},
  {path:'',component:Defau},
  { path: '/my', component: My },
  { path: '/find', component: Find },
  { path: '/about', component: About },
  { path: '/sign', component: SignPage },
  { path: '/setting', component: Setting },
  { path: '/signtips', component: SignTips }
]
export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
