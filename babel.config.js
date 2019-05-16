module.exports = {
  presets: [
    // ['minify', { removeUndefined: false, simplify: false }],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 2,
        modules: 'auto',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'ramda',
      {
        useES: false,
      },
    ],
  ],
};
