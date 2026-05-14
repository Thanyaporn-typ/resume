const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/resume/',

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'resume'
    }
  }
})