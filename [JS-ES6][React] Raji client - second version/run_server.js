/* eslint-env node */
/* eslint
    no-var: 0,
    no-console: 0,
    no-process-env: 0,
    prefer-arrow-callback: 0,
    prefer-const: 0,
    prefer-template: 0
*/
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

// Config
var port = process.env.PORT || 3000
var webpackConfig = webpack(config)
var serverConfig = {
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath
}

// Server
var server = new WebpackDevServer(webpackConfig, serverConfig)


// Start listening
server.listen(port, function(error, result) {
  if (error) return console.log(error)

  console.log('Listening at localhost:' + port)
})
