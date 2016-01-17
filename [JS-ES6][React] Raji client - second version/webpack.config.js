/* eslint-env node */
/* eslint no-var: 0 */
var path = require('path');
var Webpack = require('webpack');

module.exports = {
  devtool: 'source-maps',

  eslint: {
    configFile: path.join(__dirname, '.eslintrc')
  },

  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${process.env.PORT || 3000}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app', 'lib', 'entry.js')
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: [/\.json$/],
        loaders: ['react-hot', 'json'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.HotModuleReplacementPlugin()
   ],

  devServer: {
    colors: true,
    contentBase: __dirname,
    historyApiFallback: true,
    host: '127.0.0.1',
    hot: true,
    noInfo: false,
    port: 8000,
    publicPath: '/public/',
    quiet: false
  }
};
