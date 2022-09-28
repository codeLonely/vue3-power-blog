import { createApp } from 'vue'
import routerInstance from 'Server/router-instance'

import App from 'Src/App.vue'

const app = createApp(App)

app.use(routerInstance)

export const mountApp = (el = '#app') => {
  app.mount(el)
}
