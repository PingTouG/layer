<template>
  <footer class="c-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'CFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-footer {
  box-sizing: border-box;
  padding: 0 20px;
  flex-shrink: 0;
}
</style>
