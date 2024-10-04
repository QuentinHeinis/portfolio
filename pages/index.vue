<script lang="ts" setup>
import { emitLeaveHovered, emitHovered } from "~/utils/emit";
</script>

<template>
  <section>
    <div>
      <!-- <h1 @mouseleave="emitLeaveHovered" @mouseover="emitHovered">Home</h1>
      <p>
        My name is <strong>John Doe</strong> and I'm a
        <strong>Web Developer</strong> based in <strong>Paris</strong>.
      </p>
      <MyBtn href="/about">About me</MyBtn> -->
    </div>
    <!-- <MyRipples /> -->
  </section>
  <section class="section"></section>
</template>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  background: rgb(38, 34, 46);
}
</style>
