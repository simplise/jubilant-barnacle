// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: ["usebootstrap"],
  css: [
    "./assets/scss/custom.scss"
  ],
  usebootstrap: {
    static: true,
    scss: undefined,
    icon: undefined,
    image: undefined,
    fonts: undefined,
    sitemap: undefined,
    robots: undefined,
    shiki: undefined,
    vueuse: undefined,
    integration: {
      protocol: {
        'reqres': {
          type: 'fetch',
          prefix: 'https://reqres.in/api/',
        },
      },
    },
  }
}
)
