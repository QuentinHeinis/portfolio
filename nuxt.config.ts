// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
    },
  },

  css: ["@/scss/main.scss"],
  runtimeConfig: {
    mail: process.env.NUXT_MAIL,
    psw: process.env.NUXT_PSW,
  },
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
    preview: false,
  },
  build: {
    transpile: ["gsap"],
  },
  modules: ["@nuxt/image", "@nuxtjs/prismic"],
});
