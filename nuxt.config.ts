// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
     // '~~/layout/main.css',
     '@/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [],

  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    "@nuxt/image"
  ],
  components: true,
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    // display: 'swap', // Optional: ensures text remains visible during webfont load
  },
  content: {
  },
  plugins: [
  ]
})