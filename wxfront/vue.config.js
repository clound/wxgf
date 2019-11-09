const BASE_URL = process.env.NODE_ENV === 'production' ? '/node' : '/node'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: BASE_URL,
  productionSourceMap: false,
  chainWebpack: config => {
    // 修复HMR
    config.resolve
      .symlinks(true)
      .alias.set('@', resolve('src'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.dyry.top/node',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
