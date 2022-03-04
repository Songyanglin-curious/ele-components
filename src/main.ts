import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils'
import mUI from './components' //可以全局注册，也可以按需注册
// import mUI from '../lib/index.es' //可以全局注册，也可以按需注册
// import '../lib/style.css'
// 单独引入
// import chooseIcon from '../lib/chooseIcon/index.es'
// import  '../lib/chooseIcon/style.css'

import './mock'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
// el-icon-xxx
for (let i in Icons) {
  // 注册全部组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
