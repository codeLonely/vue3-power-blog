/* 
  root实例
*/
import { createApp } from 'vue'

import routerInstance from 'Server/router-instance'

import piniaInstance from 'Server/pinia-instance'

// import ElementPlus from 'element-plus'

import App from 'Src/App.vue'

const app = createApp(App)

app.use(routerInstance).use(piniaInstance)

const mountApp = (el = '#app') => {
  app.mount(el)
}

export { app, mountApp }
