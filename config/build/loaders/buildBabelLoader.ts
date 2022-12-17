import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface buildBabelLoaderProps {
    isDev: boolean;
    isTsx: boolean;
}

export function buildBabelLoader({isDev, isTsx}: buildBabelLoaderProps) {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            cacheDirectory: true,
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    ['@babel/plugin-transform-typescript', {isTsx}],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [babelRemovePropsPlugin, {props: ['data-testid']}]
                ].filter(Boolean),
            }
        }
    }
}