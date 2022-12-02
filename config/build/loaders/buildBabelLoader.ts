import {buildOptions} from '../types/config';

export function buildBabelLoader({isDev}: buildOptions) {
    return {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    '@babel/plugin-transform-modules-commonjs',
                ].filter(Boolean),
            }
        }
    }
}