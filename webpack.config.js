const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index/index.js',
  devServer: {
    hot: true
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index/index.html' 
    }),
    new webpack.ProvidePlugin({
      'React': 'react',
      'MobX': 'mobx',
      'MobXLite': 'mobx-react-lite',
    })
  ]
};