/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

import store from './store'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('pokemon-filters', require('./components/PokemonFilters.vue').default);
Vue.component('pokemon-list', require('./components/PokemonList.vue').default);
Vue.component('pokemon-card', require('./components/PokemonCard.vue').default);
Vue.component('pokemon-profile', require('./components/PokemonProfile.vue').default);
Vue.component('pokemon-stat', require('./components/PokemonStat.vue').default);
Vue.component('curve', require('./components/Curve.vue').default);
Vue.component('input-custom', require('./components/Input.vue').default);
Vue.component('select-custom', require('./components/Select.vue').default);
Vue.component('loading', require('./components/Loading.vue').default);

/**
 * Filters
 */
Vue.filter('zeroLeft', function(value) {
    return value.toString().padStart(3, "0");
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
});