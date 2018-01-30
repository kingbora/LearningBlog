/**
 * Created by wenbo.kuang on 2018/1/23.
 */
'use strict';
const path = require('path');
const config = require('../config');
const utils = require('./utils');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const isProd = process.env.NODE_ENV === 'production';

const commonConfig = {
    context: resolve('src'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProd
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'json'],
        alias: {
            '@': resolve('src'),
            '~': resolve('src/assets'),
            '$': resolve('src/styles')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack','awesome-typescript-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: ['./src/index.html']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            name: utils.assetsPath('static/[name].[hash:7].[ext]')
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};

module.exports = commonConfig;