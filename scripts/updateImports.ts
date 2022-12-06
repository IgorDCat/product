import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layerName) => value.startsWith(layerName));
}

files.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importVal) => {
        const value = importVal.getModuleSpecifierValue();
        if(isAbsolute(value)) {
            importVal.setModuleSpecifier(`@/${value}`)
        }
    })
})

project.save();