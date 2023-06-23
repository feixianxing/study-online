import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-plus的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册element-plus的图标组件
for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)

app.mount('#app')
