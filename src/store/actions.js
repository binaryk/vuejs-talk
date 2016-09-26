import Vue from 'vue'
import VueResource from 'vue-resource'



Vue.use(VueResource);

export const changeName = ( { dispatch }, name ) => {
  dispatch('changeName', name);
};


export const setPosts = ( {dispatch} ) => {
  Vue.http.get( 'https://jsonplaceholder.typicode.com/posts' ).then( (data) => {
      dispatch('setPosts', data.body);
  });
};
