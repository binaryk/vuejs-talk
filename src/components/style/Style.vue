<template>
    <div>
      <div class="row">
        <div class="col-md-6 first">
            <p class="text">
              Some Sass | scoped | styling code:

            </p>
            <pre>
              <code class="html">
             $color : #777;
              </code>
            </pre>
        </div>
        <div class="col-md-6 second">
          <p class="text">
            Some Less | scoped | styling code:
          </p>
            <pre>
              <code class="html">
              @color : #3bce93;
              </code>
          </pre>
        </div>


        <div class="row">
          <h3><label class="control-label" for="show">Show transition effect</label>          <input type="checkbox" id="show" v-model="show">
          </h3>
        </div>
        <div class="col-md-12 top-offset">
          <p class="text animated" transition="bounce" v-show="show">
            Transition with <i><a href="https://daneden.github.io/animate.css/" target="blanc">animate.css</a></i> library.
          </p>
        </div>
      </div>
    </div>
</template>
<style scoped>
  @import '../../assets/css/animate.css';
  .text {
    font-size: 24px;
    font-weight: bold;
  }

  .top-offset {
    margin-top: 20px;
  }

  .animated {
    background: url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/paven.png");
  }
</style>
<style lang="scss" scoped>
    $color : #777;
    $bg    : url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/green_dust_scratch.png") repeat;

    .first {
      background: $bg;
      .text {
        font-weight: 600;
        color: $color;
      }
    }

</style>
<style lang="less" scoped>
  @color : #3bce93;
  @bg    : url("http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/footer_lodyas.png") repeat;

  .second {
    background: @bg;
    .text {
        color: @color;
    }
  }
</style>
<script>
    import Vue from 'vue'

    Vue.transition('bounce', {
      enterClass: 'bounceInLeft',
      leaveClass: 'rotateOutDownRight'
    });


    export default{
        data(){
            return{
              show: false
            }
        }
    }
</script>
