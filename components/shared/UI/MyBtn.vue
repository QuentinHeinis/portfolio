<script lang="ts" setup>
const props = defineProps({
  href: String,
  variant: {
    type: String as PropType<"primary" | "secondary">,
    default: "primary",
  },
  color: {
    type: String,
    default: "rgb(224, 74, 74)",
  },
});

const variantClasses = computed(() => {
  return {
    "-primary": props.variant === "primary",
    "-secondary": props.variant === "secondary",
  };
});
</script>

<template>
  <NuxtLink class="c-button" :class="variantClasses" :to="href">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.c-button {
  align-items: center;
  border: 1px solid #fff;
  border-radius: rem(24);
  color: #fff;
  cursor: pointer;
  display: flex;
  height: rem(48);
  justify-content: center;
  padding: rem(10) rem(20);
  position: relative;
  text-decoration: none;

  &.-primary {
    @include hoverEffect(v-bind(color), "default");
  }
  &.-secondary {
    @include hoverEffect(v-bind(color), "secondary");
  }
}
</style>
