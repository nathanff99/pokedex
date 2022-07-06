<template>
  <div class="col-12 col-tablet-6 col-desktop-3">
    <div
      class="pokemon"
      :style="`background-color: ${types[pokemon.types[0]]}`"
      @click="open(pokemon.name)"
    >
      <div class="header">
        <span>#{{ pokemon.id | zeroLeft }}</span>
      </div>
      <div class="content">
        <div
          class="name"
          :style="`color: ${types[pokemon.types[0]]}`"
        >
          {{ pokemon.name }}
        </div>
        <div class="types">
          <img
            class="types__icon"
            v-for="(type, i) in pokemon.types"
            :key="`pok_type_${i + pokemon.id}`"
            :src="`/images/types/${type}.webp`"
            alt=""
          />
        </div>
        <div class="image" :style="`background: url(${pokemon.image})`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",

  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  computed: {
    types() {
      return this.$store.getters["pokemons/types"];
    },
  },

  methods: {
    open(name) {
      window.location = `/profile/${name}`
    }
  }
};
</script>

<style lang="scss">
@import "../../sass/components/_pokemoncard.scss";
</style>