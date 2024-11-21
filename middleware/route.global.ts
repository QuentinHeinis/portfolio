export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook("page:loading:start", () => {
    setTimeout(() => window.scrollTo(0, 0), 0);
    emitLeaveHovered;
  });
});
