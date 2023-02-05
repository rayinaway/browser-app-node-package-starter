module.exports = {
	testMatch: ['<rootDir>/src/**/*.test.js'],
	moduleNameMapper: {
		'^.*/assets/.*$': '<rootDir>/test/mocks/asset.js',
		'^~/(.*)$': '<rootDir>/src/$1'
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	restoreMocks: true,
	coverageDirectory: '<rootDir>/test-coverage'
};
