import { createStore } from 'vuex'

export default createStore({
  state: {
    // you can do better with Ref
    body: document.querySelector('body')
  },
  getters: {},
  mutations: {
    setScrollBody (state) {
      if (state.body) state.body.classList.toggle('no-scroll')
    }
  },
  actions: {
  },
  modules: {
  }
})
