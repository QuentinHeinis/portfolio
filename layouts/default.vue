<script setup>
const footerId = useState("footerId");
footerId.value = "01";
</script>

<template>
  <MyHeader />
  <main>
    <NuxtPage />
  </main>
  <MyFooter :id="footerId" />
</template>

<style lang="scss" scoped></style>
