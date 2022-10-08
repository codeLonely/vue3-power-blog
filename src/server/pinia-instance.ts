import { createPinia } from 'pinia'

const piniaInstance = createPinia()

piniaInstance.use(({ store }) => {
  // state 状态改变时执行
  store.$subscribe(() => {
    console.log('state change')
  })

  // 调用action时执行
  store.$onAction(() => {
    console.log('action invoke')
  })
})

export default piniaInstance
