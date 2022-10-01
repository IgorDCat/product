module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            files: ["**/?(*.)+(spec|test).[tj]s?(x)"],
            rules: {
                "i18next/no-literal-string": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": "off",
        "quotes": ["error", "double"],
        "semi-style": ["error", "last"],
        "i18next/no-literal-string": ["error", {
            markupOnly: true,
            ignoreAttribute: ["data-testid", "to"],
        }],
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-var-requires": "off"
    },
    globals: {
        __IS_DEV__: true,
    },
};
