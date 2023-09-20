# @democrance/lint-config

[![npm](https://img.shields.io/npm/v/@democrance/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@democrance/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install ESlint

```bash
pnpm add -D eslint @democrance/eslint-config
```

### Config `.eslintrc.js`

```cjs
'use strict';

module.exports = {
    extends: '@democrance'
};
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
    "prettier.enable": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

### Install Stylelint

```bash
pnpm add -D stylelint @democrance/stylelint-config
```

### Config `stylelint.config.js`

```js
'use strict';

module.exports = {
    extends: '@democrance/stylelint-config',
};
```

## License

[MIT](./LICENSE) License &copy; 2019-PRESENT [Daniil Chumachenko](https://github.com/daniil4udo)
