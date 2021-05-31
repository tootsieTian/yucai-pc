
const autoprefixer = require('autoprefixer')  // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')

module.exports = {
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
  }
}
