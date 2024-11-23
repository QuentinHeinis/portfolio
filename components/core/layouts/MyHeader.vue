<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const isOpen = ref(false);
const logo = ref();
const lenis = useState("lenis");

gsap.registerPlugin(ScrollTrigger);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  isOpen.value ? lenis.value?.stop() : lenis.value?.start();
  document.querySelector("html")?.classList.toggle("no-scroll");
};

onMounted(() => {
  let mm = gsap.matchMedia();
  mm.add("screen and (max-width: 800px)", () => {
    gsap.fromTo(
      logo.value.$el,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: logo.value.$el,
          start: "top+=300px top",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
        ease: "power3.in",
      }
    );
  });
});
</script>

<template>
  <header class="header">
    <NuxtLink
      to="/"
      class="header__logo -init"
      ref="logo"
      @mouseenter="emitHovered"
      @mouseleave="emitLeaveHovered"
      @click="emitLeaveHovered"
    >
      <NuxtImg src="/img/logowhite.png" alt="logo Quentin Heinis" />
    </NuxtLink>
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
  &__logo {
    width: 48px;
    img {
      width: 100%;
    }

    opacity: 0;

    @media screen and (min-width: 800px) {
      &.-init {
        opacity: 1;
      }
    }
  }
  @include small-up {
    padding: 24px 48px;
  }
  &__btn {
    display: flex;
    gap: 4px;
    z-index: 50;
  }
}
</style>
