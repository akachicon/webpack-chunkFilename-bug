const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ dist }) => ({
  mode: 'none',
  context: __dirname,
  entry: {
    app: './src/app.js'
  },
  output: {
    path: dist,
    filename: '[name].entry.js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        dep: {
          test: /dep/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
