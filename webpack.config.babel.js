'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var rootPath = path.join(__dirname);

module.exports = {
  devtool: 'eval',
  entry: {
    index: path.join(rootPath, 'src/assets/javascript/main.js'),
  },
  output: {
    path: path.join(rootPath, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new ExtractTextPlugin("[name]-[hash].min.css"),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(rootPath,'src/assets/static/images'), to: 'assets/image' },
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
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/"
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              },
              "sass-loader"
          ],
          publicPath: "/"
        })
      },
    ]
  },
};
