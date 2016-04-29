// todo
 /**
 * [owl-styles]
 * (c) jj <jj@cepave.com>
 */

// todo >
  // Require all gulp tasks.
  // require('./tasks/clean');
  // require('./tasks/wiredep');
  // require('./tasks/build');
  // require('./tasks/serve');

  // Import packages.
  // var config = require('./tasks/.taskconfig');
  // var sequence = require('run-sequence');

var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

// todo >
  // gulp.task('default', function(callback) {
  //   var seq = ['clean', 'build', 'serve'];
  //   if (config.env.serve) seq.push('serve');
  //   seq.push(callback);

  //   sequence.apply(null, seq);
  // });

gulp.task("webpackDevServer", function() {
  webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:3002", "webpack/hot/dev-server");
  var compiler = webpack(webpackConfig);
  var server = new WebpackDevServer(compiler, {
    contentBase: './static/',
    publicPath: '/build/',
    hot: true,
    debug: true,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true
    }
  }).listen(3002, function(err) {});
});
