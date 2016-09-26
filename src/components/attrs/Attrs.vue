<template>
    <div class="container">
      <div class="form-group">
        <h2>
          <label class="control-label">Type class</label>
          <input class="control-form" v-model="class">
        </h2>
      </div>
      <div class="form-group">
        <h2>
          <label for="sure" class="control-label">Apply class ?</label>
          <input type="checkbox" v-model="sure" id="sure" />
        </h2>
      </div>
    </div>

  <div class="form-group alert" v-bind:class="[ sure ? class : '' ]">
    <h1 >Apply class here</h1>
  </div>
</template>
<style scoped>
  .container {
    margin-bottom: 50px;
  }
</style>
<script>
    export default{
        data(){
            return{
              class: '',
              sure: false
            }
        }
    }
</script>
