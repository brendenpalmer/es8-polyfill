'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { debounce } = require('lodash');
const docsDir = `${__dirname}/../../docs`;

gulp.task('serve:docs', ['docs'], () => {
  browserSync.init({
    server: {
      baseDir: docsDir
    }
  });

  gulp.watch(`${docsDir}/*`).on('change', debounce(browserSync.reload, 250));
});
