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
    <div class="video">
      <video
        src="/video/background.mp4"
        muted
        playsinline
        autoplay
        loop
      ></video>
    </div>

    <div class="content">
      <p>
        Vous avez un projet en tête ? Vous souhaitez en discuter ? N'hésitez pas
        à me contacter pour en discuter.
      </p>
      <MyBtn class="btn" variant="third" color="black" href="/contact"
        >Me contacter</MyBtn
      >
    </div>
  </MySection>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 500px;
  overflow: hidden;
  .video {
    position: absolute;
    top: rem(68);
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    position: relative;
    padding-top: rem(100);
    z-index: 1;
    p {
      max-width: rem(500);
      font-weight: 900;
    }
  }
  .btn {
    margin-top: rem(30);
    font-weight: 900;
    max-width: fit-content;
    color: #000;
    &:hover {
      color: #fff;
      border-color: #ff9633;
      border-width: 2px;
      transition: all 0.1s ease;
    }
  }
}
</style>
