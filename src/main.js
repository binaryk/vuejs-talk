import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Style from './components/style/Style.vue'
import Vuex from './components/vuex/Vuex.vue'
import Computed from './components/computed/Computed.vue'
import Events from './components/events/Events.vue'
import Attrs from './components/attrs/Attrs.vue'
import Props from './components/props/Props.vue'
import Router from 'vue-router'

Vue.use(Router);


const router =  new Router({
  history: true,
  saveScrollPosition: true
});

router.map({

  '/' : {
    name: 'home',
    component: Hello
  },

  '/style' : {
    name: 'style',
    component: Style
  },

  '/vuex' : {
    name: 'vuex',
    component: Vuex
  },

  '/async' : {
    name: 'async',
    component: resolve => require(['./components/async/Async.vue'], resolve)
  },

  '/computed' : {
    name: 'computed',
    component: Computed
  },

  '/events' : {
    name: 'events',
    component: Events
  },

  '/attrs' : {
    name: 'attrs',
    component: Attrs
  },

  '/props' : {
    name: 'props',
    component: Props
  }

});

router.start(App, '#mount');
