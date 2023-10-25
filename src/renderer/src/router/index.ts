import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import Song from '../views/SongPage/index.vue'
import SongGeci from '../views/SongPage/GeciPage/index.vue'
import SongPinglun from '../views/SongPage/PinglunPage/index.vue'
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

//引入pinia
import pinia from '../store/index'

//引入usecancelRequestStore
import { useCancelRequestStore } from '../store/cancelRequestStore/index'

//cancelRequestStore
const cancelRequestStore = useCancelRequestStore(pinia);
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
  {
    path: '/song', component: Song,
    children: [
      {
        path:'geci',component:SongGeci
      },
      {
        path:'',component:SongGeci
      },
      {
        path:'pinglun',component:SongPinglun
      },

    ]
  },
  { path: '/about', component: About },
  { path: '/sign', component: SignPage },
  { path: '/setting', component: Setting },
  { path: '/signtips', component: SignTips }
]
 const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
 })

//拦截器
router.beforeEach(() => {
  cancelRequestStore.cancelReuquest()
  return true;
})
 export default router
