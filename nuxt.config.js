export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'grh_app_front_only_v2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'absence-show-id',
        path: '/Absence/show/:id',
        component: resolve(__dirname, 'pages/Absence/show_id.vue'),
      });
      routes.push({
        name: 'employe-show-id',
        path: '/Employes/show/:id',
        component: resolve(__dirname, 'pages/Employes/show_id.vue'),
      });

      routes.push({
        name: 'absence-edit-id',
        path: '/Absence/edit/:id',
        component: resolve(__dirname, 'pages/Absence/edit_id.vue'),
      });
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/chart", ssr: false
    },
    {
      src: "~/plugins/hchs-vue-charts", ssr: false
    },
    { src: '~/plugins/darkMode.js', mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: 'http://127.0.0.1:8000/api/v1/',

  //   credentials: true,

  // },
  axios: {
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.BROWSER_BASE_URL,
    // browserBaseURL: "https://api.cacsenegal.com/api/v1",
    // baseURL: "https://api.cacsenegal.com/api/v1",
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_BASE_URL,
      baseURL: process.env.BROWSER_BASE_URL,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
      browserBaseURL: process.env.API_BASE_URL
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // server: {
  //   port: 53654,
  //   host: '192.168.1.7',
  //   timing: false // default: localhost
  // }
}
