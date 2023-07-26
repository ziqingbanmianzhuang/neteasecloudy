import * as VueRouter from 'vue-router'
// 引入组件
import Find from '../views/findPage.vue'
import My from '../views/myPage.vue'
const routes = [
  { path: '/my', component: My },
  { path: '/find', component: Find }
]
export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
