// 自动添加 css 兼容属性
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [ //浏览器列表
                'ie>=8',
                'Firefox>=20',
                'Safari>=5',
                'Android>=4',
                'Ios>=6',
                'last 4 version',
            ]
        })
    ]
}