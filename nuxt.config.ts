// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["@/scss/main.scss"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: `@import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT,
  },
  build: {
    transpile: ["gsap"],
  },
  modules: ["@nuxt/image", "@nuxtjs/prismic"],
});
