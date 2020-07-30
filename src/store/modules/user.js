import { login, setUserInfo } from '@/api/user'
import { setToken } from '@/api/token'

const state = {}

const getters = {}

const mutations = {}

const actions = {
  login(_ctx, payload) {
    return login(payload).then(({ userInfo, token }) => {
      setToken(token)
      setUserInfo(userInfo)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
