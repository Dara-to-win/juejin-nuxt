export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'juejin-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    bodyAttrs: {
      class: "theme-white"
    }
  },
  experimental: {
    writeEarlyHints: false,
  },
  env:{
    NODE_ENV:process.env.NODE_ENV,
    NODE_URL:process.env.NODE_URL,
  }, // 在组件中用process.env.NODE_ENV区分是生产环境还是开发环境
  server: {
    // 默认localhost 只能本地访问
    // 若想要对外访问，要配置为 0.0.0.0
    host: '0.0.0.0',
    // nuxtjs 默认 3000
    // vercel 默认80
    port: 80,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/static/css/css.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/throttle&debounce',
    '@/plugins/bus',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
