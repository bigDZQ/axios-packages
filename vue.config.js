// console.log(process.env)
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.zouzhengming/api/v1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
