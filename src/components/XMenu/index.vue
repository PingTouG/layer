<template>
  <div class="x-menu">
    <template v-for="menu in dataSource">
      <x-submenu
        v-if="menu.children"
        :key="menu.path"
        :children="menu.children.map(item => item.path)"
        :active-path="active"
      >
        <template v-slot:title>{{ menu.text }}</template>
        <x-menu-item
          v-for="child in menu.children"
          :key="child.path"
          :path="child.path"
          :active-path="active"
          @change="onPathChange"
        >
          {{ child.text }}
        </x-menu-item>
      </x-submenu>
      <x-menu-item
        :key="menu.path"
        :path="menu.path"
        :active-path="active"
        @change="onPathChange"
        v-else
      >
        {{ menu.text }}
      </x-menu-item>
    </template>
  </div>
</template>

<script>
import XMenuItem from './XMenuItem'
import XSubmenu from './XSubMenu'
import { ref } from 'vue'
export default {
  components: {
    XMenuItem,
    XSubmenu
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    defaultPath: {
      type: String
    }
  },
  setup(props, { emit }) {
    const active = ref(props.defaultPath)

    const onPathChange = value => {
      active.value = value
      emit('change', value)
    }

    return {
      active,
      onPathChange
    }
  }
}
</script>

<style lang="scss" scoped>
.x-menu {
  display: block;
  padding: 0;
  list-style: none;
}
</style>
