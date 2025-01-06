<script setup>
import Lenis from "lenis";
import gsap from "gsap";
const footerId = useState("footerId");

onMounted(() => {
  const lenis = useState("lenis", () => new Lenis());

  function raf(time) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  console.log("made with ❤️ by Quentin Heinis");
});

const transitionScreen = ref();
const router = useRouter();
router.beforeEach((to, from, next) => {
  // Animation de l'écran rouge sortant avant de changer de page
  gsap.to(transitionScreen.value, {
    x: "0%",
    duration: 0.5,
  });
  gsap.to(transitionScreen.value, {
    x: "100%",
    duration: 1,
    delay: 0.8,
    onStart: () => {
      next();
      setTimeout(() => {
        if (!to.hash) window.scrollTo(0, 0);
      }, 200);
    },
  });
  gsap.to(transitionScreen.value, {
    x: "-100%",
    duration: 0,
    delay: 1.8,
  });
});
</script>
<template>
  <div>
    <MyCursor />
    <MyHeader />
    <main>
      <div
        ref="transitionScreen"
        class="transition-screen"
        aria-hidden="true"
      ></div>
      <NuxtPage />
    </main>
    <MyFooter :id="footerId" />
  </div>
</template>
<style scoped>
.transition-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  transform: translate(-100%, 0);
  background-color: #f15a52;
  z-index: 1000;
}
</style>
