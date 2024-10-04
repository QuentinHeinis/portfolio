<script lang="ts" setup>
const props = defineProps({
  isOpen: Boolean,
});

const classList = computed(() => (props.isOpen ? "-open" : ""));
</script>

<template>
  <button class="c-button" :class="classList">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
.c-button {
  align-items: center;
  background: none;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: rem(48);
  justify-content: space-around;
  padding: rem(10);
  position: relative;
  width: rem(48);
  z-index: 50;

  @include hoverEffect(#14b449);
  span {
    background: #fff;
    display: block;
    height: 2px;
    width: 100%;
  }

  &.-open {
    background: rgb(218, 123, 241);
    &::after {
      background: transparent;
    }
    span {
      top: 50%;
      position: absolute;
      translate: 0 -50%;
      &:nth-child(1) {
        rotate: 45deg;
        width: 65%;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        rotate: -45deg;
        width: 65%;
      }
    }
  }
}
</style>
