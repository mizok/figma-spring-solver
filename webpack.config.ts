const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import 'webpack-dev-server'; // dont remove this import, it's for webpack-dev-server type
const COMPRESS = true;


const pageEntries: webpack.EntryObject = { main: ['./src/ts/main.ts'] }
//generate htmlWebpackPlugin instances


const config = (env: any, argv: any): webpack.Configuration => {
  const configObj: webpack.Configuration = {
    entry: pageEntries,
    output: {
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      path: resolve(__dirname, 'dist'),
      clean: true
    },
    target: ['web', 'es5'],
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        }

      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
      alias: {
        '@img': resolve(__dirname, './src/assets/images/'),
      }
    },
    optimization: {
      minimize: COMPRESS,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          test: /\.js(\?.*)?$/i,
          extractComments: false
        }),
      ],
      splitChunks: { name: 'vendor', chunks: 'all' }
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    plugins: [
      new webpack.DefinePlugin({
        'PROCESS.MODE': JSON.stringify(argv.mode)
      }),
      new CopyPlugin(
        {
          patterns: [
            {
              from: 'src/static',
              to: 'static',
              globOptions: {
                dot: true,
                ignore: ['**/.DS_Store', '**/.gitkeep'],
              },
              noErrorOnMissing: true,
            },
            {
              from: 'src/assets/images',
              to: 'assets/images',
              globOptions: {
                dot: true,
                ignore: ['**/.DS_Store', '**/.gitkeep'],
              },
              noErrorOnMissing: true,
            }
          ],
        }
      ),
      (() => {
        if (argv.mode === 'development') {
          return new HtmlWebpackPlugin({
            template: './test/index.html',
            chunks: ['main']
          })
        }
      })()
    ].filter(function (x) {
      return x !== undefined;
    })
  }
  return configObj;
}


export default config;