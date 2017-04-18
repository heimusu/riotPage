const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
   {
      // 対象のjsファイル
      entry: './app/app.js',
      output: {
         path: __dirname + '/build/',
         filename: 'bundle.js'
      },
      module: {
         preLoaders: [
            {
               test: /\.tag$/,
               exclude: /node_modules/,
               loader: 'riot-tag-loader'
            }
         ],
         loaders: [
            {
               test: /\.js|\.tag$/,
               exclude: /node_modules/,
               loader : 'babel-loader',
               query  : {
                  presets: ['es2015-riot']
               }
            }
         ]
      },
      resolve: {
         extensions: ['', '.js', '.tag']
      },
      plugins: [
         new webpack.optimize.OccurenceOrderPlugin(),
         new webpack.ProvidePlugin({ riot: 'riot' })
      ]
  },{
      context: path.join(__dirname, 'scss'),
      entry: {
          style: './index.scss'
      },
      output: {
          path: path.join(__dirname, 'css'),
          filename: '[name].css'
      },
      module: {
          loaders: [
              {
                  test: /\.css$/,
                  loader: ExtractTextPlugin.extract("style-loader", "css-loader")
              },
              {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url&minimize&sourceMap!sass-loader')
              }
          ]
      },
      devtool: 'source-map',
      plugins: [
          new ExtractTextPlugin('[name].css')
      ]
  }
]
