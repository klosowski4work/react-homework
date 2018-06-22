import nodeExternals from 'webpack-node-externals';
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: ['babel-polyfill', './serverRenderer.js'],
    output: {
        filename: 'serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
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
                include: /src/,
                use: ['css-loader', 'sass-loader']
            },
        ]
    }
});