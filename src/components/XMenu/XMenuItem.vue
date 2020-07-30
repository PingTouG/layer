<template>
  <li
    class="x-menu-item"
    :class="{ 'x-menu-item--active': isActive }"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    path: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    activePath: {
      type: String
    }
  },
  setup(props, { emit }) {
    const isActive = computed(() => props.path === props.activePath)
    const handleClick = () => emit('change', props.path)

    return {
      isActive,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.x-menu-item {
  padding: 12px;

  &:hover {
    background-color: $primary-light;
    cursor: pointer;
  }

  &--active {
    color: $primary;
  }
}
</style>
