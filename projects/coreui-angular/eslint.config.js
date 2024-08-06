// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-tslint-comment': 'off',
      '@typescript-eslint/class-literal-property-style': 'off',
      '@typescript-eslint/consistent-generic-constructors': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-extra-boolean-cast': 'off',
      'no-unused-private-class-members': 'off'
    }
  },
  {
    files: ['**/*.html'],
    rules: {}
  }
);
