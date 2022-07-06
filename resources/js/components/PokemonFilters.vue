<template>
  <div class="filters">
    <div class="row justify-end">
      <div class="col-12 col-desktop-3">
        <input-custom
          name="nameId"
          class="input-name"
          v-model="filters.nameId"
          placeholder="Search"
          icon-class="fa-solid fa-search"
          @input="search"
        />
      </div>
      <div class="col-12 col-desktop-3">
        <select-custom
          name="type"
          class="select-type"
          v-model="filters.type"
          placeholder="Show All"
          icon-class="fa-solid fa-chevron-down"
          :options="typesOptions"
          @input="search"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonFilters",

  data() {
    return {
      filters: {
        nameId: "",
        type: "",
      },
    };
  },

  computed: {
    typesOptions() {
      return Object.keys(this.$store.getters["pokemons/types"]).map((type) => {
        return {
          value: type,
          name: type.charAt(0).toUpperCase() + type.slice(1),
        };
      });
    },
  },

  methods: {
    search() {
      this.$emit("filter", this.filters);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/components/_filters.scss";
</style>