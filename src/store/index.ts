import { createStore } from 'vuex'

const store = createStore({
  state: {
      counter: 0
  },
  getters: {
    count: state => {
      return state.counter;
    }
  }
})

export default store;
