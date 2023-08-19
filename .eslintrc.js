module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        semi: ['warn', 'always', { omitLastInOneLineBlock: true }],
        '@typescript-eslint/semi': 'off'
    }
};
