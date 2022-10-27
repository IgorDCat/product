import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"
import {buildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {getRandomInteger} from "../../src/helpers/getRandomInteger/getRandomInteger";

export function buildPlugins({paths, isDev, apiUrl}: buildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: getRandomInteger(4001, 4999),
            openAnalyzer: false
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[name].[contenthash:15].map"
        })

    ]
    if (isDev) {
        plugins.push(

        )
    }
    return plugins;
}