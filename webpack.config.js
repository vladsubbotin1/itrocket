module.exports = {
	resolve: {
		extensions: ['js', 'jsx', 'ts', 'tsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
}
