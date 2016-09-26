<template>
  <div class="hello">
    <h1> {{ storeName }} </h1>
    <input v-model="name"/>
    <p v-if="name.length > 0" class="animated" transition="bounce">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem cupiditate dicta dolorem esse fugit illo vel? Consequuntur ducimus error explicabo libero odit. Accusantium eligendi fugit ipsum iure officiis tempore?</p>
    <button @click="changeName">Change</button>


    <hr>

    <todos :name="numberVar"></todos>
  </div>
</template>

<style>
</style>


<script type="text/babel" lang="babel">
import Todos from './todos/Todos.vue';
import {changeName, setUsers} from '../store/actions'
import Bus from './Bus';

export default {

  vuex: {

    actions: {

      changeStoreName : changeName,
      setUsers

    },

    getters: {
      storeName : state => state.user.name
    }

  },

  created() {
    this.setUsers();
    console.log('store', this.$store);

    Bus.$emit('test', {user : 'Edu'});


  },

  data () {
    return {

      numberVar: 1,

      name: ''

    }
  },

  methods: {
    changeName() {
        this.changeStoreName(this.name);

//      this.$store.dispatch('changeName',this.name);

    }
  },

  components : {
    todos : Todos
  }
}
</script>
