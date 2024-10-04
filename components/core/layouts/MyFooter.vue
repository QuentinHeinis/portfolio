<script lang="ts" setup>
defineProps({
  id: String,
});
</script>

<template>
  <footer class="footer">
    <h2 class="footer__header">
      <span>{{ id }}/ </span>&nbsp;Footer
    </h2>
    <div class="footer__content">
      <div class="footer__logo">
        <img src="/img/logoblack.png" alt="" />
      </div>
      <div class="footer__links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">A propos</NuxtLink>
        <NuxtLink to="/projets">Projets</NuxtLink>
        <NuxtLink to="/">Contact</NuxtLink>
      </div>
      <div class="footer__socials">
        <NuxtLink to="/"><img src="" alt="" /></NuxtLink>
        <NuxtLink to="/"><img src="" alt="" /></NuxtLink>
      </div>
    </div>
    <div class="footer__footer">
      <NuxtLink>Mentions légales</NuxtLink>
      <p>© 2024 Quentin Heinis</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  color: rgb(0, 0, 0);
  background: rgb(153, 153, 153);
  border-top-left-radius: rem(20);
  border-top-right-radius: rem(20);
  z-index: 1;
  position: relative;
  margin-top: rem(-40);

  &__header {
    padding-inline: rem(80);
    font-size: rem(16);
    font-weight: 400;
    height: rem(68);
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(0, 0, 0);
    span {
      font-weight: 600;
    }
  }
  &__content {
    padding-inline: rem(40);
    padding-top: rem(40);
    display: flex;
    align-items: center;
    gap: rem(20);
  }
  &__logo {
    height: rem(64);
    width: rem(64);
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  &__footer {
    padding: rem(20) rem(40);
    display: flex;
    font-size: rem(12);
    gap: rem(8);
  }
  &__links {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  &__socials {
    display: flex;
    gap: rem(8);
    a {
      height: rem(50);
      width: rem(50);
      background: blue;
    }
  }
}
</style>
