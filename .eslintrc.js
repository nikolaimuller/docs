// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@mullerstd/eslint-config', '@mullerstd/eslint-config/react', 'eslint-config-prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
}
