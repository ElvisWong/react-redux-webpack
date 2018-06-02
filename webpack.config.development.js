const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

module.exports = {
  mode: 'development',
  entry: {
    main: [hotMiddlewareScript, './client/main/index.js']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/assets/'
  },
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      _DEV: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}