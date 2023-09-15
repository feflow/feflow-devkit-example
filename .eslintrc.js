module.exports = {
  extends: [
    'eslint-config-tencent',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/**', 'dist/**'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint-config-tencent/ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
