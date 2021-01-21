var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');
var path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'reactstrap'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(svg|gif|png|jpg|jpeg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      '$components': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.min.css'
    }),
    new Dotenv()
  ]
};
