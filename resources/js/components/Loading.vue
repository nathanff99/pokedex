<template>
  <div class="loading">
    <div class="content">
      <div class="content__icon">
        <img class="pulse" src="/images/pokebola.webp" />
      </div>
      <div class="content__text">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss">
.loading {
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
  background: rgb(0 0 0 / 85%);

  .content {
    text-align: center;

    &__icon img {
      width: 60px;
      filter: invert(1);
    }

    &__text span {
      font-size: 25px;
      display: inline-block;
      margin: 0 -0.075em;
      -webkit-animation: loadingText 1s infinite alternate;
      animation: loadingText 1s infinite alternate;

      &:nth-child(2) {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;
      }
      &:nth-child(7) {
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
      }
    }
  }

  .pulse {
    -webkit-animation: pulse 1s infinite;
    animation: pulse 1s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes loadingText {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>