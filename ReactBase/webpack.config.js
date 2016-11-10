var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  // 入口
  entry: [
  		//热替换start
  		'webpack-dev-server/client?http://localhost:80',
  		'webpack/hot/only-dev-server',
  		//热替换end
  		__dirname + '/src/scripts/app.js'
  ],
  
  
  // 出口
  output: {
    path: __dirname + '/prd',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },

  // sourcemap
  devtool: 'source-map',

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        exclude:/node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      },
      {
        test: /\.string$/,
        loader: 'string'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  vue: {
      loaders: {
          js: 'babel'
      }
  },

  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    //文件抽离
    new ET('bundle.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

}
