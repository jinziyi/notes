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
		new webpack.DllReferencePlugin({
			context: __dirname,
			name: 'vendor',
			manifest: require("../dist/dll/manifest.json"), // eslint-disable-line
			extensions: [".js", ".jsx"]
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
					},
				]
			},
			// {
			// 	test: /\.bundle\.js$/,
			// 	use: [{
			// 		loader: 'bundle-loader',
			// 		options: {
			// 			lazy: true,
			// 			name: '[name]'
			// 		}
			// 	}]
			// },
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets/images/',
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets/fonts/',
							limit: 8192
						}
					}
				]
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
		alias: {
			'components': __dirname + '/../src/components',
			'containers': __dirname + '/../src/containers',
			'constants': __dirname + '/../src/constants',
			'actions': __dirname + '/../src/redux/reducers',
		}
	}
};