<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  {
    src: "",
    alt: "",
  },
];
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils
    .toArray(".section-parallax .parallax-content")
    .forEach((section, i) => {
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
</script>

<template>
  <MySection
    className="images"
    id="03"
    sectionName="Description"
    backgroundColor="rgb(218, 169, 129)"
    textColor="#000"
  >
    <div class="section-parallax">
      <div class="parallax-content">
        <img src="/img/projectsTemplate/image1.jpg" alt="" />
      </div>
    </div>
    <div class="section-parallax">
      <div class="parallax-content">
        <img src="/img/projectsTemplate/image2.jpg" alt="" />
      </div>
    </div>
    <div class="section-parallax">
      <div class="parallax-content">
        <img src="/img/projectsTemplate/image3.jpg" alt="" />
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
  height: 80vh;
  overflow: hidden;
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
    object-fit: cover;
  }
}
</style>
