/* 
  路由相关配置
*/

import NProgress from 'Server/nprogress'

//  路由滚动行为
export function scrollBehavior(to, from, savePosition) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (savePosition) {
        return resolve(savePosition)
      } else {
        if (from.meta.scrollTop) {
          const top =
            document.documentElement.scrollTop || document.body.scrollTo
          resolve({ left: 0, top })
        }
        resolve({ left: 0, top: 0 })
      }
    }, 300)
  })
}

// 全局前置守卫
export function beforeEachFun() {
  NProgress.start()
  console.log('beforeEachFun')
}

// 全局后置钩子
export function afterEachFun() {
  NProgress.done()
  console.log('afterEachFun')
}
