// 存放 dev 和 prod 通用配置
const webpack = require('webpack')
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack 配置对象可以是一个数组，数组中的每一个元素就是一个单独的打包配置，这样就可以在一次打包过程中同时执行多个打包任务
// module.exports = [{}, {}]
module.exports = {
  entry: './src/main.js', // 项目的入口文件
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.((webm|png|svg|jpg|jpeg|gif|blob))$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024, // 对大小为 8KB 以内的文件转换dataUrl的形式
              esModule: false,
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 解决 vender 后面的 hash 每次都改
    // new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      templateParameters: {
        BASE_URL: process.env.BASE_URL || '',
      },
    }), // 生成一个使用打包结果的 html 文件
    new CleanWebpackPlugin()
  ], // 插件
}