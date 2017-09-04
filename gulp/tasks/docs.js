'use strict';

const gulp = require('gulp');
const typedoc = require('gulp-typedoc');

gulp.task('docs', () => {
  return gulp
    .src([
      './src/main.ts',
      './src/**/index.ts',
      './src/**/*.ts',
      '!./src/**/*.spec.ts'
    ])
    .pipe(
      typedoc({
        module: 'umd',
        out: './docs',
        name: 'ES8 Polyfill',
        // theme: 'minimal',
        ignoreCompilerErrors: true,
        version: true
      })
    );
});
