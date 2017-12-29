/**
 * Created by cjy on 16/11/23.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// devtool: 'eval-source-map',
	devtool: 'inline-source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	devServer: {
		stats: {
			assets: true,
			modules: false,
		},
		contentBase: path.resolve(__dirname, '../dist'),
		historyApiFallback: true,
		hot: true,
		port: 3000,
		clientLogLevel: 'info',
		compress: true,
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[local]-[hash:base64:5]',
						}
					}, 'sass-loader', {
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: (loader) => [
								require('postcss-cssnext')(),
							]
						}
					},
				]
			},
		]
	}
});