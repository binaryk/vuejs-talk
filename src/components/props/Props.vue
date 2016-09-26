<template>
    <div>
      <div class="parent">
        <h1>Parent component</h1>
        <h2 class="control-h2">
          A <input v-model="a" number>
        </h2>
        <h2 class="control-h2">
          B <input v-model="b" number>
        </h2>

        <h2 class="control-label">
          Reult: <span>{{result}}</span>
        </h2>
      </div>

      <div class="child">
        <h1>Child component</h1>
        <child
          :a.sync="a"
          :b.sync="b"
          :result.sync="result"
        ></child>
      </div>

    </div>
</template>
<script>
    import Child from './Child.vue'

    export default{
        data(){
            return{
              a: 0,
              b: 0,
              result: 0
            }
        },
        components:{
          child: Child
        }
    }
</script>
<style scoped>
  .parent, .child {
    margin-left: 200px;
    margin-right: 100px;
    margin-bottom:100px;
    background: transparent;
    border: 2px solid #333;

  }
</style>
