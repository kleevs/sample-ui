const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/app/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|wasm)$/i,
        type: 'asset/resource'
      }, 
      {
        resource: /packages/,
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  plugins: [new Dotenv({ path: '.env' })],
  devServer: {
      static: [{
          directory: path.resolve(__dirname, 'public'),
      }, {
          directory: path.join(__dirname, '../../node_modules/react-dom/umd'),
          publicPath: '/react-dom',
      }],
      historyApiFallback: {
          index: 'index.html'
      }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
    fallback: {
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      '@design-system/components': require.resolve('@packages/design-system')
    }
  }
};
