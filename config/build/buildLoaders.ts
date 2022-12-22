import webpack from 'webpack';
import {buildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildBabelLoader} from './loaders/buildBabelLoader';

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
    }

    const codeBabelLoader = buildBabelLoader({isDev, isTsx: false});
    const tsxBabelLoader = buildBabelLoader({isDev, isTsx: true});

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        exclude: /node_modules/,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = buildCssLoader(isDev);

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxBabelLoader,
        cssLoader,
    ]
}