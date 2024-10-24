<script lang="ts" setup></script>

<template>
  <div class="background">
    <div class="background__grid"></div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #1d1b1d;
  z-index: -10;
  &__grid {
    background: transparent;
    background-image: none;
    background-size: auto;
    background-image: linear-gradient(#f0eae0 0.1rem, transparent 0),
      linear-gradient(90deg, #f0eae0 0.1rem, transparent 0);
    background-size: clamp(40px, 40/1440 * 100vw, 40/1440 * 100vw)
      clamp(40px, 40/1440 * 100vw, 40/1440 * 100vw);
    opacity: 0.1;
    height: 100%;
  }
}
</style>
