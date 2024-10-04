<script setup>
const footerId = useState("footerId");
footerId.value = "04";
</script>

<template>
  <section class="hero"></section>
  <ProjectList />
  <ProjectFooter id="03" />
</template>

<style lang="scss" scoped>
.hero {
  height: 60vh;
  background-image: url("/img/projectsTemplate/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
