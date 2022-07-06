import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

// Modules
import pokemons from './modules/pokemons'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
})

export default new Vuex.Store({
    modules: {
        pokemons
    },
    plugins: [vuexLocalStorage.plugin]
})