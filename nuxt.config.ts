// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Gugi&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ],
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
    toolbar: false,
  },
  build: {
    transpile: ["gsap"],
  },
  modules: ["@nuxt/image", "@nuxtjs/prismic"],
});
