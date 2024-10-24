<script setup>
const squareSize = 75;
</script>
<template>
  <section class="hero">
    <HeroBackground :squareSize />
    <HeroPhone />
    <div class="text">
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

  .text {
    &__title {
      position: absolute;
      font-size: rem(75);
      line-height: 1;
      z-index: 10;
      left: 50%;
      top: 50%;
      color: #c3b1e1;
      translate: calc(-7px * v-bind(squareSize) - 0.5px * v-bind(squareSize))
        calc(-3.5px * v-bind(squareSize) - 0.5px * v-bind(squareSize));
    }
    &__link {
      position: absolute;
      font-size: rem(20);
      z-index: 10;
      left: 50%;
      top: 50%;
      color: #c3b1e1;
      translate: calc(-6px * v-bind(squareSize) - 0.5px * v-bind(squareSize))
        calc(0.5px * v-bind(squareSize) - 0.5px * v-bind(squareSize));

      display: flex;
      list-style: none;
      padding: 0;
      gap: rem(75);
      li {
        min-width: rem(75);
        text-align: center;
      }
    }
  }
}
</style>
