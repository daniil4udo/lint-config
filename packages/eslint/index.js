'use strict'

module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    parserOptions: {
        ecmaVersion: 2020,
    },

    globals: {
        process: true,
    },

    extends: [
        '@antfu',
        // 'plugin:putout/recommended',
    ],

    plugins: [
        'unused-imports',
        // 'putout',
    ],

    rules: {
        // Only allow debugger in development
        'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',

        // Only allow `console.log` in development
        'no-console': process.env.PRE_COMMIT
            ? [ 'error', { allow: [ 'warn', 'error' ] }]
            : 'off',

        // 🛑 OFF RULES
        'no-tabs': 'off',

        // 🛠 RULES

        'array-bracket-spacing': [
            'error',
            'always',
            {
                objectsInArrays: false,
            },
        ],
        'brace-style': [
            'warn',
            'stroustrup',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 3,
            },
        ],
        'no-await-in-loop': 'error',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'operator-assignment': [
            'error',
            'always',
        ],
        'prefer-destructuring': [
            'warn',
            {
                array: false,
                object: true,
            },
        ],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // Indent configuration
        'indent': [
            'off',
            4,
            {
                CallExpression: {
                    arguments: 2,
                },
                FunctionDeclaration: {
                    body: 1,
                    parameters: 2,
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 2,
                },
                SwitchCase: 1,
                MemberExpression: 1,
                ignoredNodes: [ 'ConditionalExpression' ],
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 },
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
        // 'vue/html-indent': [
        // 	'error',
        // 	'tab',
        // 	{
        // 		ignores: [ 'VElement[name=highlight-code].children' ],
        // 	},
        // ],

        // Semicolons (default, preferred in TypeScript):
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                },
            },
        ],

        '@typescript-eslint/consistent-type-imports': 'error',

        // Import
        'unused-imports/no-unused-imports': 'error',
        'import/no-duplicates': 'error',
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
                    'parent',
                    'sibling',
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                'alphabetize': {
                    order: 'asc',
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

        // Vue
        'vue/attributes-order': [
            'error',
            {
                alphabetical: true,
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
        'vue/html-closing-bracket-newline': [
            'error',
            {
                multiline: 'always',
                singleline: 'never',
            },
        ],
        'vue/html-closing-bracket-spacing': 'error',
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
        'vue/no-template-shadow': 'error',
        'vue/this-in-template': [
            'error',
            'never',
        ],
    },
}
