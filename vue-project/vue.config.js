const { defineConfig } = require('@vue/cli-service')
const target = 'http://127.0.0.1:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  chainWebpack : config => {
    config.plugin.delete('prefetch')
  },
  devServer: {
    port : 8080,
    proxy : {
      '^/api' :{
        target,
        changeOrigin : true
      },
      '^/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
})