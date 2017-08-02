var path = require('path')

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
}
