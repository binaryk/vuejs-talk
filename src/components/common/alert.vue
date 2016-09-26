<template>
  <div>
    <div class="alert alert-{{type}} text-center animated"
         v-show="show"
         transition="bounce">
      <h3>
        <slot></slot>
      </h3>
    </div>
  </div>
</template>
<script lang="babel" type="text/babel">
  export default{
    props: {
      type: {default: 'success'},
      timeout:{default:3000},
      timeoutExpired:{
        default(){
          return ()=>{};
        }}
    },
    data(){
      return {
        show:true,
        transitionDuration:500
      }
    },
    methods:{
      waitForTransition(){
        setTimeout(()=>{
          this.timeoutExpired();
        },this.transitionDuration)
      },
      handleTimeout(){
        setTimeout(()=>{
          this.show=false;
          this.waitForTransition();
        },this.timeout-this.transitionDuration)
      }
    },
    ready(){
      if(this.timeout!=0){
        this.handleTimeout();
      }
    },

  }
</script>
