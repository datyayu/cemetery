/* eslint-env node */
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

/* Routes */
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.join(ROOT_PATH, 'build');


module.exports = {
  entry: APP_PATH,

  resolve: { extensions: ['', '.js', '.jsx', '.scss'] },

  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['react-hot', 'babel'],
        include: APP_PATH,
      },
      {
        test: [/\.scss$/],
        loaders: ['react-hot', 'style', 'css', 'sass'],
        include: APP_PATH,
      },
    ],
  },

  plugins: [
    new HtmlwebpackPlugin({ title: 'EA Admin Panel' }),
  ],

  devServer: {
    historyApiFallback: true,
    progress: true,
  },

  devtool: 'source-maps',
};
