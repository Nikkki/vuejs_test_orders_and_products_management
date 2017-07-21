import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})



