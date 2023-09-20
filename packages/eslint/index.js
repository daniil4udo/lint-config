'use strict';

const INDENT = 4;

module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    // root: true,

    parserOptions: {
        ecmaVersion: 2020,
    },

    globals: {
        process: 'readonly',
    },

    extends: [
        '@antfu',
        // 'plugin:putout/recommended',
    ],

    plugins: [
        // 'putout',
    ],

    rules: {
        // ⌛️ process.env dependant rules
        'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',

        // Only allow `console.log` in development
        'no-console': process.env.PRE_COMMIT
            ? [ 'error', { allow: [ 'warn', 'error' ] }]
            : 'off',

        // 🛑 OFF RULES

        // https://eslint.org/docs/latest/rules/no-tabs
        'no-tabs': 'off',

        'n/prefer-global/process': [ 'error', 'always' ],

        // 🛠 RULES

        'semi': [ 'off', 'always' ],
        '@typescript-eslint/semi': [ 'error', 'always' ],

        'arrow-parens': [
            'error',
            'as-needed',
            {
                // modifies the as-needed rule in order NOT to require parens if the function body
                requireForBlockBody: false,
            },
        ],

        // js | vue
        // https://eslint.org/docs/latest/rules/array-bracket-spacing
        'array-bracket-spacing': [
            'error',
            'always',
            {
                objectsInArrays: false,
            },
        ],

        // 🟡 js
        // https://eslint.org/docs/latest/rules/eol-last
        'eol-last': [
            'error',
            'always',
        ],

        // 🟡 js
        // https://eslint.org/docs/latest/rules/newline-per-chained-call
        'newline-per-chained-call': [
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

        // 🟡 js
        // https://eslint.org/docs/latest/rules/no-useless-escape
        // 'no-useless-escape': 'error',

        // 🟡 js
        // https://eslint.org/docs/latest/rules/operator-assignment
        // 'operator-assignment': 'warn',

        // 🟡 js
        // https://eslint.org/docs/latest/rules/prefer-destructuring
        // 'prefer-destructuring': [
        //     'warn',
        //     {
        //         array: false,
        //         object: true,
        //     },
        // ],

        // 🟡 js | 🔵 ts
        // https://eslint.org/docs/latest/rules/quotes
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],

        // Indent configuration
        // 🟡 js | 🔵 ts
        // https://eslint.org/docs/latest/rules/indent
        '@stylistic/ts/indent': [
            'error',
            INDENT,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [
                    'TemplateLiteral *',
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                    'TSTypeParameterInstantiation',
                    'FunctionExpression > .params[decorators.length > 0]',
                    'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                    'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                ],
                offsetTernaryExpressions: true,
            },
        ],

        // Import

        // 🟡 js | 🔵 ts
        // 'import/no-duplicates': 'error',
        // https://eslint.org/docs/latest/rules/no-duplicate-imports
        'no-duplicate-imports': 'off',
        'import/no-duplicates': [ 'error', { 'prefer-inline': false }],

        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
        'import/namespace': [
            'error',
            {
                allowComputed: true,
            },
        ],

        'import/order': [
            'error',
            {
                'groups': [
                    'type',
                    'builtin',
                    'external',
                    'internal',
                    [ 'sibling', 'parent' ], // <- Relative imports, the sibling and parent types they can be mingled together
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                'alphabetize': {
                    /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                    order: 'asc',
                    /* ignore case. Options: [true, false] */
                    caseInsensitive: true,
                },
                'pathGroups': [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '~/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
            },
        ],

        // 🟢 vue
        'vue/html-indent': [
            'error',
            INDENT,
            {
                ignores: [ 'VElement[name=highlight-code].children' ],
            },
        ],

        // 🟢 vue
        // https://eslint.vuejs.org/rules/attributes-order.html
        'vue/attributes-order': [
            'error',
            {
                alphabetical: false,
                order: [
                    'DEFINITION',
                    [
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                    ],
                    [
                        'GLOBAL',
                        'UNIQUE',
                    ],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
            },
        ],

        // 🟢 vue
        // https://eslint.vuejs.org/rules/component-tags-order.html
        'vue/component-tags-order': [
            'error',
            {
                order: [
                    'template',
                    'script[setup]',
                    'script:not([setup])',
                    'style',
                ],
            },
        ],

        // 🟢 vue
        // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
        'vue/html-closing-bracket-newline': [
            'error',
            {
                multiline: 'always',
                singleline: 'never',
            },
        ],

        // 🟢 vue
        // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
        'vue/html-closing-bracket-spacing': 'error',

        // 🟢 vue
        // https://eslint.vuejs.org/rules/max-attributes-per-line.html
        'vue/max-attributes-per-line': [
            'error',
            {
                multiline: {
                    max: 1,
                },
                singleline: {
                    max: 2,
                },
            },
        ],

        // 🟢 vue
        // https://eslint.vuejs.org/rules/no-template-shadow.html
        'vue/no-template-shadow': 'error',

        // 🟢 vue
        'vue/this-in-template': 'error',
    },
};
