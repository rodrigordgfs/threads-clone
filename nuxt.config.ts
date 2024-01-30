// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  },
});
