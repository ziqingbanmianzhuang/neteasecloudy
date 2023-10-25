// import devtools from '@vue/devtools'
// if (process.env.NODE_ENV === 'development') {
//   devtools.connect('192.168.1.2', '8098')
// }
import { createApp } from 'vue'
import pinia from './store/index'
import App from './App.vue'
import messageToast from './global_components/messageToast/index.vue'
import loadToast from './global_components/loadToast/index.vue'
import errorPlaceholder from './global_components/errorPlaceholder/index.vue'
import emptyPlaceholder from './global_components/emptyPlaceholder/index.vue'

// 引入全局字体配置文件
import loadBackFonts from './assets/fonts/font.js'
loadBackFonts();

// 引入router
import router from './router'

//创建app
const app = createApp(App);

//全局注册messageToast组件
app.component('messageToast', messageToast);
app.component('loadToast', loadToast);
app.component('errorPlaceholder', errorPlaceholder);
app.component('emptyPlaceholder', emptyPlaceholder);

app.use(router).use(pinia);
app.mount('#app');
