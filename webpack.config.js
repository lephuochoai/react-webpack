const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'
const IS_DEV = NODE_ENV === 'development'

module.exports = {
  devtool: IS_DEV ? 'source-map' : false,
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'static/js/[name].[fullhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    },
    {
      test: /\.scss$/,
      use: [
        IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.(jpg|jpeg|png|svg|woff|eot|ttf|otf|pdf)$/,
      use: ['file-loader']
    },
    {
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }  
        }
      ]
    }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', './index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico')
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name][hash].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: process.env.HOST || '0.0.0.0',
    useLocalIp: true,
    compress: true,
    disableHostCheck: true,
    hot: true,
    hotOnly: true,
    open: true,
    overlay: false,
    stats: 'minimal',
    clientLogLevel: 'warning',
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
  },
  mode: IS_DEV ? 'development' : 'production'
}