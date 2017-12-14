/**
 * Created by cjy on 16/11/23.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.resolve(__dirname + '/../');

module.exports = {
	entry: {
		app: [
			'babel-polyfill',
			'react-hot-loader/patch',
			'./src/index.js'
		],
		vendor: ['react', 'react-dom', 'babel-polyfill'],
	},
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	context: root,
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
				}]
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
	}
};