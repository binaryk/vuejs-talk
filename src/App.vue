<template>
  <div>
    <div id="app">
      <img class="logo" src="./assets/logo.png">
      <div class="navigation">
        <a class="link" v-link="'style'">Style</a>
        <a class="link" v-link="'vuex'">Vuex</a>
        <a class="link" v-link="'computed'">Computed</a>
        <a class="link" v-link="'async'">Async</a>
        <a class="link" v-link="'events'">Events</a>
        <a class="link" v-link="'attrs'">Attrs</a>
        <a class="link" v-link="'props'">Props</a>
      </div>
    </div>
    <div class="root-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="babel">
import store from './store/state'


export default {
  store : store
}

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import './assets/css/app.css';
</style>
