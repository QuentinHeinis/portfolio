<script setup>
const list = ref();
const effect = ref();
const handleEffect = (e) => {
  const height = 80;
  const myList = list.value.getBoundingClientRect();

  const mouseY = e.clientY - myList.top;
  const offset = Math.floor(mouseY / height);

  let index = 0;
  let openIndex;
  let gap = 0;
  for (const item of list.value.children) {
    if (item.classList.contains("-open")) {
      openIndex = index;
      gap = item.children[1].offsetHeight;
    }
    index++;
  }

  let cursorInScrub = false;
  let scrubTop, scrubBottom;
  if (openIndex !== undefined) {
    scrubTop = height * (openIndex + 1); // Position du haut du scrub ouvert

    scrubBottom = scrubTop + gap; // Position du bas du scrub ouvert
    cursorInScrub = mouseY > scrubTop && mouseY < scrubBottom;
  }

  if (openIndex < offset) {
    if (cursorInScrub) {
      effect.value.style.top = openIndex * height + "px";
    } else {
      effect.value.style.top =
        (Math.floor((mouseY - scrubBottom) / 80) + openIndex + 1) *
          (height + 1) +
        gap +
        "px";
    }
  } else {
    effect.value.style.top = offset * (height + 1) + "px";
  }
};

const handleClick = (e) => {
  setTimeout(() => {
    handleEffect(e);
  }, 300);
};
</script>

<template>
  <div class="list">
    <span class="list__effect" ref="effect"></span>
    <ul
      class="list__list"
      ref="list"
      @mousemove="handleEffect"
      @click="
        (e) => {
          handleEffect(e);
          handleClick(e);
        }
      "
    >
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list {
  position: relative;
  max-width: $xl;
  margin-inline: auto;

  &__effect {
    height: 80px;
    width: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    opacity: 0;
    background: rgb(0, 0, 0);
    transition: all 0.3s ease;
  }

  &:hover &__effect {
    opacity: 1;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
