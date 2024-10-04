<script setup>
import Lenis from "lenis";

onMounted(() => {
  const lenis = useState("lenis", () => new Lenis());

  lenis.value.on("scroll", (e) => {
    // console.log(e);
  });

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
