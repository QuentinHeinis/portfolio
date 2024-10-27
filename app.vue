<script setup>
import Lenis from "lenis";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

onMounted(() => {
  const lenis = useState("lenis", () => new Lenis());

  function raf(time) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>
<template>
  <div>
    <NuxtLayout />
  </div>
</template>
