var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
module.exports = {
	entry:APP_DIR + '/jsx/main.jsx',
	output:{filename:DIST_DIR + '/js/bundle.js'},
	module:{
		loaders:[
			{
				test : /\.jsx?/,
        		loader : 'babel',
        		query:{
					presets:['react']
				},
        		include: APP_DIR,
				exclude:/(bower_components)/
			},
			{
				test:/\.scss$/,
				loaders:['style', 'css', 'sass'],
				include: APP_DIR,
				exclude:/(node_modules|bower_components)/
			},
			{
				test: /\.png$/, loader: "url-loader?mimetype=image/png"
			}
		]
	},
	externals: { 'React': 'react'},
	resolve: {extensions: ['', '.js', '.jsx']}
}