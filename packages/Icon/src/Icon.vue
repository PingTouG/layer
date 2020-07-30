<template>
  <i class="iconfont" :class="`icon-${name}`" />
</template>

<script>
export default {
  name: 'CIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss">
@import '../../assets/iconfont/iconfont.css';
</style>
