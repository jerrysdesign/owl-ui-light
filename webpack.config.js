var webpack = require("webpack"),
    sGrid = require('s-grid'),
    rupture = require('rupture'),
    koutoSwiss = require('kouto-swiss');

var config = {
  context: __dirname + '/src',
  entry: {
    button: ['./components/button/button.js'],
    app: ["./index"]
  },
  output: {
    filename: '[name].js',
    publicPath: './build/',
    path: __dirname + '/static/build'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus'
    }, {
      test: /\.png$/,
      loader: 'url?limit=100000&minetype=image/png'
    }, {
      test: /\.jpg$/,
      loader: 'file'
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    modulesDirectories: ['node_modules', "."]
  },
  devtool: 'eval',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  stylus: function() {
    return [sGrid, rupture, koutoSwiss]
  }
};

module.exports = config;
