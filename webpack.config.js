const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const processCss = isProduction ? '?minimize!postcss-loader' : ''
const entryEnv = isProduction ? './src/index.js' : [ './src/index.js', './src/index.scss' ]

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8888
  },
  entry: entryEnv,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-0']
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: `css-loader${processCss}!sass-loader`
        }),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|jpe?g|png|gif|svg)$/i,
        loader: 'url-loader'
      },
      {
         test: /\.html$/,
         loader: 'raw-loader'
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true,
      disable: !isProduction
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
