import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userName: '',
      isAdmin: false,
      count: 1
    }
  },
  getters: {
    doubleCount: state => state.count + 1,
    doubleCountPlusOne(): number {
      return this.doubleCount + 1
    }
  }
})

export { useUserStore }
