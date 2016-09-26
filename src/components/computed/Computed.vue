<template>
    <div>
      <h2> Posts list </h2>
      <div class="form-group">
        <input v-model="title" class="big-input" placeholder="Search ...">
      </div>

      <ol class="posts-box">
        <li v-for="post in filteredPosts">
            {{ post.title }}
        </li>
      </ol>
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

  .big-input {
    width: 200px;
    font-size: 20px;

  }

  .posts-box li{
    font-size: 18px;
  }
</style>
<script lang="babel">
    export default{

        data(){
            return{
              title:''
            }
        },

        vuex: {

            getters: {
              storedPosts : state => state.posts
            }

          },

        computed: {
          filteredPosts : function(){

            return this.storedPosts.filter( el => {
                return el.title.indexOf( this.title ) > -1;
            } );

          }
        }
    }
</script>
