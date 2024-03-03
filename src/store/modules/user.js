import {getToken, setToken, removeToken} from '@/utils/auth'

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
  // 登录
  login(context, data) {
    // todo 调用登录接口
    // 返回一个token
    context.commit('setToken', '123456')
  },
  // 退出
  logout() {
    removeToken()
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions
}
