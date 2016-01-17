/* eslint-env node*/
var gutil = require('gulp-util')


var paths = {
  layouts: {
    componentsDir: './app/components/**/*.jade',
    src: './app/views/**/*.jade',
    dest: './app/public/assets/html/'
  },

  styles: {
    componentsDir: './app/lib/stylesheets/**/*.styl',
    src: './app/lib/stylesheets/styles.styl',
    dest: './app/public/assets/css/'
  },

  scripts: {
    entry: './app/lib/scripts/entry.jsx',
    src: ['./app/lib/scripts/**/*.jsx', './app/lib/scripts/**/*.js'],
    dest: './app/public/assets/js/'
  }
}

var onError = function (error) {
  gutil.log(gutil.colors.red(error))
  this.emit('end')
}


module.exports = {
  paths: paths,
  onError: onError
}
