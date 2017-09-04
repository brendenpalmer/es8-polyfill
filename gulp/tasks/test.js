'use strict';

const gulp = require('gulp');
const { Server } = require('karma');
const shell = require('gulp-shell');
const karmaConfig = `${__dirname}/../../karma.conf.js`;

gulp.task('test', done => {
  new Server(
    {
      configFile: karmaConfig,
      singleRun: false
    },
    () => {
      done();
    }
  ).start();
});

gulp.task(
  'test:single-run',
  shell.task([`karma start ${karmaConfig} --single-run=true`], {
    verbose: true
  })
);
