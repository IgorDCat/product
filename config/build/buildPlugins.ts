import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'
import {buildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {getRandomInteger} from '../../src/helpers/getRandomInteger/getRandomInteger';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export function buildPlugins(options: buildOptions): webpack.WebpackPluginInstance[] {
    const {paths, isDev, apiUrl, project} = options;

    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                {from: paths.locales, to: paths.buildLocales},
            ],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,

        })
    ]
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerPort: getRandomInteger(4001, 4999),
                openAnalyzer: false
            }),
        )
    }
    return plugins;
}