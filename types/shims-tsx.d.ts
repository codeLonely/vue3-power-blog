/* 
  允许使用.tsx文件
*/
import Vue, { VNode } from 'vue'

declare module '*.tsx' {
  import Vue from 'compatible-vue'
  export default Vue
}

declare global {
  namespace JSX {
    type Element = VNode
    type ElementClass = Vue
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
