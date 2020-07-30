<template>
  <div>
    <div>
      <h3>基本用法</h3>
      <p>
        <c-button>默认按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
      </p>
      <p>
        <c-button plain>朴素按钮</c-button>
        <c-button plain type="primary">默认按钮</c-button>
        <c-button plain type="success">成功按钮</c-button>
        <c-button plain type="info">信息按钮</c-button>
        <c-button plain type="warning">警告按钮</c-button>
        <c-button plain type="danger">危险按钮</c-button>
      </p>
      <p>
        <c-button round>圆角按钮</c-button>
        <c-button round type="primary">默认按钮</c-button>
        <c-button round type="success">成功按钮</c-button>
        <c-button round type="info">信息按钮</c-button>
        <c-button round type="warning">警告按钮</c-button>
        <c-button round type="danger">危险按钮</c-button>
      </p>
      <p>
        <c-button icon="search" circle />
        <c-button icon="settings" type="primary" circle />
        <c-button icon="seleted" type="success" circle />
        <c-button icon="return" type="info" circle />
        <c-button icon="clock" type="warning" circle />
        <c-button icon="delete" type="danger" circle />
      </p>
    </div>
    <div>
      <h3>禁用状态</h3>
      <p>
        <c-button disabled>默认按钮</c-button>
        <c-button disabled type="primary">主要按钮</c-button>
        <c-button disabled type="success">成功按钮</c-button>
        <c-button disabled type="info">信息按钮</c-button>
        <c-button disabled type="warning">警告按钮</c-button>
        <c-button disabled type="danger">危险按钮</c-button>
      </p>
      <p>
        <c-button disabled plain>朴素按钮</c-button>
        <c-button disabled plain type="primary">默认按钮</c-button>
        <c-button disabled plain type="success">成功按钮</c-button>
        <c-button disabled plain type="info">信息按钮</c-button>
        <c-button disabled plain type="warning">警告按钮</c-button>
        <c-button disabled plain type="danger">危险按钮</c-button>
      </p>
    </div>
    <div>
      <h3>文字按钮</h3>
      <p>
        <c-button type="text">文字按钮</c-button>
        <c-button disabled type="text">文字按钮</c-button>
      </p>
    </div>
    <div>
      <h3>图标按钮</h3>
      <p>
        <c-button icon="settings" type="primary" />
        <c-button icon="add" type="primary" />
        <c-button icon="data" type="primary" />
        <c-button icon="search" type="primary" />
        <c-button icon="search" type="primary">搜索</c-button>
        <c-button type="primary">
          搜索
          <c-icon name="search" />
        </c-button>
      </p>
    </div>
    <div>
      <h3>按钮组</h3>
      <c-button-group>
        <c-button icon="arrow-left" type="primary">上一页</c-button>
        <c-button type="primary"> 下一页 <c-icon name="arrow-right"/></c-button>
      </c-button-group>

      <c-button-group>
        <c-button icon="add" type="primary" />
        <c-button icon="data" type="primary" />
        <c-button icon="search" type="primary" />
      </c-button-group>
    </div>
    <div>
      <h3>加载中</h3>
      <c-button type="primary" loading>加载中</c-button>
    </div>
    <div>
      <h3>不同尺寸</h3>
      <p>
        <c-button>默认按钮</c-button>
        <c-button size="medium">中等按钮</c-button>
        <c-button size="small">小型按钮</c-button>
        <c-button size="mini">超小型按钮</c-button>
      </p>

      <p>
        <c-button round>默认按钮</c-button>
        <c-button round size="medium">中等按钮</c-button>
        <c-button round size="small">小型按钮</c-button>
        <c-button round size="mini">超小型按钮</c-button>
      </p>
    </div>
    <div>
      <h3>Block 按钮</h3>
      <c-row>
        <c-col :span="24"><c-button block>Block按钮</c-button></c-col>
      </c-row>
      <c-row>
        <c-col :span="12"><c-button block>Block按钮</c-button></c-col>
      </c-row>
      <c-row>
        <c-col :span="6"><c-button block>Block按钮</c-button></c-col>
      </c-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-button {
  margin: 0 8px;
}

.c-row {
  margin: 20px 0;
}
</style>
