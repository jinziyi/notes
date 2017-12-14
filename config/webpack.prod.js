/**
 * Created by cjy on 16/11/23.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(
			[__dirname + '/../dist'],
			{
				root: __dirname + '/../',       　　　　	//根目录
				verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
				dry:      false        　　　　　　　　　　//启用删除文件
			}
		),
		new UglifyJSPlugin({
			sourceMap: true,
			minimize: true,
			uglifyOptions: {
				warnings: false,
			}
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
	],
})