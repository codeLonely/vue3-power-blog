import { createRouter, createWebHistory } from 'vue-router'

import { routesLoader } from 'Plugin/routes-loader'

const routes = routesLoader()

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
})

export default routerInstance
