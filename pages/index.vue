<script lang="ts" setup>
const footerId = useState("footerId");
footerId.value = "03";
const projetsSection = ref();

useSeoMeta({
  title: "Quentin Heinis | Portfolio - Développeur Fullstack",
  ogTitle: "Quentin Heinis | Portfolio - Développeur Fullstack",
  description:
    "Quentin Heinis | Développeur fullstack passionné. Découvrez mes projets et créations web.",
  ogDescription:
    "Quentin Heinis | Développeur fullstack passionné. Découvrez mes projets et créations web.",
  ogImage: "/favicon.png",
});
</script>

<template>
  <MyHero />
  <MySection ref="projetsSection" id="01" section-name="Mes projets" class="section" background-color="#e3d7c0" text-color="#000" overflow="hidden">
    <HomeProjets :sectionEl="projetsSection?.sectionEl" />
  </MySection>
  <MySection id="02" section-name="A propos" class="section" background-color="#090a11" text-color="#fff" overflow="hidden">
    <HomeAbout/>
  </MySection>
  <MySection id="03" section-name="Mon processus" class="section" background-color="#e3d7c0" text-color="#000" overflow="hidden">
    <HomeApproche />
  </MySection>
</template>

<style lang="scss" scoped>
section {
  background: #090a11;
}
</style>
