module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/testing/**/*.test.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/playwright/'
  ]
}
