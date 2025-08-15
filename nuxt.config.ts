import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@pinia/nuxt'],
  // https://nuxt.com/docs/migration/configuration
  dir: {
    public: 'static'
  },    
  extends: [
    '../coreui',
  ],
  css: [
    '@scbd-layout/index.scss'
  ],
  vite: {
    resolve: {
      // Stable alias so children can @use the SCSS anywhere
      alias: {
        '@scbd-layout': fileURLToPath(new URL('./assets/scss', import.meta.url)),
      },
    },
  },  
})