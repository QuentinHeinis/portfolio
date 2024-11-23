<script setup>
const squareSize = 75;

const isMobile = ref(true);

const resize = () => {
  isMobile.value = window.innerWidth < 800;
};
onMounted(() => {
  resize();
  window.addEventListener("resize", resize);
});

onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>
<template>
  <section class="hero">
    <HeroBackground :squareSize v-if="!isMobile" />
    <HeroPhone />
    <div class="text" v-if="!isMobile">
      <h2 class="text__title">Quentin <br />Heinis</h2>
      <ul class="text__link">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100vw;
  overflow: hidden;
  .text {
    &__title {
      position: absolute;
      font-size: rem(75);
      font-family: "Gugi", sans-serif;  
      line-height: 1;
      z-index: 10;
      left: 50%;
      top: 50%;
      color: #c3b1e1;
      --left: -4px;
      translate: calc(
          var(--left) * v-bind(squareSize) - 0.5px * v-bind(squareSize)
        )
        calc(-4.5px * v-bind(squareSize) - 0.5px * v-bind(squareSize));
      @media screen and (min-width: 1150px) {
        --left: -7px;
      }
    }
    &__link {
      position: absolute;
      font-size: rem(20);
      z-index: 0;
      left: 50%;
      top: 50%;
      color: #c3b1e1;
      --left: -2px;
      translate: calc(
          var(--left) * v-bind(squareSize) - 0.5px * v-bind(squareSize)
        )
        calc(-0.5px * v-bind(squareSize) - 0.5px * v-bind(squareSize));

      display: flex;
      list-style: none;
      padding: 0;
      gap: rem(75);
      @media screen and (min-width: 1150px) {
        --left: -5px;
      }
      li {
        min-width: rem(75);
        text-align: center;
      }
    }
  }
}
</style>
