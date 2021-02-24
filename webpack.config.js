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
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                '@primary-color': '#1DA57A',
                '@link-color': '#1DA57A',
                '@success-color': '#52c41a',
                '@warning-color': '#faad14',
                '@error-color': ' #f5222d',
                '@font-size-base': '14px',
                '@heading-color': 'rgba(0, 0, 0, 0.85)',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
                '@disabled-color': 'rgba(0, 0, 0, 0.25)',
                '@border-radius-base': '2px',
                '@border-color-base': '#d9d9d9',
                '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                '@height-base': '40px'
              },
              javascriptEnabled: true,
            },
          }
        }
      ]
    }]
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