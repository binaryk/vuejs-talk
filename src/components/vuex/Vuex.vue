<template>
  <div class="hello">
      <div class="col-md-12">
        <h1> Name: {{ storedUser.name }} | Age : {{ storedUser.age }}</h1>
        <input v-model="name" class="input-big"/>
        <button @click="changeName" class="btn btn-xs btn-default btn-big">Change name</button>
        <button @click="explanation = !explanation" class="btn btn-xs btn-default btn-big">Toggle explanation </button>

      </div>
    <hr>

    <div class="col-md-12 animated" v-if="explanation" transition="bounce">
      <img src="https://vuejs.org/images/state.png" width="600">
    </div>

      <div class="col-md-12 top-off animated" v-if="! explanation" transition="bounce">
          <button @click="setPostsAction" class="btn btn-xs btn-default pull-left btn-big">Get posts</button>
          <ul class="posts-box">
            <li v-for="post in storedPosts">
              {{ post.title }}
            </li>
          </ul>
    </div>


  </div>
</template>

<style>
  .posts-box {
    height: 400px;
    overflow-y: auto;
  }

  .top-off {
    margin-top: 20px;
  }

  .btn-big {
    width: 200px;
    height: 50px;
    border-radius: 0;
    font-size: 22px;
    font-weight: 400;
  }

  .input-big {
    margin-bottom: -10px;
    width: 200px;
    height:40px;
    font-size: 22px;
  }
</style>


<script type="text/babel" lang="babel">
  import {changeName, setPosts} from '../../store/actions'

  export default {

    vuex: {

      actions: {

        changeStoreName : changeName,
        setPosts        : setPosts

      },

      getters: {
        storedUser : state => state.user,
        storedPosts : state => state.posts
      }

    },

    data () {
      return {
        name: '',
        explanation: true
      }
    },

    methods: {
      changeName() {
        this.changeStoreName(this.name);
        this.name='';
      },

      setPostsAction() {
        this.setPosts();
        console.log('store', this.$store.state);

      }
    }

  }
</script>
