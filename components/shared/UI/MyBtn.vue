<script lang="ts" setup>
const props = defineProps({
  href: String,
  variant: {
    type: String as PropType<"primary" | "secondary" | "third">,
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
    "-third": props.variant === "third",
  };
});
</script>

<template>
  <NuxtLink
    class="c-button"
    :class="variantClasses"
    :to="href"
    v-if="href"
    aria-label="Link"
  >
    <slot />
    <span class="c-button__chevron">
      <span></span>
    </span>
  </NuxtLink>
  <button
    class="c-button"
    :class="variantClasses"
    v-else
    aria-label="ActionBtn"
  >
    <slot />
    <span class="c-button__chevron">
      <span></span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.c-button {
  $this: &;
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
  background: transparent;
  &.-primary {
    @include hoverEffect(v-bind(color), "default");
  }
  &.-secondary {
    @include hoverEffect(v-bind(color), "secondary");
  }
  &.-third {
    @include hoverEffect(v-bind(color), "secondary");
    padding-right: rem(60);
    #{$this}__chevron {
      position: absolute;
      right: rem(10);
      width: rem(32);
      height: rem(32);
      display: grid;
      place-items: center;
      background: #000;
      border-radius: 50%;
      scale: 0.2;
      rotate: -45deg;
      transition: all 0.3s cubic-bezier(0.3, 0.2, 0.2, 1.8);
      span {
        transition: all 0.5s ease;
        display: block;
        width: rem(12);
        height: rem(12);
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        rotate: 45deg;
        translate: 0 -2px;
      }
    }

    &:hover,
    &:focus {
      #{$this}__chevron {
        scale: 1;
        rotate: -90deg;
        background: #ff9633;
        span {
          border-color: #000;
        }
      }
    }
  }
}
</style>
