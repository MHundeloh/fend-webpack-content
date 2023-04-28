const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "src/client/build/js"),
        filename: 'main.js',
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            }
        ],
    }
}
