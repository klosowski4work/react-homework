const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("babel-core/register");
require("babel-polyfill");

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',

    entry: ['babel-polyfill', './client.jsx', isDevMod && 'webpack-hot-middleware/client'].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(jpg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: '/',
                },
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        isDevMod && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
});