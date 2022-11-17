import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token')
  },
  getters: {
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    setToken (state, v) {
      state.token = v
      sessionStorage.setItem('token', v)
    }
  },
  actions: {
  },
  modules: {
  }
})
