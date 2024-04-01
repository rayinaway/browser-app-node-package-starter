module.exports = {
	testMatch: ['<rootDir>/src/**/*.test.js'],
	moduleNameMapper: {
		'\\.css\\.ts$': '@vanilla-extract/jest-transform',
		'/assets/': '<rootDir>/test/mocks/asset.js',
		'^@/(.*)$': '<rootDir>/src/$1',
		'^~/(.*)$': '<rootDir>/$1'
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	restoreMocks: true,
	coverageDirectory: '<rootDir>/test-coverage'
};
