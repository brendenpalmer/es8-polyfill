'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const tsProject = ts.createProject('./tsconfig.json');

gulp.task('build', () => {
  const tsResult = gulp
    .src(['src/**/*.ts', '!src/**/*.spec.ts'])
    .pipe(tsProject());

  return merge([
    tsResult.js.pipe(gulp.dest('lib')),
    tsResult.dts.pipe(gulp.dest('lib'))
  ]);
});
