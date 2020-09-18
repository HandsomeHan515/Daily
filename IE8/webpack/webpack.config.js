const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

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
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: '管理系统',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
            }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, "./"),
            manifest: require("./dist/dll/san.manifest.json")
        })
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8090,
        compress: true, // 启用gzip压缩
        open: true,
    }
}