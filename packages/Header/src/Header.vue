<template>
  <header class="c-header" :style="{ height }">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
