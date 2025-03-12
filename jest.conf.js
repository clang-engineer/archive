module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '<rootDir>/build/jest-cache',
  coverageDirectory: '<rootDir>/build/test-results/',
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/main/webapp/app/$1',
  },
};