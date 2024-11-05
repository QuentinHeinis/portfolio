<script setup>
import Lenis from "lenis";


const footerId = useState("footerId");

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
  emitLeaveHovered;
});

onMounted(() => {
  const lenis = useState("lenis", () => new Lenis());

  function raf(time) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  console.log("made with ❤️ by Quentin Heinis");
});
</script>
<template>
  <div>
    <MyCursor />
    <MyHeader />
    <main>
      <NuxtPage />
    </main>
    <MyFooter :id="footerId" />
  </div>
</template>
