<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const projectList = ref();
const projects = [
  { title: "Projet 1", description: "Description du projet 1" },
  { title: "Projet 2", description: "Description du projet 2" },
  { title: "Projet 3", description: "Description du projet 3" },
];
gsap.registerPlugin(ScrollTrigger);
const initHorizontalScroll = () => {
  gsap.to(projectList.value, {
    xPercent: -95 * (projects.length - 1), // Défilement à la largeur totale des éléments
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      pin: true,
      scrub: 1,

      snap: 1 / (projects.length - 1),
      end: `+=${projectList.value.offsetWidth}`,
    },
  });
};
onMounted(() => {
  initHorizontalScroll();

  gsap.to(".projects", {
    borderRadius: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      toggleActions: "play none none reverse",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
    },
  });
});
</script>

<template>
  <MySection id="02" sectionName="Mon portfolio" class="projects">
    <div ref="projectList" class="projects__list">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        class="projects__item"
      />
    </div>
  </MySection>
</template>

<style lang="scss" scoped>
.projects {
  overflow: hidden;
  position: relative;
  height: 100vh;
  &__list {
    display: flex;
    white-space: nowrap;
    gap: 10vw;
  }
}
</style>
