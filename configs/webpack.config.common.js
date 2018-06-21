const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require("babel-polyfill");

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.join(__dirname, "../src"),

    mode: process.env.NODE_ENV,
    devtool: isDevMod ? "source-map" : "none",

    resolve: {
        extensions: [".js", ".jsx"]
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../built'),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy'],
                }
            },

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

    devServer: {
        inline: true,
        contentBase: './',
        historyApiFallback: true,
    },

    watch: true

}