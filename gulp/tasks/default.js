'use strict';

const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task(
  'default',
  sequence(['clean', 'lint', 'docs'], ['test:single-run', 'build'], 'uglify')
);
