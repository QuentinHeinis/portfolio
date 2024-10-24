<script lang="ts" setup></script>

<template>
  <MyGalaxy />
  <div class="text">
    <h1>
      Quentin HEINIS
      <span>Portfolio</span>
    </h1>
    <p>
      Fullstack développeur et programmeur
      <span>basé en france</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.text {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  color: white;
  display: flex;
  align-items: flex-end;
  h1 {
    display: flex;
    flex-direction: column;
    font-size: 32px;
    span {
      text-transform: uppercase;
    }
  }
  p {
    display: flex;
    flex-direction: column;
  }
}
</style>
