/* eslint-env node*/
var gulp = require('gulp')
var fs   = require('fs')
var path = require('path')


// Export task from the gulp folder.
fs
  .readdirSync(path.join(__dirname, 'gulp'))
  .forEach(function (task) {
    require('./gulp/' + task)
  })


gulp.task('serve',     ['watch::layouts', 'watch::styles', 'watch::scripts', 'server'])
gulp.task('build-dev', ['[dev] layouts', '[dev] styles', '[dev] scripts'])
gulp.task('build',     ['layouts', 'styles', 'scripts'])
gulp.task('default',   ['build'])
