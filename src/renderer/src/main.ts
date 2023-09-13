// import devtools from '@vue/devtools'
// if (process.env.NODE_ENV === 'development') {
//   devtools.connect('192.168.1.2', '8098')
// }
import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

// 引入router
import router from './router'
// 创建pinia实例(根)并传递给应用
const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')
