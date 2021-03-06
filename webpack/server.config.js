const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const paths = require('./paths');

module.exports = (mode) => ({
  target: 'node',
  mode,
  devtool: 'inline-source-map',
  entry: [paths.serverEntry],
  output: {
    path: paths.output,
    filename: 'server.bundle.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.serverFolder,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|scss)$/),
    new CopyWebpackPlugin([
      { from: './views', to: path.resolve(__dirname, '..', 'build', 'views') },
      {
        from: './public',
        to: path.resolve(__dirname, '..', 'build', 'public'),
      },
      { from: './package.json' },
      { from: './Procfile' },
      { from: './favicon.ico' },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
});
