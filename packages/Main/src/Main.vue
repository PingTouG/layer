<template>
  <main class="c-main">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'CMain'
}
</script>

<style lang="scss" scoped>
.c-main {
  overflow: auto;
  display: block;
  flex: 1;
  flex-basis: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
