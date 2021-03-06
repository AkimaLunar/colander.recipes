var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./app/app.js", "./scss/main.scss"],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.ProvidePlugin({
      algoliasearch: 'algoliasearch'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'templates/index.hbs',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'templates/splash.hbs',
      filename: 'splash.html'
    }),
    new HtmlWebpackPlugin({
      template: 'templates/404.hbs',
      filename: '404.html'
    })
  ]
};