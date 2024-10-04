<script lang="ts" setup></script>

<template>
  <MySection id="04" sectionName="Voir plus de projets">
    <div class="project-nav">
      <NuxtLink to="/projets/test" class="project-nav__card">
        <div class="project-nav__img">
          <img src="/img/projectsTemplate/image1.jpg" alt="" />
        </div>
        <div class="project-nav__text">
          <p>project name</p>
          <p>Voir le projet</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/projets/test" class="project-nav__card">
        <div class="project-nav__img">
          <img src="/img/projectsTemplate/image2.jpg" alt="" />
        </div>
        <div class="project-nav__text">
          <p>project name</p>
          <p>Voir le projet</p>
        </div>
      </NuxtLink>
    </div>
  </MySection>
</template>

<style lang="scss" scoped>
.project-nav {
  display: flex;
  justify-content: center;
  gap: rem(120);
  &__card {
    text-decoration: none;
    color: inherit;
    width: 50%;
    max-width: rem(1000);
  }
  &__text {
    display: flex;
    justify-content: space-between;
  }
  &__img {
    height: rem(350);
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
