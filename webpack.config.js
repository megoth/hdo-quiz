var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { 
        test: /\.js$/,
        loader: 'babel', 
        exclude: [/node_modules/, /app\/lib/],
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
}
};