<template>
  <div>
    <div class="profile">
      <curve class="profile__background" :color="types[pokemon.types[0]]" />
      <div class="container">
        <div class="row">
          <div class="col-12 col-desktop-6">
            <div class="avatar">
              <img class="avatar__image" :src="pokemon.image" />
              <h1 class="avatar__title">
                #{{ pokemon.id | zeroLeft }} {{ pokemon.name }}
              </h1>
            </div>
          </div>

          <div class="col-12 col-desktop-6">
            <div class="card">
              <h2
                class="card__title"
                :style="`border-bottom: 2px solid ${types[pokemon.types[0]]}`"
              >
                Descrição
              </h2>
              <p class="card__description">
                {{ pokemon.description }}
              </p>
              <div class="types">
                <div
                  class="types__item"
                  v-for="(type, i) in pokemon.types"
                  :key="`pok_type_${i + pokemon.id}`"
                >
                  <img :src="`/images/types/${type}.webp`" />
                  <span>{{ type }}</span>
                </div>
              </div>
              <h2
                class="card__title"
                :style="`border-bottom: 2px solid ${types[pokemon.types[0]]}`"
              >
                Estatística
              </h2>
              <div class="stats">
                <pokemon-stat
                  v-for="(stat, i) in pokemon.stats"
                  :key="`pok_stat_${i + pokemon.id}`"
                  :stat="{ ...stat, color: types[pokemon.types[0]] }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <loading v-if="loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonProfile",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    pokemon() {
      return this.$store.getters["pokemons/current"];
    },

    types() {
      return this.$store.getters["pokemons/types"];
    },
  },

  async mounted() {
    await this.$store
      .dispatch("pokemons/show", this.name)
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="scss">
@import "../../sass/components/_pokemonprofile.scss";
</style>