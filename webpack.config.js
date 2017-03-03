const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    historyApiFallback: true,
    port: 8888
  },
  entry: './app/js/App.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
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
          presets: ['latest']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Goldilocks Prints',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      inject: 'body',
      template: './app/index.ejs',
      output: {
        publicPath: '/'
      }
    })
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}
