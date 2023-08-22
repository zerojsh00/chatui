const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    devtool: "source-map",
  },

  devServer: {
    proxy: {
      "/chat/": {
        target: "http://127.0.0.1:8000",
        ws: true,
        changeOrigin: true,
        web: {
          cors: true,
        },
      },
    },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
