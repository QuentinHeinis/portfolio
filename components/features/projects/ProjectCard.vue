<script lang="ts" setup>
const props = defineProps({
  project: Object,
});
</script>

<template>
  <NuxtLink
    :to="`/projets/${project?.uid}`"
    class="project-card"
    @mouseenter="emitHovered"
    @mouseleave="emitLeaveHovered"
  >
    <div class="project-card__img">
      <img :src="project?.img" alt="" />
    </div>
    <div class="project-card__text">
      <h2>{{ project?.title }}</h2>
      <p>voir le projet</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project-card {
  color: inherit;
  text-decoration: none;
  min-width: 80vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__img {
    max-height: 80%;
    width: 100%;
    overflow: hidden;
    img {
      transition: all 0.3s ease;
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(0.5);
    }
  }
  &__text {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    img {
      filter: brightness(0.3);
      scale: 1.1;
    }
  }
}
</style>
