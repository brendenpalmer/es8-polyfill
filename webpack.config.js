const path = require('path');
const webpack = require('webpack');
const { argv } = require('yargs');
const { CheckerPlugin } = require('awesome-typescript-loader');
const isProduction = Boolean(argv.prod);

function getPlugins() {
  const plugins = [];

  plugins.push(
    ...[
      new CheckerPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  );

  if (argv.prod) {
    plugins.push(
      ...[
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
      ]
    );
  }

  return plugins;
}

module.exports = {
  context: __dirname,

  entry: {
    main: './src/main.ts'
  },

  devtool: argv.prod ? '' : 'inline-source-map',
  target: 'web',

  output: {
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProduction
      ? '[name].[chunkhash].chunk.js'
      : '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: './tsconfig.json'
        }
      }
    ]
  },

  plugins: getPlugins(),

  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: true,
    compress: true,
    historyApiFallback: true
  }
};
