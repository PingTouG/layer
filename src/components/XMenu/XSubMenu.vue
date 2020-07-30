<template>
  <div class="x-submenu">
    <div
      class="x-submenu__title"
      :class="{ 'x-submenu__title--active': isActive }"
      @click="handleMenuItemTrigger"
    >
      <slot name="title" />
      <c-icon name="arrow-up" v-show="open" />
      <c-icon name="arrow-down" v-show="!open" />
    </div>
    <div class="x-submenu__container" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'XSubmenu',
  props: {
    children: {
      type: Array,
      default: () => []
    },
    activePath: {
      type: String
    }
  },
  setup(props) {
    const isActive = computed(
      () => props.children.findIndex(item => item === props.activePath) > -1
    )

    const open = ref(isActive.value)

    const handleMenuItemTrigger = () => {
      open.value = !open.value
    }

    return {
      open,
      isActive,
      handleMenuItemTrigger
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.x-submenu {
  &__title {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: $primary-light;
      cursor: pointer;
    }

    &--active {
      color: $primary;
      background-color: $primary-light;
    }
  }

  & ::v-deep .x-menu-item {
    padding-left: 24px;
  }
}
</style>
