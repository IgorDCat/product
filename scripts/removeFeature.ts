import {Project, SyntaxKind, Node} from 'ts-morph';


const project = new Project();

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');

//TODO
//project.addSourceFilesAtPaths('src/**/*.ts');
//project.addSourceFilesAtPaths('src/**/*.tsx');

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example on/off

if(!removedFeatureName) {
    throw new Error('Укажите название feature флага!');
}

if(!featureState) {
    throw new Error('Укажите состояние фичи! (on или off)');
}

if(featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное состояние фичи! (должно быть on или off)');
}

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
    let isToggleFeatures = false;
    node.forEachChild(child => {
        if(child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
        }
    })
    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant(node => {

        if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

            if(!objectOptions) return

            const objectNameProperty = objectOptions.getProperty('name');
            const objectOnProperty = objectOptions.getProperty('on');
            const objectOffProperty = objectOptions.getProperty('off');

            const functionOn = objectOnProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const functionOff = objectOffProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const featureName = objectNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                ?.slice(1, -1);

            if(featureName !== removedFeatureName) return;

            if(featureState === 'on') {
                node.replaceWithText(functionOn?.getBodyText() || '')
            } else if(featureState === 'off') {
                node.replaceWithText(functionOff?.getBodyText() || '')
            }
        }
    })
})

project.save();