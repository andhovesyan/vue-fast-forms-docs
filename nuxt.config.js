module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-fast-forms-docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Fast Forms Docs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis|Source+Sans+Pro' }
    ],
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|vue-fast-forms)/
        })
      }
    },
  },
  styleResources: {
    scss: './assets/styles/main.scss',
  },
  plugins: [
    '~/plugins/vue-fast-forms',
  ],
}
