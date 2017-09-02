'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const { argv } = require('yargs');

gulp.task('uglify', cb => {
  if (argv.prod) {
    pump([gulp.src('lib/**/*.js'), uglify(), gulp.dest('lib')], cb);
  } else {
    cb();
  }
});
