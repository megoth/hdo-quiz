var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: "app.js"
    },
    module: {
      loaders: [
        { test: /\.html$/, loader: "raw-loader" },
        { test: /\.scss$/, loaders: ["style", "css", "sass"] }
      ]
    },
    resolve: {
      alias: {
        'ionic': './lib/ionic/js/ionic.js',
        'ionic-angular': './lib/ionic/js/ionic-angular.js'
      }
    }
};