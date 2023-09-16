import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import About from '../views/AboutPage.vue'
import My from '../views/MyPage/inde.vue'
import LisContentIndex from '../views/MyPage/LisContentPage/index.vue'
import LisContentMyLis from '../views/MyPage/LisContentPage/MylisPage.vue'
import MyMessage from '../views/MyMessage/index.vue'
import ChatPage from '../views/MyMessage/ChatPage/index.vue'
import Setting from '../views/SettingPage.vue'
import Defau from '../views/Defau.vue'
import SignPage from '../views/SignPage.vue'
import SignTips from '../views/SignTips.vue'
const routes = [
  {path:'/',component:Defau},
  {path:'',component:Defau},
  {
    path: '/my', component: My,
    children: [
      {path:'index',component:LisContentIndex},
      {path:'',component:LisContentIndex},
      {path:'mylis',component:LisContentMyLis},
    ]
  },
  {
    path: '/message', component: MyMessage,
    children: [
      {
        path: 'chat',
        component:ChatPage
      }
    ]
  },
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
