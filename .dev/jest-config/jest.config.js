module.exports = {
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'cobertura'],
  coverageDirectory: '.jest',
  collectCoverageFrom: ['./src/**'],
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../../.dev/test-tool/dist/mocks/file-mock.js',
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx']
};
