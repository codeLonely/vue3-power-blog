<template>
  <div class="main">
    <el-button type="primary">Primary</el-button>
  </div>
  {{ userStore.doubleCountPlusOne }}
</template>
<script setup lang="ts">
import { useUserStore } from 'Src/stores/user'
const userStore = useUserStore()

userStore.$subscribe(() => {
  console.log('subscribe invoke')
  console.log(userStore.isAdmin)
})

userStore.$patch(state => {
  console.log('patch invoke')
  state.isAdmin = true
  state.userName = 'xxx'
})
console.log(userStore.isAdmin)
</script>
<style lang="scss" scoped>
.main {
  overflow-y: auto;
}
</style>
