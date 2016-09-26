import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({

  state: {
    posts: [],

    user: {
      name: 'Eduard',
      age: 23
    }
  },

  mutations: {

    changeName( state, name ) {
      state.user.name = name;
    },

    setPosts( state, posts ) {
      state.posts = posts;
    },

    setAge( state, actualAge ) {
      state.age = actualAge;
    }

  }
})
