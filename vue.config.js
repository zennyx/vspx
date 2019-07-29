module.exports = {
  // https://cli.vuejs.org/zh/config/#configurewebpack
  configureWebpack: config => {
    config.resolve.extensions.push(".scss");
  },
  devServer: {
    // https://cli.vuejs.org/zh/config/#lintonsave
    overlay: {
      warnings: true,
      errors: true
    },
    // https://cli.vuejs.org/zh/config/#devserver-proxy
    proxy: {
      "/api": {
        target: process.env.PROXY_TARGET, // target host, e.g. "http://localhost:8080"
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy web sockets
        pathRewrite: {
          "^/api": "" // rewrite path or remove base path
        }
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true
};
