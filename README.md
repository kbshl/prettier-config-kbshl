# prettier-config-kbshl

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![NPM](https://img.shields.io/npm/v/prettier-config-kbshl.svg)](https://www.npmjs.com/package/prettier-config-kbshl)
[![NPM total downloads](https://img.shields.io/npm/dt/prettier-config-kbshl.svg)](https://www.npmjs.com/package/prettier-config-kbshl)
[![NPM license](https://img.shields.io/npm/l/prettier-config-kbshl.svg)](https://www.npmjs.com/package/prettier-config-kbshl)
[![GitHub stars](https://img.shields.io/github/stars/kbshl/prettier-config-kbshl.svg)](https://github.com/kbshl/prettier-config-kbshl/stargazers/)

> [Prettier](https://prettier.io/) shareable configuration for my Javascript based projects (Web and Mobile)

## Installation

```shell
npm install --save-dev prettier-config-kbshl
```

## Usage

**.prettierrc.js**

```javascript
module.exports = require('prettier-config-kbshl');
```

**.prettierignore**

Copy and paste the following snippet:

```txt
### Node ###
node_modules
**/package.json
**/package-lock.json

### Builds ###
dist
coverage
build

### VSCode ###
.vscode
.history

### Titanium Mobile ###
Resources
app/widgets
./i18n
./platform
```

or do something like this:

```shell
cat ./node_modules/prettier-config-kbshl/.prettierignore >> .prettierignore
```

**package.json**

e.g.

```json
...
"scripts": {
  "format": "prettier --write \"src/**/*.+(js|ts|vue|json)\""
}
...
```

## Recommendations

I recommend to use [Prettier](https://www.prettier.io) together with [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) as a `pre-commit` git hook.

### Installation

```shell
npm install --save-dev husky lint-staged
```

### Usage

**package.json**

e.g.

```json
...
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "**/*.+(js|ts|vue|json|css|sass|less|graphql|yml|yaml|scss|md)": [
    "prettier --write",
    "git add",
  ]
}
...
```

## License

MIT © [Konstantin Büschel](https://github.com/kbshl)