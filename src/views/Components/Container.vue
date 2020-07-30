<template>
  <div>
    <c-container>
      <c-header>Header</c-header>
      <c-main>Main</c-main>
    </c-container>
    <c-container>
      <c-header>Header</c-header>
      <c-main>Main</c-main>
      <c-footer>Footer</c-footer>
    </c-container>

    <c-container>
      <c-aside width="200px">Aside</c-aside>
      <c-main>Main</c-main>
    </c-container>

    <c-container>
      <c-header>Header</c-header>
      <c-container>
        <c-aside width="200px">Aside</c-aside>
        <c-main>Main</c-main>
      </c-container>
    </c-container>

    <c-container>
      <c-header>Header</c-header>
      <c-container>
        <c-aside width="200px">Aside</c-aside>
        <c-container>
          <c-main>Main</c-main>
          <c-footer>Footer</c-footer>
        </c-container>
      </c-container>
    </c-container>

    <c-container>
      <c-aside width="200px">Aside</c-aside>
      <c-container>
        <c-header>Header</c-header>
        <c-main>Main</c-main>
      </c-container>
    </c-container>
    <c-container>
      <c-aside width="200px">Aside</c-aside>
      <c-container>
        <c-header>Header</c-header>
        <c-main>Main</c-main>
        <c-footer>Footer</c-footer>
      </c-container>
    </c-container>
  </div>
</template>

<style>
.c-header,
.c-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.c-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.c-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
