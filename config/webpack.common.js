/**
 * Created by cjy on 16/11/23.
 */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
		new ExtractTextPlugin('[name].css'),
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
		],
	},
};