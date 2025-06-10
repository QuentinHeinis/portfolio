<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({
  imgs: Array,
  videos: Array,
});
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let mm = gsap.matchMedia();
  mm.add("screen and (min-width: 768px)", () => {
    gsap.utils
      .toArray(".section-parallax .parallax-content")
      .forEach((section, i) => {
        if (section.classList.contains("gif")) {
          return;
        }

        const heightDiff =
          section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(
          section,
          {
            y: -heightDiff,
          },
          {
            scrollTrigger: {
              trigger: section.parentElement,
              scrub: true,
            },
            y: 0,
            ease: "none",
          }
        );
      });
  });
});
</script>

<template>
  <MySection
    className="images"
    id="02"
    sectionName="Photos"
    backgroundColor="#e3d7c0"
    textColor="#000"
  >
    <div class="section-parallax" v-for="(img, index) in imgs" :key="index">
      <div
        class="parallax-content"
        :class="img.project_image.url.includes('.gif') && 'gif'"
      >
        <NuxtImg :src="img.project_image.url" preload alt="" />
      </div>
    </div>
  </MySection>
</template>

<style lang="scss">
.images {
  display: flex;
  flex-direction: column;
  gap: rem(50);
  align-items: center;
}
.section-parallax {
  position: relative;
  width: 100%;
  max-width: rem(1920);
  height: 80%;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.parallax-content {
  background-size: cover;
  position: relative;
  z-index: 0;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 120%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.gif {
    img {
      object-fit: contain;
      max-width: 800px;
      margin-inline: auto;
    }
  }
}
</style>
