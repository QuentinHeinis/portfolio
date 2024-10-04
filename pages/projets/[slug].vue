<script setup>
const route = useRoute();
const { slug } = route.params;
const footerId = useState("footerId");
footerId.value = "06";
</script>

<template>
  <Hero />
  <Description />
  <Images />
  <ProjectNav />
  <ProjectFooter />
</template>

<style lang="scss" scoped></style>
