/* eslint-env node*/
var gulp    = require('gulp')
var connect = require('gulp-connect')

var browserify = require('browserify')
var babelify   = require('babelify')
var buffer     = require('vinyl-buffer')
var source     = require('vinyl-source-stream')
var uglify     = require('gulp-uglify')

var config  = require('./config')
var paths   = config.paths
var onError = config.onError


gulp.task('watch::scripts', ['[dev] scripts'], function () {
  gulp.watch(paths.scripts.src, ['[dev] scripts'])
})


gulp.task('[dev] scripts', function () {
  return browserify({
    entries: paths.scripts.entry,
    transform: [ babelify]
  })
  .bundle()
  .on('error', onError)
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(connect.reload())
})


gulp.task('[prod] scripts', function () {
  return browserify({
    entries: paths.scripts.entry,
    transform: [ babelify]
  })
  .bundle()
  .on('error', onError)
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(connect.reload())
})
