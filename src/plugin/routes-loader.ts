/* 
    路由文件批量注册(同步)
*/
import type { RouteRecordRaw } from 'vue-router'

export function routesLoader(
  defaultRoutes: RouteRecordRaw[] = []
): Array<RouteRecordRaw> {
  let routes: RouteRecordRaw[] = defaultRoutes || []

  const files = import.meta.glob('Src/routes/*.js', { eager: true })

  for (const v in files) {
    const item: any = files[v]
    routes = routes.concat(item.default)
  }

  return routes
}
