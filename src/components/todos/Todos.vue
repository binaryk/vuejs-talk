<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error modi, nam quod soluta suscipit tempore voluptatum. Aliquam, aperiam beatae blanditiis, ea eveniet inventore, magni odio pariatur possimus quae recusandae sit.
    <alert type="success" timeout="3000" v-if="showMe">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fuga minus quaerat sapiente! Accusamus aut deleniti distinctio dolore, inventore, iste itaque maxime neque omnis quam ratione, reprehenderit rerum sunt tempora.
    </alert>
    <button class="btn btn-default" @click="show">Clck</button>
  </div>
</template>

<style scoped>
</style>

<script>
  import Alert from '../common/alert.vue'

    export default {
        data(){
            return{
              showMe : false
            }
        },
        components:{
          alert: Alert
        },

      ready() {
        console.log('adasjdladhsajlk');
      },

      created() {
        console.log(this.$router);

      },

      methods: {
        show() {
          this.showMe = ! this.showMe;
        }
      },



      props: {
        name: {
          type: Number,
          validator: function (value) {
            return value > 10
          },
//          coerce :function(value) {
//            return value + 8
//          },
          default: 2
        }
      }
    }
</script>
