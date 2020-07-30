<template>
  <div class="message-demo-page">
    <h3>点击查看Message</h3>
    <button class="x-button" @click="handleOpen('default')">默认Message</button>
    <button class="x-button" @click="handleOpen('info')">信息</button>
    <button class="x-button" x-type="success" @click="handleOpen('success')">
      成功
    </button>
    <button class="x-button" x-type="warning" @click="handleOpen('warning')">
      警告
    </button>
    <button class="x-button" x-type="error" @click="handleOpen('error')">
      错误
    </button>
  </div>
</template>

<script>
import useMessage from '@/components/XMessage'
export default {
  setup() {
    const { open } = useMessage()

    const options = {
      default: '这是默认Message',
      info: {
        type: 'info',
        message: '这是信息Message'
      },
      success: {
        type: 'success',
        message: '这是成功Message'
      },
      warning: {
        type: 'warning',
        message: '这是警告Message'
      },
      error: {
        type: 'error',
        message: '这是错误Message'
      }
    }
    const handleOpen = type => {
      open(options[type])
    }

    return {
      handleOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.x-button {
  margin: 12px;
}
</style>
