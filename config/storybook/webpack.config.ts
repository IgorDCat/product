import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: buildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.alias = {
        '@': path.resolve(__dirname, '..', '..', 'src')
    }
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules = config.module!.rules!
        .map((rule: RuleSetRule | '...', index: number, array: (RuleSetRule | '...')[]) => {
            if(rule !== '...' && /svg/.test(rule?.test as string)) {
                return {...rule, exclude: /\.svg$/i};
            }
            return rule;
        });

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:3001/'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
