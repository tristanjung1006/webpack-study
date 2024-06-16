var path = require('path');

module.exports = {
	// mode는 상대적으로 덜 중요함
	mode: 'production',
	// entry에서 output으로 변환할 때 module이 들어간다
	// entry는 변환 경로이자 최초 진입점
	entry: './js/app.js',
	// 웹팩을 돌리고 난 결과물의 파일 경로
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'
};
