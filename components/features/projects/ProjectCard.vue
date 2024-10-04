<script lang="ts" setup></script>

<template>
  <NuxtLink to="/projets/test" class="project-card">
    <div class="project-card__img">
      <img src="/img/projectsTemplate/background.jpg" alt="" />
    </div>
    <div class="project-card__text">
      <h2>Nom du projet</h2>
      <p>voir le projet</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project-card {
  color: inherit;
  text-decoration: none;
  min-width: 80vw;
  height: 65vh;
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
    }
  }
  &__text {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    img {
      filter: brightness(0.8);
      scale: 1.1;
    }
  }
}
</style>
