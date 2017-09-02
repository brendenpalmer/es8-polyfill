'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');

gulp.task('build', () => {
  const tsResult = gulp
    .src(['src/**/*.ts', '!src/**/*.spec.ts'])
    .pipe(tsProject());

  return tsResult.js.pipe(gulp.dest('lib'));
});
