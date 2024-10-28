<script lang="ts" setup>
useSeoMeta({
  title: "Quentin Heinis - Message envoyé",
  ogTitle: "Quentin Heinis - Message envoyé",
  ogImage: "/favicon.png",
});
</script>

<template>
  <section class="hero">
    <h1>Votre message à bien été envoyé</h1>
    <p>Nous vous recontacterons dans les plus brefs délais.</p>
    <MyBtn href="/" variant="third" color="white" class="btn"
      >Retour à l'accueil</MyBtn
    >
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 80vh;
  background-image: url("/img/projectsTemplate/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  gap: rem(20);

  .btn {
    max-width: fit-content;
    z-index: 10;
    &:hover {
      color: #000;
      outline: none;
      border: #ff9633 2px solid;
    }
  }
}
</style>
