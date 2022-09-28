/* 
    路由文件批量注册(同步)
*/
export function routesLoader(defaultRoutes = []) {
  let routes = defaultRoutes || []

  const files = import.meta.glob('Src/routes/*.js', { eager: true })

  for (const path in files) {
    const item: any = files[path]
    routes = routes.concat(item.default)
  }

  return routes
}
