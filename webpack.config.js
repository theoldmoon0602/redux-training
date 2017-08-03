var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [ './app.js' ],
    output: {
	path: path.join(__dirname, 'dist'),
	filename: 'app.js',
    },
    module: {
	loaders: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
		    'babel-loader'
		],
	    },
	],
    },
    cache: true,
    plugins: [
	new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
	contentBase: 'www',
	port: 8080,
	hot: true,
    }
}
