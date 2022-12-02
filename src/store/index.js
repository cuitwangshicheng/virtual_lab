import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    userType: sessionStorage.getItem('userType'),
    currentMenu: sessionStorage.getItem('current_menu') ? JSON.parse(sessionStorage.getItem('current_menu')) : null,
    fullScreenState: false
  },
  getters: {
    getUserType: state => {
      return state.userType
    },
    getToken: state => {
      return state.token
    },
    getCurrentMenu: state => {
      return state.currentMenu
    },
    getFullscreenState: state => {
      return state.fullScreenState
    }
  },
  mutations: {
    setUserType (state, v) {
      state.userType = v
      sessionStorage.setItem('userType', v)
    },
    setCurrentMenu (state, v) {
      state.currentMenu = v
      sessionStorage.setItem('current_menu', JSON.stringify(v))
    },
    setToken (state, v) {
      state.token = v
      sessionStorage.setItem('token', v)
    },
    setFullscreenState (state, v) {
      state.fullScreenState = v
    }
  },
  actions: {
  },
  modules: {
  }
})
