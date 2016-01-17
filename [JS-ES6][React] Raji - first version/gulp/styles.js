/* eslint-env node*/
var gulp       = require('gulp')
var plumber    = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var connect    = require('gulp-connect')

var stylus     = require('gulp-stylus')
var nib        = require('nib')

var config  = require('./config')
var paths   = config.paths
var onError = config.onError


gulp.task('[dev] styles', function () {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(stylus({ compress: false, use: nib() }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(connect.reload())
})

gulp.task('[prod] styles', function () {
  return gulp.src(paths.styles.src)
    .pipe(stylus({ compress: true, use: nib() }))
    .pipe(gulp.dest(paths.styles.dest))
})

gulp.task('watch::styles', ['[dev] styles'], function () {
  gulp.watch([
    paths.styles.src,
    paths.styles.componentsDir
  ], ['[dev] styles'])
})
