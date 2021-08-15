const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: 'img/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            name: 'vendor',
            automaticNameDelimiter: '_',
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'pemain.html',
            template: './src/players.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'berita.html',
            template: './src/news.html',
        }),
    ],
}
