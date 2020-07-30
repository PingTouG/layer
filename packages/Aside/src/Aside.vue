<template>
  <aside class="c-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'CAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: auto;
}
</style>
