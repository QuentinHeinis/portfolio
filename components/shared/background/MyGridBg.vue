<script lang="ts" setup>
defineProps({
  background: {
    type: String,
    default: "#090a11",
  },
  gradient: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="background">
    <div class="background__grid"></div>
    <div class="background__gradiant" v-if="gradient"></div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: v-bind(background);
  z-index: -10;
  &__grid {
    background: transparent;
    background-image: none;
    background-size: auto;
background-image: 
  linear-gradient(#f0eae0 0.035rem, transparent 0),
  linear-gradient(90deg, #f0eae0 0.035rem, transparent 0);
background-size: 
  clamp(30px, 20/1440 * 100vw, 20/1440 * 100vw)
  clamp(30px, 20/1440 * 100vw, 20/1440 * 100vw);
    opacity: 0.1;
    height: 100%;
  }
  &__gradiant {
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      150deg,
      rgba(0, 0, 0, 0.596) 0%,
      rgba(94, 48, 48, 0.205) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
