// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'test',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height,initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
    cdnURL: 'https://cdn.example.com11231231231',
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
