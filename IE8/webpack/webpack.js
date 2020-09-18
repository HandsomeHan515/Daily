const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        alias: {
            'san$': 'san/dist/san.min.js',
        }
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    }
}