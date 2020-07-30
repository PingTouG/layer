<template>
  <div class="page">
    <div>
      <h3>基础用法</h3>
      <p>
        <c-input type="text" placeholder="请输入内容" />
      </p>
    </div>
    <div>
      <h3>禁用状态</h3>
      <p>
        <c-input type="text" placeholder="请输入内容" disabled />
      </p>
    </div>
    <div>
      <h3>可清空</h3>
      <p>
        <c-input type="text" placeholder="请输入内容" clearable />
      </p>
    </div>
    <div>
      <h3>密码框</h3>
      <p>
        <c-input type="password" placeholder="请输入内容" />
      </p>
    </div>
    <div>
      <h3>带icon的输入框</h3>
      <p>
        <c-input placeholder="请输入内容" prefix-icon="search" />
      </p>
      <p>
        <c-input placeholder="请输入内容" suffix-icon="clock" />
      </p>
    </div>
    <div>
      <h3>文本域</h3>
      <p class="info">
        maxlength 和 minlength
        是原生属性，用来限制输入框的字符长度，其中字符长度是用Javascript的字符串长度统计的。对于类型为text或textarea的输入框，在使用maxlength属性限制最大输入长度的同时，可通过设置show-word-limit属性来展示字数统计
      </p>
      <div>
        <c-input type="textarea" placeholder="请输入内容" />
      </div>
    </div>
    <div>
      <h3>输入长度限制</h3>
      <p>
        <c-input placeholder="请输入内容" :maxlength="100" show-word-limit />
      </p>
      <p>
        <c-input
          type="textarea"
          placeholder="请输入内容"
          :maxlength="100"
          show-word-limit
        />
      </p>
    </div>
    <div>
      <h3>尺寸</h3>
      <p>
        <c-input placeholder="请输入内容" />
      </p>
      <p>
        <c-input placeholder="请输入内容" size="medium" />
      </p>
      <p>
        <c-input placeholder="请输入内容" size="small" />
      </p>
      <p>
        <c-input placeholder="请输入内容" size="mini" />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.page {
  width: 50%;
}

.info {
  background-color: $border-color-lv3;
  color: $info;
  padding: 12px;
}
</style>
