<script lang="ts" setup>
const footerId = useState("footerId");
footerId.value = "04";

useSeoMeta({
  title: "Quentin Heinis",
  ogTitle: "Quentin Heinis",
  description:
    " Jeune développeur passionné de développement depuis 2019. Basé en Franche-Comté ainsi qu'en Alsace.",
  ogDescription:
    " Jeune développeur passionné de développement depuis 2019. Basé en Franche-Comté ainsi qu'en Alsace.",
  ogImage: "/favicon.png",
});
</script>

<template>
  <section class="hero">
    <MyHero />
  </section>
  <MySection
    id="01"
    section-name="Mon approche"
    class="section"
    background-color="rgb(29, 17, 22)"
  >
    <HomeApproche />
  </MySection>
  <MySection
    id="02"
    section-name="Mes prestations"
    background-color="#e3d7c0"
    text-color="#000"
    class="section"
  >
    <HomePrestations />
  </MySection>
  <MySection
    id="03"
    section-name="A propos"
    class="section"
    background-color="#c5e1c0"
    text-color="#000"
  >
    <HomeAbout />
  </MySection>
</template>

<style lang="scss" scoped>
section {
  background: rgb(38, 34, 46);
}

.hero {
  position: relative;
  min-height: 100vh;
}
</style>
