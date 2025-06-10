<script lang="ts" setup>
const props = defineProps({
  prev: Object,
  next: Object,
});
</script>

<template>
  <MySection id="03" background-color="#090a11"  sectionName="Voir plus de projets">
    <MyGridBg class="projects__bg" />
    <div class="project-nav">
      <NuxtLink
        :to="`/projets/${prev?.uid}`"
        class="project-nav__card"
        @mouseenter="emitHovered"
        @mouseleave="emitLeaveHovered"
        @click="emitLeaveHovered"
      >
        <div class="project-nav__img">
          <NuxtImg :src="prev?.data.project_img.url" alt="" />
        </div>
        <div class="project-nav__text">
          <p>{{ prev?.data.project_name[0].text }}</p>
          <p>Voir le projet</p>
        </div>
      </NuxtLink>
      <NuxtLink
        :to="`/projets/${next?.uid}`"
        class="project-nav__card"
        @mouseenter="emitHovered"
        @mouseleave="emitLeaveHovered"
        @click="emitLeaveHovered"
      >
        <div class="project-nav__img">
          <NuxtImg :src="next?.data.project_img.url" alt="" />
        </div>
        <div class="project-nav__text">
          <p>{{ next?.data.project_name[0].text }}</p>
          <p>Voir le projet</p>
        </div>
      </NuxtLink>
    </div>
  </MySection>
</template>

<style lang="scss" scoped>
.projects__bg {
  position: absolute;
  top: rem(68);
  left: 0;
}
.project-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: rem(120);

  &__card {
    text-decoration: none;
    color: inherit;
    width: 100%;
    max-width: rem(450);
  }
  &__text {
    display: flex;
    justify-content: space-between;
  }
  &__img {
    height: rem(250);
    width: 100%;
    overflow: hidden;
    img {
      transition: all 0.3s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__card:hover {
    img {
      filter: brightness(0.8);
      scale: 1.1;
    }
  }
}
</style>
