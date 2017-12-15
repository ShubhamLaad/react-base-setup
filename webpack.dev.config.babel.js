'use strict';

import Path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const RootPath = Path.join(__dirname);
const BUILD = Path.join(__dirname, 'build');
const SOURCE = Path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  entry: {
    index: Path.join(RootPath, 'src/assets/javascript/main.js'),
  },
  output: {
    path: Path.join(RootPath, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(SOURCE, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: Path.join(RootPath,'src/assets/static/images'), to: 'assets/images' },
    ]),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.sass', '.css'],
    alias: {
      components: Path.resolve(__dirname, 'src/assets/javascript/components/'),
    },
  },
  module: {
    rules: [
      { test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3030,
    contentBase: BUILD,
    hot: true,
    inline: true
  }
};
