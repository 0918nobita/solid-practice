module.exports = {
    root: true,
    env: { browser: true, es6: true, node: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['simple-import-sort'],
    rules: {
        'simple-import-sort/sort': 'error',
    },
    ignorePatterns: ['node_modules', 'dist'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
            ],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.json',
            },
            rules: {
                'no-undef': 'off',
            },
        },
        {
            files: ['scripts/**/*.ts'],
            parserOptions: {
                sourceType: 'module',
                project: './scripts/tsconfig.json',
            },
        },
    ],
};
