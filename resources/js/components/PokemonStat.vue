<template>
  <div class="stat">
    <span class="stat__name">
      {{ optionsStat[stat.name] }}
    </span>
    <div class="bar">
      <div
        class="bar__progress"
        :style="`width: ${(stat.value * 100) / 174}%; background: ${
          stat.color
        }`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonStat",

  props: {
    stat: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      optionsStat: {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SpP",
        "special-defense": "SpD",
        speed: "spd",
      },
    };
  },
};
</script>

<style lang="scss">
.stat {
  display: flex;

  &__name {
    width: 51px;
    text-align: right;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  }

  .bar {
    background: #c4c4c4;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    margin-left: 11px;
    margin-bottom: 17px;

    &__progress {
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>