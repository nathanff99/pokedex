import Vue from 'vue';

export default {
    PUSH_POKEMON(state, payload) {
        const exists = state.pokemons.find(pokemon => pokemon.id === payload.id)
        if (!exists) {
            state.pokemons.push(payload)
        }
    },
    SET_CURRENT(state, payload) {
        state.current = payload
    },
}