var path =require('path');
var webpack = require('webpack');

module.exports ={
  node: {
    fs: 'empty'
  },
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js',
      publicPath: path.join(__dirname, '/dist/')
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module:{
    loaders:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader','babel-loader']
      }
    ]
  }
}
