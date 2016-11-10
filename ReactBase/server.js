var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');


new webpackDevServer(webpack(config),{
	contentBase:__dirname + '/prd',
	inline:true,
	hot :true,
	historyApiFallback:true,
	proxy:{
		'/rest/*':{
			target:'http://localhost:8888',
			secure:true,
			pathRewrite:{
				'^/reset':''
			}
		}
	}
})
.listen(80,'localhost',function(err,result){
	if(err){
		console.log(err)
	}else{
		console.log('listern at localhost:80');
	}
})
























