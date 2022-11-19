import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    currentMenu: sessionStorage.getItem('current_menu') ? JSON.parse(sessionStorage.getItem('current_menu')) : null
  },
  getters: {
    getToken: state => {
      return state.token
    },
    getCurrentMenu: state => {
      return state.currentMenu
    }
  },
  mutations: {
    setCurrentMenu (state, v) {
      state.currentMenu = v
      sessionStorage.setItem('current_menu', JSON.stringify(v))
    },
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
