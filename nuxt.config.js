export default {
  head: {
    title: 'My Blog',
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
    ]
  },
  css: ['~/static/styles.css'],
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
}
