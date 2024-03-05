import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() // 从缓存中读取初始值
}
const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  removeToken() {
    // 删除Vue缓存
    state.token = null
    // 删除缓存token
    removeToken()
  }
}
const actions = {
  async login(context, data) {
    // todo: 调用登录接口,返回token
    const token = await login(data)
    context.commit('setToken', token)
  },
  logout() {
    state.token = null
    removeToken()
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions
}
