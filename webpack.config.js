const path = require('path');
const webpack = require('webpack');


let buildEntryPoint = function (entryPoint) {
	return [
		'webpack-dev-server/client?http://localhost:8080',
		entryPoint
	]
};

module.exports = {
	mode: "development",
	entry: {
		file1: buildEntryPoint('./src/index.js'),
		file2: buildEntryPoint('./src/index2.js')
	},
	plugins: [

		/*	new HtmlWebpackPlugin({
				inject: false,
				template: path.join(__dirname, '/public/index.html')
			}),*/
	],
	output: {
		filename: '[name].js',

		path: path.resolve(__dirname, './public/dist'),
		library: "[name]"
	},


	module: {

		rules: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: {
					presets: ['react', 'env']
				}, include: path.join(__dirname, 'src')
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			}
		]

	},
	devServer: {
		host: 'localhost',
		port: 8080,
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		watchContentBase: true,
		hot: true,
		inline: true
	}

};