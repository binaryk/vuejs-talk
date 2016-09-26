<template>
    <div class="box">
      <h3>Child component</h3>
      <p class="message">{{message}}</p>
      <button class="btn btn-default btn-bg" @click="sendEvent()">Send event though bus</button>
    </div>
</template>
<style>
  .box {
    width:200px;
    height: 200px;
    border: 1px solid #ececec;
    float: left;
    color: #ffffff;
    font-weight:600;
    font-size: 20px;
  }
</style>
<script>
  import Bus from './Bus'

    export default{
        data(){
            return{
              message: ''
            }
        },
        ready: function() {
            Bus.$on('hello', this.catch.bind(this))
        },
        methods: {
          catch(data) {
              console.log('data');
              this.message = "Hello from " + data.name;
          },

          sendEvent() {
            Bus.$emit('helloParent', {name: 'Child'});
          }
        },
        components:{
        }
    }
</script>
