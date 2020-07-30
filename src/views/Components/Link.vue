<template>
  <div>
    <div>
      <h3>基础用法</h3>
      <c-link>defalut</c-link>
      <c-link type="primary">primary</c-link>
      <c-link type="success">success</c-link>
      <c-link type="warning">warning</c-link>
      <c-link type="danger">danger</c-link>
      <c-link type="info">info</c-link>
    </div>
    <div>
      <h3>禁用状态</h3>
      <c-link disabled>默认链接</c-link>
      <c-link disabled type="primary">默认链接</c-link>
      <c-link disabled type="success">默认链接</c-link>
      <c-link disabled type="warning">默认链接</c-link>
      <c-link disabled type="danger">默认链接</c-link>
      <c-link disabled type="info">默认链接</c-link>
    </div>
    <div>
      <h3>下划线</h3>
      <c-link :underline="false">无下划线</c-link>
      <c-link>有下划线</c-link>
    </div>
    <div>
      <h3>下划线</h3>
      <c-link icon="search">搜索</c-link>
      <c-link>删除<c-icon name="delete"/></c-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-link {
  margin-right: 8px;
  font-size: 14px;
}
</style>
