import webpack from "webpack"
import {buildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    }

    const babelLoader =   {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const cssLoader = buildCssLoader(options.isDev)

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}