const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('babel-polyfill');

module.exports = () => {
  const isProduction = false;
  const config = {
    context: path.join(__dirname, 'src'),

    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    entry: ['babel-polyfill', './index.jsx'],

    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './built'),
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            plugins: ['transform-decorators-legacy'],
          },
        },
        {
          test: /\.(jpg)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.scss/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'React epam course',
        template: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],

    devServer: {
      inline: true,
      contentBase: './',
      historyApiFallback: true,
    },

    watch: true,

  };
  return config;
};
