'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');

gulp.task('lint', () =>
  gulp
    .src('src/**/*.ts')
    .pipe(
      tslint({
        formatter: 'verbose'
      })
    )
    .pipe(tslint.report())
);
