
require('./bootstrap');

import Vue from 'vue';
import Vuetify from "../plugins/vuetify";
import router from './routes';

Vue.component('index', require('./components/Index.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    router,
    el: '#app',
   
   
});
