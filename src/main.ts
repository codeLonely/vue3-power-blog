import { mountApp, app } from 'Server/root-instance'
import { registerElement } from 'Plugin/element-register'

//注册elemnet-plus
registerElement(app)

// 挂载app
mountApp('#app')
