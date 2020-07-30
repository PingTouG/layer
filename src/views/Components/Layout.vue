<template>
  <div>
    <h3>基础布局</h3>
    <c-row>
      <c-col :span="24"><div class="grid-content bg-purple-dark"></div></c-col>
    </c-row>
    <c-row>
      <c-col :span="12"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="12"><div class="grid-content bg-purple-light"></div></c-col>
    </c-row>
    <c-row>
      <c-col :span="8"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="8"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="8"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
    </c-row>
    <c-row>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple-light"></div></c-col>
    </c-row>
    <h3>分栏间隔</h3>
    <c-row :gutter="20">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <h3>混合操作</h3>
    <c-row :gutter="20">
      <c-col :span="16"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="8"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="8"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="8"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="16"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="4"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <h3>分栏偏移</h3>
    <c-row :gutter="20">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></c-col>
      <c-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="12" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6" :push="6"
        ><div class="grid-content bg-purple"></div
      ></c-col>
    </c-row>
    <c-row :gutter="20">
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="12" :pull="4"
        ><div class="grid-content bg-purple"></div
      ></c-col>
    </c-row>
    <c-row type="flex" class="row-bg">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" justify="center">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" justify="end">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" justify="space-between">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" justify="space-around">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple-light"></div></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <h3>对齐方式</h3>
    <c-row type="flex" class="row-bg" align="top">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"
        ><div class="grid-content bg-purple-light" style="height: 100px;"></div
      ></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" align="middle">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"
        ><div class="grid-content bg-purple-light" style="height: 100px;"></div
      ></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
    <c-row type="flex" class="row-bg" align="bottom">
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
      <c-col :span="6"
        ><div class="grid-content bg-purple-light" style="height: 100px;"></div
      ></c-col>
      <c-col :span="6"><div class="grid-content bg-purple"></div></c-col>
    </c-row>
  </div>
</template>

<style lang="scss" scoped>
.c-row {
  margin-bottom: 20px;
}

.c-row:last-child {
  margin-bottom: 0;
}

.c-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
