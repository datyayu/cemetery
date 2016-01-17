const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const BASE_DIR = __dirname;
const ENTRY_PATH = path.resolve(BASE_DIR, 'src', 'index.js');
const OUTPUT_PATH = path.resolve(BASE_DIR, 'build');
const development = process.env.NODE_ENV !== 'production';
const serverPort = process.env.PORT || 3000;


module.exports = {
  devtool: development ? 'source-maps' : null,

  resolve: { extensions: ['', '.js', '.jsx'] },

  entry: development ? [
    // `webpack-dev-server/client?http://0.0.0.0:${serverPort}`,
    // 'webpack/hot/only-dev-server',
    ENTRY_PATH,
  ] : ENTRY_PATH,

  output: {
    path: OUTPUT_PATH,
    publicPath: '/',
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
        test: [ /\.js$/, /\.jsx$/ ],
        loaders: development ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: development ? [
    new HtmlWebpackPlugin({ title: 'GraphQL Chat Development Enviroment' }),
    new webpack.HotModuleReplacementPlugin(),
  ] : [],


  devServer: {
    colors: true,
    contentBase: BASE_DIR,
    historyApiFallback: true,
    host: '127.0.0.1',
    noInfo: false,
    port: serverPort,
    publicPath: '/',
    quiet: false,
  },
};
