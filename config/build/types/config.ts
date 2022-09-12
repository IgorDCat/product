export type buildMode = 'production' | 'development';

export interface buildPaths {
    entry: string;
    build: string;
    html: string
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean
}