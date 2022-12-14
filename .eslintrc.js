module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'amd': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            files: ['**/?(*.)+(test|stories|cy).[tj]s?(x)'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'no-undef': 'off'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-path-checker',
        'unused-imports'
    ],
    'rules': {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'linebreak-style': 'off',
        'quotes': ['error', 'single'],
        'semi-style': ['error', 'last'],
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap', 'role', 'as',
                'href', 'refName'],
        }],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'fsd-path-checker/path-checker': ['error', {'alias': '@'}],
        'fsd-path-checker/imports-public-api': ['error', {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx']
        }],
        'fsd-path-checker/layer-imports': ['error', {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing']
        }],
        'prefer-const': 'off',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
};
