<template>
  <section class="c-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script>
import { computed, setBlockTracking } from 'vue'

const saferGetter = getter => {
  return () => {
    setBlockTracking(-1)
    const res = getter()
    setBlockTracking(1)
    return res
  }
}
export default {
  name: 'CContainer',
  props: {
    direction: String
  },
  setup(props, { slots }) {
    const isVertical = computed(
      saferGetter(() => {
        if (props.direction === 'vertical') {
          return true
        } else if (props.direction === 'horizontal') {
          return false
        }

        return slots?.default().some(vnode => {
          const tag = vnode && vnode?.type?.name

          return tag === 'CHeader' || tag === 'CFooter'
        })
      })
    )

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
