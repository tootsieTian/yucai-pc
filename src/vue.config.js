
const autoprefixer = require('autoprefixer')  // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 192,
            propList: ["*"], //可以从px更改为rem的属性。
          })
        ]
      }
    }
  },
  devServer: {
    open: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/TESTAPI': {
        target: 'https://api.yucaiedu.com',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/TESTAPI': ''//请求的时候使用这个api就可以
        }
      }
    }
  }
}
