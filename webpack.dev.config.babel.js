'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

var rootPath = path.join(__dirname);

module.exports = {
  devtool: 'eval',
  entry: {
    index: path.join(rootPath, 'src/assets/javascript/main.js'),
  },
  output: {
    path: path.join(rootPath, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(rootPath,'src/assets/static/images'), to: 'assets/images' },
    ]),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: true
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.sass$/,
        use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS]
          ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/,/vendor/],
        loader: "eslint-loader"
      },
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: './src',
    hot: true,
    inline: true
  }
};
