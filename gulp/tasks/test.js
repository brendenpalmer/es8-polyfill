'use strict';

const gulp = require('gulp');
const { Server } = require('karma');
const shell = require('gulp-shell');

gulp.task(
  'test',
  shell.task([`karma start ${__dirname}/../../karma.conf.js`], {
    verbose: true
  })
);
