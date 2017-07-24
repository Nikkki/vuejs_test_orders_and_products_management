import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router/index';
import {store} from './store/store';






new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
  // components:{
  //   'icon': Icon
  // }
})

//Vue.component('icon', Icon);

