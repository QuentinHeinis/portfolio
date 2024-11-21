<script lang="ts" setup>
const item = ref();
const title = ref();
const desc = ref();
const toggleScrub = () => {
  const list = item.value.parentElement.children;

  item.value.classList.toggle("-open");
  for (const el of list) {
    if (el !== item.value) {
      el.classList.remove("-open");
    }
  }
};
</script>

<template>
  <li class="item" ref="item">
    <div
      class="item__title"
      ref="title"
      @click="toggleScrub"
      @mouseenter="emitHovered"
      @mouseleave="emitLeaveHovered"
    >
      <p><slot /></p>
      <span class="item__chevron">
        <span></span>
      </span>
    </div>

    <div class="item__desc">
      <div class="item__desc-content" ref="desc">
        <div>
          <slot name="description" />
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.item {
  $this: &;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #000000;

  &__title {
    transition: all 0.3s ease;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-family: "Gugi", sans-serif;
  }
  &__desc {
    display: grid;
    grid-template-rows: 0fr;
    transition: 250ms grid-template-rows ease;
    width: 100%;
    &-content {
      overflow: hidden;
      & > div {
        padding: 20px;
      }
    }
  }
  &__chevron {
    position: absolute;
    right: rem(20);
    width: rem(36);
    height: rem(36);
    display: grid;
    place-items: center;
    background: #000;
    border-radius: 50%;
    scale: 0.2;
    rotate: 45deg;
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
  &__title:hover {
    color: #e3ffde;
    padding-left: rem(12);
  }
  &:hover {
    #{$this}__chevron {
      scale: 1;
      rotate: 0deg;
      background: #ff9633;
      span {
        border-color: #000;
      }
    }
  }

  &.-open {
    #{$this}__desc {
      grid-template-rows: 1fr;
    }
    #{$this}__title {
      color: #000000;
      padding-left: rem(12);
    }
    &:hover #{$this}__title {
      color: #e3ffde;
      padding-left: rem(12);
    }
    #{$this}__chevron {
      scale: 1;
      rotate: 180deg;
      background: #ff9633;
      span {
        border-color: #000;
      }
    }
  }
}
</style>
