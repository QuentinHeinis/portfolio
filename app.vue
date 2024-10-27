<script setup>
import Lenis from "lenis";

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
});

useHead({
  script: [
    {
      src: "https://static.cdn.prismic.io/prismic.js?new=true&repo=mmi-food",
      async: true,
      defer: true,
    },
  ],
});
</script>
<template>
  <div>
    <NuxtLayout />
  </div>
</template>
