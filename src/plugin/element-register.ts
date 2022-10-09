import 'element-plus/dist/index.css'

import { App, Component } from 'vue'
import { ElButton } from 'element-plus'

const components = [ElButton]

export function registerElement(app: App) {
  components.forEach((component: Component) => {
    app.component(component.name, component)
  })
}
