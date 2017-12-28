/**
 * Created by cjy on 16/11/23.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		stats: {
			assets: true,
			modules: false,
		},
		historyApiFallback: true,
		hot: true,
		port: 3000,
		compress: true,
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new webpack.DllReferencePlugin({
			scope: "beta",
			manifest: require("./vendor/manifest.json"), // eslint-disable-line
			extensions: [".js", ".jsx"]
		})
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