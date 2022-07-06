const axios = require('axios')

export default {

    get({ state }, payload) {
        return new Promise((resolve, reject) => {
            if (state.pokemons.length) {
                return resolve(state.pokemons)
            }

            axios.get('https://pokeapi.co/api/v2/pokemon', { params: payload })
                .then(async(response) => {
                    await Promise.all(response.data.results.map(async(pokemon) => {
                        return await this.dispatch('pokemons/pokemonData', pokemon.name)
                    }))
                    console.log('[POKEMONS] Loading completed!')
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    pokemonData({ commit }, name) {
        return new Promise((resolve, reject) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(response => {
                    commit('PUSH_POKEMON', {
                        id: response.data.id,
                        name: response.data.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`,
                        types: response.data.types.map(type => {
                            return type.type.name
                        }),
                        stats: response.data.stats.map(stat => {
                            return { name: stat.stat.name, value: stat.base_stat }
                        })
                    })
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    show({ commit }, name) {
        return new Promise((resolve, reject) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(async(response) => {
                    const pokemon = {
                        id: response.data.id,
                        name: response.data.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`,
                        types: response.data.types.map(type => {
                            return type.type.name
                        }),
                        stats: response.data.stats.map(stat => {
                            return { name: stat.stat.name, value: stat.base_stat }
                        })
                    }

                    // If it successfully loaded the pokemon, it will call the endpoint to fetch the description.
                    await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
                        .then(response2 => {
                            pokemon.description = response2.data.flavor_text_entries[0].flavor_text

                            commit('SET_CURRENT', pokemon)
                        })

                    console.log(`[POKEMON] Loading ${(name.charAt(0).toUpperCase() + name.slice(1))} completed!`)
                    resolve(pokemon)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}