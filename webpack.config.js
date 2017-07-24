var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var nodeEnv	= process.env.NODE_ENV;
var css  = nodeEnv === 'production' ? 'css' : 'css?sourceMap';

module.exports = {
	resolve: {
		modulesDirectories: ["node_modules", "components", "redux", "constants"],
		extensions: ['', '.js', '.jsx']
	},

	entry: [
		'./components/routes.jsx',
	],

	output: {
		path: __dirname + "/build/",
		filename: "bundle.js",
		publicPath: "/build/"
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],

	module: {
		loaders: [
			{
				test: /\.js.*$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},
			{
				test: /\.(otf|svg|eot|woff|woff2|ttf|jpg|png|gif)$/,
				loaders: ['url-loader']
			},
			{
				test: /\.json$/,
				loaders: ['json']
			}
		]
	},

	postcss: function() {
		return [autoprefixer]
	}
};
