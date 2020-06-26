// 存放 prod 配置
const path = require('path')
// 合并配置文件
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    module: {},
    plugins: [],
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:8].js', // contenthash 若文件内容无变化，则 contenthash 名称不变
        path: path.resolve(__dirname, 'dist')
    }
})