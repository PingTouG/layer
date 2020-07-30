import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import userMessage from '@/components/XMessage'
import { isEmpty } from 'validator'

export default {
  useLogin(data, validator) {
    const store = useStore()
    const router = useRouter()
    const message = userMessage()
    const defaultForm = {
      username: '',
      password: ''
    }
    const defaultValidator = () => {
      Object.keys(form).forEach(key => {
        if (isEmpty(form[key])) {
          throw new Error(`${key} 必填`)
        }
      })
    }

    const form = reactive(data ?? defaultForm)
    const loading = ref(false)

    // 登录
    const login = async () => {
      try {
        const before = validator ?? defaultValidator
        before()
        loading.value = true
        await store.dispatch('login', form)
        router.push({ name: 'Home' })
      } catch (error) {
        message.open({
          type: 'error',
          message: error.message
        })
        loading.value = false
      }
    }

    return {
      form,
      loading,
      login
    }
  }
}
