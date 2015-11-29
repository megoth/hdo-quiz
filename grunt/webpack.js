var config = require('../webpack.config.js');
var _ = require('underscore');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  prod: _(config).extend({
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
};