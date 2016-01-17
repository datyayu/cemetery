/* eslint-env node*/
var gulp       = require('gulp')
var plumber    = require('gulp-plumber')
var connect    = require('gulp-connect')

var sourcemaps = require('gulp-sourcemaps')
var jade       = require('gulp-jade')

var config  = require('./config')
var paths   = config.paths
var onError = config.onError


gulp.task('[dev] layouts', function () {
  return gulp.src(paths.layouts.src)
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.layouts.dest))
    .pipe(connect.reload())
})

gulp.task('[prod] layouts', function () {
  return gulp.src(paths.layouts.src)
    .pipe(jade())
    .pipe(gulp.dest(paths.layouts.dest))
})

gulp.task('watch::layouts', ['[dev] layouts'], function () {
  gulp.watch([
    paths.layouts.src,
    paths.layouts.componentsDir
  ], ['[dev] layouts'])
})
