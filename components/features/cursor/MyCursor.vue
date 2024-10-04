<script lang="ts" setup>
const cursor = ref();
const isInit = ref(false);
const isHovered = ref(false);

const handleHover = () => {
  isHovered.value = true;
};

const handleLeave = () => {
  isHovered.value = false;
};

const positionElement = (e: any) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.value.style.top = `${mouseY}px`;
  cursor.value.style.left = `${mouseX}px`;
};

onMounted(() => {
  cursor.value.focus();
  isInit.value = true;

  // add event listeners
  window.addEventListener("mousemove", positionElement);
  window.addEventListener("hovered", handleHover);
  window.addEventListener("leave", handleLeave);
});

// remove event listeners
onUnmounted(() => {
  window.removeEventListener("mousemove", positionElement);
  window.removeEventListener("hovered", handleHover);
  window.removeEventListener("leave", handleLeave);
});
</script>

<template>
  <span ref="cursor" :class="{ cursor: isInit, ' -hovered': isHovered }"></span>
</template>

<style lang="scss" scoped>
.cursor {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  width: rem(30);
  height: rem(30);
  background: #fff;
  border-radius: 50%;
  transition: width 0.2s ease, height 0.2s ease;
  @include large-up {
    display: block;
  }
  &.-hovered {
    width: rem(100);
    height: rem(100);
  }
}
</style>
