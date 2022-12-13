import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedUiDirectory = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'));
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layerName) => value.startsWith(layerName));
}

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if(!indexFile) {
        const sourceCode = 'export * from \'./' + directory.getBaseName() + '\';'
        const file = directory.createSourceFile(indexFilePath, sourceCode);

        file.save();
    }
})

files.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importVal) => {
        const value = importVal.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');
        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if(isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importVal.setModuleSpecifier(`@/${result}`);
        }
    })
})
console.log('completed');

project.save();