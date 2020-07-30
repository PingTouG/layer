<template>
  <div class="user-layout">
    <aside class="user-layout__aside">
      <div class="user-layout__logo">Layer</div>
      <nav class="user-layout__nav">
        <x-menu
          :dataSource="menus"
          :default-path="activePath"
          @change="onMenuChange"
        />
      </nav>
    </aside>
    <main class="user-layout__main">
      <header class="user-layout__header">头部</header>
      <main class="user-layout__content">
        <router-view />
      </main>
    </main>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import XMenu from '@/components/XMenu'
import { getRenderMenu } from '@/router/routes'
import { ref } from 'vue'

export default {
  components: {
    XMenu
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const menus = getRenderMenu()

    const activePath = ref(route.name)

    const onMenuChange = name => router.push({ name })

    return {
      menus,
      activePath,
      onMenuChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.user-layout {
  display: flex;

  &__logo {
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: 700;
    padding: 0 12px;
  }

  &__aside {
    min-width: 200px;
    border-right: 1px solid $border-color-lv4;
  }

  &__header {
    // position: fixed;
    height: 60px;
    line-height: 60px;
    width: 100%;
    padding: 0 24px;
    background-color: $white-color;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  }

  &__main {
    flex: 1 0 auto;
  }

  &__content {
    overflow: auto;
    padding: 24px;
  }
}
</style>
