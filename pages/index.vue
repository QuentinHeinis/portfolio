<script lang="ts" setup></script>

<template>
  <section class="hero">
    <!-- <HomeHero /> -->
    <MyHero />
  </section>
  <MySection
    id="01"
    section-name="Mon approche"
    class="section"
    background-color="#503232"
  >
    <HomeApproche />
  </MySection>
  <MySection
    id="02"
    section-name="Mes prestations"
    background-color="#101010"
    class="section"
  >
    <HomePrestations />
  </MySection>
  <MySection id="03" section-name="A propos" class="section">
    <HomeAbout />
  </MySection>
</template>

<style lang="scss" scoped>
section {
  background: rgb(38, 34, 46);
}

.hero {
  position: relative;
  min-height: fit-content;
}
</style>
