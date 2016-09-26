<template>
  <div class="container">

    <div class="box parent">
      <h3>Parent component</h3>
      <p class="message">{{message}}</p>
      <button class="btn btn-default btn-bg" @click="sendEvent()">Send event though bus</button>
    </div>
    <child></child>
  </div>
</template>
<style>
  .box {
    width:200px;
    height: 200px;
    border: 1px solid #ececec;
    background: url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/pool_table.png") repeat;
  }

  .message {
    font-family: Cursive;
    color: #eeeeee;
    border: 1px solid yellow;
  }

  .parent {
    margin-left: 200px;
    margin-right: 100px;
    background: url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/pool_table.png") repeat;
  }
</style>
<script>
  import child from './Child.vue'
  import Bus from './Bus'

    export default{
        ready() {
          Bus.$on('helloParent', this.catch.bind(this));
        },
        data(){
            return{
              message: ''
            }
        },
        methods: {
          sendEvent() {
            Bus.$emit('hello', {name: 'Parent'});
          },
          catch(data) {
              this.message = 'Hello from ' + data.name;
          }
        },
        components:{
          child
        }
    }
</script>
