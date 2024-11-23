<script lang="ts" setup>
import gsap from "gsap";
const props = defineProps({
  isOpen: Boolean,
  linkClick: {
    type: Function,
    required: true,
  },
});
watch(
  () => props.isOpen,
  () => {
    toggleMenu();
  }
);

const tl = gsap.timeline({
  repeat: 0,
});

const toggleMenu = () => {
  if (props.isOpen) {
    tl.play();
  } else {
    tl.reverse();
  }

  document.querySelector("html")?.classList.toggle("no-scroll");
};

onBeforeMount(() => {
  // setup default value to menu
  tl.pause();
  tl.to(".menu", { translateX: 0, duration: 0 });
  tl.fromTo(".menu__nav", { translateX: "100%" }, { translateX: 0 });
  tl.fromTo(".menu__line.-vertical", { height: 0 }, { height: "100%" });
  tl.fromTo(".menu__line.-horizontal", { width: 0 }, { width: "100%" }, "<");
  tl.fromTo(
    "nav li a",
    { translateY: "100%" },
    { translateY: 0, stagger: 0.1 },
    "<"
  );
  tl.fromTo(
    ".menu__footer li",
    { right: "-120%" },
    { right: 20, stagger: 0.1 },
    "<+.2"
  );
  tl.fromTo(".menu__img", { translateX: "200%" }, { translateX: 0 }, "<");
});
</script>

<template>
  <div class="menu">
    <div class="menu__img">
      <NuxtImg src="/img/background.avif" format="webp" alt="" />
    </div>
    <div class="menu__nav">
      <span class="menu__title">Menu</span>
      <span class="menu__line -vertical"></span>
      <span class="menu__line -horizontal"></span>
      <nav>
        <ul>
          <li>
            <MyLink @click="linkClick()" number="01" href="/">Home</MyLink>
          </li>
          <li>
            <MyLink @click="linkClick()" number="02" href="/#a-propos"
              >A propos</MyLink
            >
          </li>
          <li>
            <MyLink @click="linkClick()" number="03" href="/projets"
              >Projets</MyLink
            >
          </li>
          <li>
            <MyLink @click="linkClick()" number="04" href="/contact"
              >Contact</MyLink
            >
          </li>
        </ul>
      </nav>
      <div class="menu__footer">
        <ul>
          <li>
            <NuxtLink @click="linkClick()" to="/mentions-legales"
              >Mentions légales</NuxtLink
            >
          </li>
          <li>© 2024 Quentin Heinis</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  color: #171717;
  translate: 100vw;
  &.-open {
    translate: 0;
  }

  &__img {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
    translate: 200%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__nav {
    background: #c998d5;
    height: 100%;
    width: 100%;
    translate: 100%;
    display: flex;
    align-items: center;
    position: relative;
    @include large-up {
      width: 55%;
      border-top-left-radius: rem(32);
      border-bottom-left-radius: rem(32);
    }
    nav {
      margin-left: rem(40);
    }
    ul {
      list-style: none;
      li {
        overflow: hidden;
      }
    }
  }
  &__line {
    position: absolute;
    height: 100%;
    width: 1px;
    background: #171717;
    left: rem(75);
    top: 0;

    &.-horizontal {
      top: unset;
      left: unset;
      right: 0;
      height: 1px;
      width: 100%;
      bottom: rem(75);
    }
  }
  &__title {
    translate: 45%;
    rotate: -90deg;
  }
  &__footer {
    position: absolute;
    bottom: rem(15);
    right: rem(20);
    ul {
      list-style: none;
      display: flex;
      gap: rem(20);
      font-size: rem(12);
      position: relative;
      li {
        position: relative;
        margin-bottom: rem(10);
        &:first-of-type {
          display: none;
        }
        @media screen and (min-width: 375px) {
          &:first-of-type {
            display: block;
          }
        }
        a {
          color: #171717;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
