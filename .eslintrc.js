module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names":0,
    "vue/first-attribute-linebreak":0,
    "vue/attribute-hyphenation":0,
    'vue/no-template-shadow':0,
    'vue/no-v-html':0,
    'vue/order-in-components':0,
    'no-console':0,
  }
}
