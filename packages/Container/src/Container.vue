<template>
  <section class="c-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'CContainer',
  props: {
    direction: String
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }

      return slots?.default().some(vnode => {
        const tag = vnode['type'] && vnode['type']['name']

        return tag === 'CHeader' || tag === 'CFooter'
      })
    })

    return {
      isVertical
    }
  }
}
</script>

<style lang="scss" scoped>
.c-container {
  display: flex;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  &.is-vertical {
    flex-direction: column;
  }
}
</style>
