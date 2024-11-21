<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const projectList = ref();

const { projects } = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

gsap.registerPlugin(ScrollTrigger);
const initHorizontalScroll = () => {
  let mm = gsap.matchMedia();
  mm.add("screen and (min-width: 800px)", () => {
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
  <MySection
    id="01"
    sectionName="Mon portfolio"
    background-color="#212137"
    class="projects"
    :is-overlap="false"
    class-name="projects__content -nopt"
  >
    <MyGridBg class="projects__bg" />
    <div ref="projectList" class="projects__list">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.title"
        class="projects__item"
      />
    </div>
  </MySection>
</template>
<style>
.projects__content.-nopt {
  position: relative;
  height: 100%;
  padding-top: 0;
}
</style>
<style lang="scss" scoped>
.projects {
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 800px) {
    height: 100vh;
  }
  &__list {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    align-items: center;
    height: 100%;
    padding-top: 10vw;
    padding-bottom: 10vw;
    gap: 10vw;

    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
  &__bg {
    left: 0;
  }
}
</style>
