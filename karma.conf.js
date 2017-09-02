const { argv } = require('yargs');
const ChromiumRevision = require('puppeteer/package.json').puppeteer
  .chromium_revision;
const Downloader = require('puppeteer/utils/ChromiumDownloader');
const revisionInfo = Downloader.revisionInfo(
  Downloader.currentPlatform(),
  ChromiumRevision
);
const SINGLE_RUN = argv.singleRun ? argv.singleRun === 'true' : true;
const COMPILER_OPTIONS = {
  ...require('./tsconfig.json').compilerOptions,
  module: 'commonjs'
};

process.env.CHROME_BIN = revisionInfo.executablePath;

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
      compilerOptions: COMPILER_OPTIONS
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: SINGLE_RUN,
    browserDisconnectTolerance: 5,
    browserNoActivityTimeout: 100000,
    captureTimeout: 60 * 1000
  });
};
