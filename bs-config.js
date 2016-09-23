/**
 * Created by student on 9/22/2016.
 */

"use strict";

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var config = require('./webpack.config');
var bundler = webpack(config);

module.exports = {

    files: ['dist'],

    server: {
        port: 3000,

        middleware: {
            2: webpackDevMiddleware(bundler, {
                publicPath: config.output.publicPath,
                stats: 'minimal',
                historyApiFallback: true,
                watchOptions: {
                    poll: 100
                }
            })
        }
    }
};