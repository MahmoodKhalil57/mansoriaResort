export default defineNuxtConfig({
  extends: "content-wind",

  routeRules: {
    "/": { prerender: true },
  },

  css: ["~/assets/css/main.css"],

  devtools: {
    enabled: true, // or false to disable
  },

  modules: ["@nuxt/image"],
});