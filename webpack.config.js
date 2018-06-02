const SaveHashes = require('assets-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production'

module.exports = [
  {
    mode: 'production',
    entry: {
      main: './client/main/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist',
      publicPath: '/assets/'
    },
    plugins: [
      new SaveHashes({path: path.join(__dirname, 'config', 'assets'), filename: 'main.json'}),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        _DEV: false
      }),
      new CompressionPlugin()
    ],
    // devtool: 'source-map',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'mainVendor',
            chunks: 'initial',
            enforce: true
          }
        },
      },
    },
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    }
  },
  {
    mode: 'production',
    entry: {
      index: './views/main.pug'
    },
    output: {
      filename: '[name].html',
      path: __dirname + '/dist',
      publicPath: '/assets/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'index.html',
        template: './views/main.pug'
      })
    ],
    module: {
      rules: [
        {test: /\.pug$/, use: ['html-loader', 'pug-html-loader?pretty&exports=false']}
      ]
    }
  }
]