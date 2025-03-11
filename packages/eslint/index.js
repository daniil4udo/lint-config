import antfu from '@antfu/eslint-config';

const INDENT = 4;

export async function coreEslintConfigs(options) {
    return antfu({
        // vue: true,
        formatters: true,
        // css: true,
        // languageOptions: {
        //     ...globals,
        // },

        stylistic: {
            indent: INDENT,
        },

        // Configures for dmc's config
        rules: {
            'node/prefer-global/process': [ 'error', 'always' ],

            // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
            'node/prefer-global/buffer': [ 'error', 'always' ],

            // ⌛️ process.env dependant rules
            'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',

            // Only allow `console.log` in development
            'no-console': process.env.PRE_COMMIT
                ? [ 'error', { allow: [ 'warn', 'error' ] }]
                : 'off',

            'style/arrow-parens': [
                'error',
                'as-needed',
                {
                    // modifies the as-needed rule in order NOT to require parens if the function body
                    requireForBlockBody: false,
                },
            ],
            'style/array-bracket-spacing': [
                'error',
                'always',
                {
                    objectsInArrays: false,
                },
            ],

            'style/semi': [ 'error', 'always' ],

            'style/eol-last': [
                'error',
                'always',
            ],

            // 🟡 js
            // https://eslint.org/docs/latest/rules/newline-per-chained-call
            'style/newline-per-chained-call': [
                'error',
                {
                    ignoreChainWithDepth: 3,
                },
            ],

            // 🟡 js
            // https://eslint.org/docs/latest/rules/no-await-in-loop
            'no-await-in-loop': 'error',

            // 🟡 js
            // https://eslint.org/docs/latest/rules/no-param-reassign
            'no-param-reassign': [
                'error',
                {
                    props: false,
                },
            ],

            // 🟡 js
            // https://eslint.org/docs/latest/rules/no-useless-concat
            'no-useless-concat': 'error',

            'perfectionist/sort-imports': [ 'error', {
                groups: [
                    [
                        'type',
                        'internal-type',
                        'parent-type',
                        'sibling-type',
                        'index-type',
                    ],
                    'builtin',
                    'external',
                    [
                        'internal',
                    ],
                    [
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'side-effect',
                    'object',
                    'unknown',
                ],
                newlinesBetween: 'always',
                order: 'asc',
                type: 'natural',
            }],
        },

        ...options,
    }, {
        files: [ '**/*.vue' ],

        rules: {
            // 'indent': 'off', // turn off the base indent rule to avoid conflicts
            'style/indent': 'off',

            'vue/block-order': [ 'error', {
                order: [
                    'template',
                    'script',
                    'style',
                ],
            }],

            'vue/max-attributes-per-line': [ 'error', {
                singleline: {
                    max: 2,
                },
                multiline: {
                    max: 1,
                },
            }],

            'vue/custom-event-name-casing': [ 'error', 'kebab-case', {
                ignores: [],
            }],

            'vue/script-indent': [ 'error', INDENT, {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            }],
        },
    }, {
        ignores: [
            '**/coverage',
            '**/config',
            '**/build',
            '**/tests',

            '/src/plugins/vti/**',
            '/tests/unit/coverage/',
            'output.js',
            '/src/plugins/debug.js',
            '.eslintrc-auto-import.json',
        ],
    }, {
        files: [
            '**/*.spec.{j,t}s?(x)',
            '**/*.unit.{j,t}s?(x)',
            // '**/__tests__/*.{j,t}s?(x)',
            // '**/tests/unit/**/*.spec.{j,t}s?(x)',
            // '**/(*.)spec.{j,t}s?(x)',
        ],
        // TODO:
        // extends: [ 'plugin:vitest/recommended' ],
        // plugins: [ 'vitest' ],
    });
}

export default coreEslintConfigs;
