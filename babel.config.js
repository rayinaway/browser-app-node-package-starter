module.exports = (api) => {
	api.cache(true);

	return {
		presets: ['@babel/preset-env', '@babel/preset-typescript'],
		plugins: [
			[
				'babel-plugin-module-resolver',
				{
					alias: {
						'^~/(.*)$': './\\1',
						'^~~/(.*)$': './src/\\1'
					}
				}
			]
		]
	};
};
