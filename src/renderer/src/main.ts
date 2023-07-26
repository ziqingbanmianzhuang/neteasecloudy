// import devtools from '@vue/devtools'
// if (process.env.NODE_ENV === 'development') {
//   devtools.connect('192.168.1.2', '8098')
// }
import { createApp } from 'vue'
import App from './App.vue'

// 引入router
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
