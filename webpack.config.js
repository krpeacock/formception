var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
require('babel-polyfill');
module.exports = {
    devtool: 'source-map',
    // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
    entry: [
        // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'index.tsx'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: 'app.js',
        publicPath: '/',
        path: path.resolve('dist')
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', 'css'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'ts-loader']
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ]
};