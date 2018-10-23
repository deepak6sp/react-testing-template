var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: false, //just run once by default
    frameworks: [ 'jasmine' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    reporters: [ 'dots' ], //report results in this format
    webpack: webpackConfig,
    preprocessors: {
        'tests.webpack.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
      },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};