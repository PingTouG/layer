<template>
  <div class="login-page">
    <div class="login-page__container">
      <h3 class="login-page__logo">Layer</h3>
      <form class="x-form" @submit.prevent="login">
        <div class="x-form-item">
          <label class="x-form-item-label" for="username">账号：</label>
          <c-input
            id="username"
            name="username"
            type="text"
            placeholder="请输入账号"
            v-model="form.username"
            clearable
          />
        </div>
        <div class="x-form-item">
          <label class="x-form-item-label" for="password">密码：</label>
          <c-input
            id="password"
            name="password"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            clearable
            show-password
          />
        </div>
        <div class="x-form-item form__footer">
          <c-button type="primary" native-type="submit" :loading="loading">
            登录
          </c-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { userHooks } from '@/hooks'
const { useLogin } = userHooks

export default {
  setup() {
    const form = { username: '', password: '' }
    const state = useLogin(form)

    return state
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;

  &__logo {
    font-size: 20px;
    font-weight: 700;
  }

  &__container {
    box-sizing: border-box;
    width: 400px;
    height: 100vh;
    margin: 0 auto;
    padding-top: 200px;
    text-align: center;
  }

  .form__footer {
    justify-content: center;
  }
}
</style>
