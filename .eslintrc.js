module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'new-cap': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'quote-props': ['warn', 'as-needed'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'no-console': 'warn',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 9,
      jsx: true,
    },
    sourceType: 'module',
  },
};
