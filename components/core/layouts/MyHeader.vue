<script setup>
const isOpen = ref(false);
const lenis = useState("lenis");

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  isOpen.value ? lenis.value?.stop() : lenis.value?.start();
  document.querySelector("html")?.classList.toggle("no-scroll");
};
</script>

<template>
  <header class="header">
    <div>
      <!-- <NuxtImg src="/img/logoblack.png" alt="" /> -->
    </div>
    <MyNav :isOpen :linkClick="() => toggleMenu()" />
    <div class="header__btn">
      <MyBtn @click="isOpen ? toggleMenu() : null" href="/contact"
        >Me contacter</MyBtn
      >
      <Hamburger :isOpen @click="toggleMenu()" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 24px 24px;
  z-index: 100;

  @include small-up{
    padding: 24px 48px;
  }
  &__btn {
    display: flex;
    gap: 4px;
    z-index: 50;
  }
}
</style>
