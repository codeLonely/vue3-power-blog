/* 
  路由实例
*/
import {
  type Router,
  type RouteRecordRaw,
  createRouter,
  createWebHistory
} from 'vue-router'

import { routesLoader } from 'Plugin/routes-loader'

import {
  scrollBehavior,
  beforeEachFun,
  afterEachFun
} from 'Config/router-interceptor'

const routes: Array<RouteRecordRaw> = routesLoader()

const routerInstance: Router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior
})

routerInstance.beforeEach(beforeEachFun)

routerInstance.afterEach(afterEachFun)

export default routerInstance
