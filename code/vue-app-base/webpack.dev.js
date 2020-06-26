// 存放 dev 配置
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
    devtool: 'inline-source-map', // 配置开发过程中的辅助工具
    devServer: { // 开发服务器
        port: 8090
    },
    output: {
        filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
        path: path.resolve(__dirname, 'dist') // output 需要是一个完事的绝对路径
    },
    module: {},
    mode: 'development'
})