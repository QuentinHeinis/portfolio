<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    default: "05",
  },
});
</script>

<template>
  <MySection
    :id
    sectionName="Une envie ? "
    backgroundColor="rgb(202, 202, 202)"
    textColor="#000"
    class="footer"
  >
    <video src="/video/background.mp4" muted playsinline autoplay loop></video>

    <div class="content">
      <NuxtLink to="/">Me contacter</NuxtLink>
    </div>
  </MySection>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 500px;
  overflow: hidden;
  video {
    position: absolute;
    top: rem(68);
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    object-fit: cover;
    width: 100%;
  }
  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
