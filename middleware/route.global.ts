export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook("page:loading:start", () => {
    setTimeout(() => {
      if (to.hash) {
        const el = document.querySelector(to.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
    emitLeaveHovered;
  });
});
