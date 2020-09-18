const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    resolve: {
        alias: {
            'san$': 'san/dist/san.min.js',
        }
    },
    entry: {
        san: ['san']
    },
    output: {
        path: path.resolve(__dirname, 'dist/dll'),
        filename: '[name].dll.js',
        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, 'dist/dll', '[name].manifest.json')
        })
    ]
}