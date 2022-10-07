const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    host: "localhost",
    proxy: {
      '^/api': {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          '^/api': ""
        },
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        utils: '@/utils',
        network: '@/network',
        views: '@/views',
        router: '@/router',
        store: '@/store',
        hooks: '@/hooks',
        assets: '@/assets',
        baseUi: '@/baseUi'
      }
    }
  }
})
