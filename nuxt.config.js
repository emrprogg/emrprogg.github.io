export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emraharas.xyz | Emrah-Aras',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Emrah Aras is a frontend developer whose native language is javascript. Emrah-Aras also develops Discord bots using node.js. His website is emraharas.xyz.' },
      {
        name: 'keywords',
        content:
          'Emrah-Aras, emrprogg, EmrahAras, Emrah, Aras',
      },
      {
        name: 'author',
        content: 'Emrah-Aras',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'copyright',
        content: '(c) 2021 Emrah-Aras Tüm Hakları Saklıdır.',
      },
      {
        name: 'content-language',
        content: 'en',
      },
      // Open Graph - Facebook metada's
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://emraharas.xyz',
      },
      {
        property: 'og:title',
        content: 'Emrah-Aras | emraharas.xyz',
      },
      {
        property: 'og:description',
        content:
          'Emrah Aras is a frontend developer whose native language is javascript. Emrah-Aras also develops Discord bots using node.js. His website is emraharas.xyz.',
      },
      {
        property: 'og:image',
        content:
          'https://cdn.discordapp.com/avatars/441221465019514881/a_1c54ceea979bb2ea395d0002a6e95e53.png?size=256',
      },

      // Twitter metada's
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://emraharas.xyz',
      },
      {
        property: 'twitter:title',
        content: 'Emrah-Aras | emraharas.xyz',
      },
      {
        property: 'twitter:description',
        content:
          'Emrah Aras is a frontend developer whose native language is javascript. Emrah-Aras also develops Discord bots using node.js. His website is emraharas.xyz.',
      },
      {
        property: 'twitter:image',
        content:
          'https://cdn.discordapp.com/avatars/441221465019514881/a_1c54ceea979bb2ea395d0002a6e95e53.png?size=256',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.discordapp.com/avatars/441221465019514881/a_1c54ceea979bb2ea395d0002a6e95e53.png?size=256' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://http.nuxtjs.org/setup
    '@nuxt/http',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}