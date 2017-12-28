/**
 * Created by cjy on 16/11/23.
 */
const path = require('path');
const webpack = require('webpack');
const vendors = require('./vendors.json');

module.exports = {
	output: {
		path: path.resolve(__dirname, './vendor'),
		filename: '[name].[chunkhash].js',
		library: '[name]_[chunkhash]',
	},
	entry: {
		vendor: vendors,
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]_[chunkhash]',
			path: path.join(__dirname, "./vendor/manifest.json"),
			context: __dirname,
		}),
	],
};