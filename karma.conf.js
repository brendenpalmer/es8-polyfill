'use strict';

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: './src/**/*.ts' }],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserDisconnectTolerance: 5,
    browserNoActivityTimeout: 50000,
    captureTimeout: 10000
  });
};
