module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off', // podemos não utilizar this em classes ou metodos
        'no-params-reassign': 'off', //permite alterar parametros
        camelcase: 'off', //permite usar outra formatação de variaveis alem do camelcase
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], //Com isso, podemos utilizar o next, mesmo ele não sendo chamado
    },
};