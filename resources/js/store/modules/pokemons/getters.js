export default {
    types: state => state.types,
    list: state => state.pokemons ? state.pokemons.sort((a, b) => a.id - b.id) : [],
    current: state => state.current
}