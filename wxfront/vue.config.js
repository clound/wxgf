const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
module.exports = {
  publicPath: BASE_URL,
  productionSourceMap: false,
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.88.76:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
