module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/quotes': [
          'error',
          'single',
          { avoidEscape: true, allowTemplateLiterals: true },
        ],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
