/**
 * Created by cjy on 16/11/23.
 */
const path = require('path');
const webpack = require('webpack');
const vendors = require('./vendors.json');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist/dll'),
		filename: 'vendor.[chunkhash].js',
		library: '[name]',
	},
	entry: {
		vendor: vendors,
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true,
			minimize: true,
			uglifyOptions: {
				warnings: false,
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		}),
		new webpack.DllPlugin({
			name: '[name]',
			path: path.join(__dirname, "../dist/dll/manifest.json"),
			context: __dirname,
		}),
	],
};