var htmlwp = require('html-webpack-plugin');

module.exports = {
	//指定打包的入口文件
  entry: './src/main.js', 
  output: {
  	//指定输出路径
    path: __dirname + '/dist', 
    //指定输出文件名
    filename: 'build.js' 
  },
  module: {
    loaders: [{
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/, 
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif|ttf|svg)$/, 
        loader: 'url-loader?limit=40000'
      },
      {
        //将当前项目中所有的.js文件都要进行es6转es操作
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        //node_modules中的所有.js文件不去转换，提高打包性能
        exclude: /node_modules/
      },
      {
      	//解析.vue组件页面的文件
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      {
      	//vue-preivew组件专用
        test: /vue-preview.src.*?js$/, 
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new htmlwp({
      title: '首页', 
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}