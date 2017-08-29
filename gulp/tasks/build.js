'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

gulp.task('build', callback => {
  // run webpack
  webpack(require('../../webpack.config'), function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log(
      '[webpack]',
      stats.toString(
        {
          // output options
        }
      )
    );
    callback();
  });
});
