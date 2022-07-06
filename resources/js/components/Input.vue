<template>
  <div class="input">
    <i :class="[iconClass, 'input__icon']"></i>
    <input
      class="input__field"
      type="text"
      :name="name"
      :placeholder="placeholder"
      @input="emit"
    />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    placeholder: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    name: {
      type: String,
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

.input {
  position: relative;
  &__field {
    font-family: $font-family;
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