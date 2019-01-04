module.exports = {
  collectCoverage: true,
  verbose: false,
  collectCoverageFrom: ['src/**/*.js'],
  testRegex: '/test/[^_]*/*.js$',
  setupFiles: [
    '<rootDir>/test/_setup/config.js',
  ],
  testURL: 'http://localhost',
  timers: 'fake',
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      statements: 100,
    },
  },
}
