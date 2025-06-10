<script lang="ts" setup>
defineProps({
  href: String,
  number: String,
});
</script>

<template>
  <NuxtLink :to="href" class="c-link">
    <slot />
    <span>{{ number }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.c-link {
  font-size: rem(32);
  transition: padding 0.3s ease;
  cursor: pointer;
  display: flex;
  color: inherit;
  text-decoration: none;
  font-family: "Asgard", sans-serif;
  &:hover {
    padding-left: rem(20);
    color: #962bd2;
  }
  span {
    font-size: rem(16);
  }

  @include small-up {
    font-size: rem(48);
    span {
      font-size: rem(24);
    }
  }
}
</style>
