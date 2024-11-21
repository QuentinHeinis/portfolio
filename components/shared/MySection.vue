<script lang="ts" setup>
defineProps({
  overlapTop: {
    type: Boolean,
    default: true,
  },
  isOverlap: {
    type: Boolean,
    default: true,
  },
  backgroundColor: {
    type: String,
    default: "#453e47",
  },
  textColor: {
    type: String,
    default: "#ffffff",
  },
  className: String,
  sectionName: String,
  id: String,
  overflow: {
    type: String,
    default: "visible",
  },
});
</script>

<template>
  <section
    class="section"
    :class="{ '-overlapTop': overlapTop, '-isOverlapped': isOverlap }"
    :id="sectionName?.split(' ').join('-').toLowerCase()"
  >
    <h2 class="section__header">
      <span>{{ id }}/ </span>&nbsp;{{ sectionName }}
    </h2>
    <div class="section__content" :class="className">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  color: v-bind(textColor);
  background: v-bind(backgroundColor);
  border-top-left-radius: rem(20);
  border-top-right-radius: rem(20);
  z-index: 1;
  position: relative;
  overflow: v-bind(overflow);

  &.-overlapTop {
    margin-top: rem(-40);
  }
  &.-isOverlapped {
    padding-bottom: rem(80);
  }

  &__header {
    padding-inline: rem(80);
    font-size: rem(16);
    font-weight: 400;
    height: rem(68);
    display: flex;
    align-items: center;
    border-bottom: 2px solid v-bind(textColor);
    font-family: "Gugi", sans-serif;
    span {
      font-weight: 600;
    }
  }
  &__content {
    padding-inline: rem(40);
    padding-top: rem(40);
  }
}
</style>
