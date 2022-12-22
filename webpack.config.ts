import path from 'path';
import webpack from 'webpack'
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {buildEnv} from './config/build/types/config';


export default (env: buildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    }

    const mode = env?.mode || 'development';
    const isDev = mode == 'development';
    const apiUrl = env?.apiUrl || 'http://localhost:8000';
    const PORT = env?.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend'
    })

    return config
}