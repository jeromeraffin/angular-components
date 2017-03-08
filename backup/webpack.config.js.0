const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.css$/,
            loaders: [
            'style-loader',
            'css-loader?importLoaders=1'
            // 'postcss-loader'
            ]
        }
      // Loaders for other file types can go here
    ],
  },
  plugins: [new HtmlWebpackPlugin( {
      template: 'public/index.html',
      hash: true
  })
  ],
};
