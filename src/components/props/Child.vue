<template>
    <div>

      <h2>Child component accept props: </h2>
        <ol>
          <li>
            A: Type Number | Validator > 0 | Coerce (injected value) + 0 | Default 0
          </li>
          <li>
            B: Type Number | Default 0
          </li>
          <li>
            Result: Default 0
          </li>
        </ol>
      <h2>Sync result from computed : {{ calc }}</h2>

    </div>
</template>
<style>
</style>
<script type="babel">
    export default{
        data(){
            return{
            }
        },
        props: {
          a: {
            type: Number,
              validator: function(value) {
                return value >= 0
              },
              coerce :function(value) {
                return value + 0
              },
            default: 2
          },

          b: {
            type: Number,
            default: 0
          },
          result : {
            default: 0
          }
        },

        computed: {
          calc() {
            return this.result = this.a + this.b;
          }
        }

    }
</script>
