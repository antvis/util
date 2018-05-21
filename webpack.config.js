const webpack = require('webpack');
const resolve = require('path').resolve;
const pkg = require('./package.json');

module.exports = {
  entry: {
    util: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'Util',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'build/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /index\.js$/,
        use: {
          loader: 'string-replace-loader',
          options: {
            search: '____UTIL_VERSION____',
            replace: pkg.version
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
