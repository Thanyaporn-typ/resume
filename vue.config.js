const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/disaster-management-system/',

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Disaster Management System'
    }
  }
})