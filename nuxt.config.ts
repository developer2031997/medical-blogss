// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    // '~~/layout/main.css',
    "@/assets/css/tailwind.css",
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
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  components: true,
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    // display: 'swap', // Optional: ensures text remains visible during webfont load
  },
  content: {},
  plugins: [],

  // ✅ PWA Config
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "My Nuxt Blog",
      short_name: "Blog",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#00DC82",
      icons: [
        // {
        //   src: "/icon-192.png",
        //   sizes: "192x192",
        //   type: "image/png",
        // },
        // {
        //   src: "/icon-512.png",
        //   sizes: "512x512",
        //   type: "image/png",
        // },
      ],
    },
  },
});
