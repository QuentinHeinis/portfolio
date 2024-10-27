<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  imgUrl: String,
});

const img = props.imgUrl
  ? `url(${props.imgUrl})`
  : `url('/img/projectsTemplate/background.jpg')`;
</script>

<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  color: #fff;
  height: 80vh;
  background-image: v-bind(img);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
}
</style>
