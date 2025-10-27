<script lang="ts" setup>
const footerId = useState("footerId");
footerId.value = "04";

useSeoMeta({
  title: "Quentin Heinis | conception de site en Alsace et le Doubs",
  ogTitle: "Quentin Heinis | conception de site en Alsace et le Doubs",
  description:
    "Quentin Heinis | Spécialisé dans la conception de sites internet sur mesure. J'accompagne les entreprises dans la création de solutions web adaptées à leurs besoins.",
  ogDescription:
    "Quentin Heinis | Spécialisé dans la conception de sites internet sur mesure. J'accompagne les entreprises dans la création de solutions web adaptées à leurs besoins.",
  ogImage: "/favicon.png",
});
</script>

<template>
  <MyHero />
  <MySection id="01" section-name="Mes prestations" background-color="#e3d7c0" text-color="#000" class="section">
    <HomePrestations />
  </MySection>
  <MySection id="02" section-name="Mon approche" class="section" background-color="#090a11" overflow="hidden">
    <HomeApproche />
  </MySection>

  <MySection id="03" section-name="Mes tarifs" class="section" background-color="#e3d7c0" text-color="#000" overflow="hidden">
    <HomeTarif/>
  </MySection>
  <MySection id="04" section-name="A propos" class="section" background-color="#090a11" text-color="#fff" overflow="hidden">
    <HomeAbout/>
  </MySection>

</template>

<style lang="scss" scoped>
section {
  background: #090a11;
}
</style>
