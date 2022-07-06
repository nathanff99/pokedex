<template>
  <div class="select">
    <i :class="[iconClass, 'select__icon']"></i>
    <select
      class="select__field"
      type="text"
      :name="name"
      :placeholder="placeholder"
      @change="emit"
    >
      <option value="" selected>{{ placeholder }}</option>
      <option
        v-for="option of options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",

  props: {
    placeholder: {
      type: String,
      default: "",
    },
    iconClass: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },

  methods: {
    emit(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/_variables";

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.select {
  position: relative;
  &__field {
    font-family: $font-family;
    color: #ccc;
    background: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100px;
    height: 30px;
    width: 100%;
    padding: 0 12px;
  }
  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    color: #ccc;
  }
}
</style>