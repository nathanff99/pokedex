<template>
  <div>
    <pokemon-filters @filter="filter" />
    <div class="list row">
      <pokemon-card
        v-for="(pokemon, i) in pokemons"
        :key="`pokemon_${i}`"
        :pokemon="pokemon"
      />
    </div>

    <loading v-if="loading" />
  </div>
</template>

<script>
export default {
  name: "PokemonList",

  data() {
    return {
      filters: {
        nameId: "",
        type: "",
      },

      loading: true,
      showing: 20,
      perPage: 8,
    };
  },

  computed: {
    pokemons() {
      const pokemons = this.$store.getters["pokemons/list"].filter(
        (pokemon) =>
          `${pokemon.id}${pokemon.name}`.includes(
            this.filters.nameId.toLowerCase()
          ) &&
          pokemon.types.find((type) => `${type}`.includes(this.filters.type))
      );

      return pokemons.slice(0, this.showing);
    },
  },

  methods: {
    filter(filters) {
      this.filters = filters;
    },

    loadMore() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.showing += this.perPage;
        }
      };
    },
  },

  async beforeCreate() {
    await this.$store
      .dispatch("pokemons/get", {
        limit: 150,
      })
      .finally(() => (this.loading = false));
  },

  mounted() {
    this.loadMore();
  },
};
</script>

<style>
</style>