---
title: ESlint+Prettier+StyleLint+Husky前端工作流规范配置
date: 2022-12-30
tags:
 - 工作流规范
categories: 
 - 前端工作流规范
---

---
### 前置工作

##### 本配置方案适用于Vue3+Vite+Ts场景下搭建工作流

---

#### 涉及到的npm模块

##### 1、eslint —— 用来检查代码规范性的标准

##### 2、prettier —— 用来格式化代码的标准

##### 3、stylelint —— 用来检查样式相关代码的标准

##### 4、husky —— git的钩子，在git的hook中执行一些命令

##### 5、lint-staged—— 对git暂存的文件进行lint检查

---

#### 编译器默认为Vscode安装所需插件

- ##### Eslint —— 配合编译器检查代码是否规范

- ##### StyleLint —— 配合编译器格式化CSS

- ##### Prettier - Code formatter —— 配合编辑器格式化代码

---

### ESLint配置

##### 安装eslint相关依赖

```
pnpm i eslint eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D    
```

##### 初始化eslint,根目录下生成.eslintrc.json文件

```
npx eslint --init    
```

```json
// package.json运行脚本添加如下
  "scripts": {
    "lint": "eslint --ext .vue,.js,.jsx,.ts,.tsx ./ --max-warnings 0",
    "lint:fix": "eslint --ext .vue,.js,jsx,.ts,.tsx ./ --max-warnings 0 --fix",
  },
```

```json
// .eslintrc.json
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
```

```
 pnpm run lint   // 验证eslint是否配置成功
```

---

### Prettier配置

##### 安装prettier

```
pnpm i prettier -D   
```

##### 根目录下新建.prettierrc.js文件 配置如下

```js
module.exports = {
  // 一行最多 120 字符..
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: 'auto',
};
```

##### Prettier 来接管 eslint，覆盖eslint 本身规则依赖安装

```
pnpm i eslint-config-prettier eslint-plugin-prettier -D
```

##### 更改eslintrc.json 配置

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        // 1. 接入 prettier 的规则
        "prettier",
        "plugin:prettier/recommended"
    ],
    "rules": {
        // 3. 开启 prettier 自动修复的功能
        "prettier/prettier": "error",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```

##### 校验检查ESLint 规则 Prettier 的自动修复配置

```
pnpm run lint  
```

#### Vite中集成ESlint

##### 安装vite-plugin-eslint -D插件

```
pnpm i vite-plugin-eslint -D
```

##### vite.config.ts 配置

```ts
import viteEslint from 'vite-plugin-eslint';
{
  plugins: [
    // 省略其它插件
    viteEslint(),
  ]
}
```

---

### Stylelint配置

##### 安装Stylelint相关插件

```
pnpm i stylelint stylelint-prettier stylelint-config-standard postcss-scss postcss-html stylelint-config-recommended-vue stylelint-config-recess-order -D
```

##### 文件根目录新建文件.stylelintrc配置如下：

```js
module.exports = {
    // 注册 stylelint 的 prettier 插件
    plugins: ['stylelint-prettier'],
    // 继承一系列规则集合
    extends: [
        // standard 规则集合
        'stylelint-config-standard',
        // standard 规则集合的 scss 版本
        'stylelint-config-standard-scss',
        // 样式属性顺序规则
        'stylelint-config-recess-order',
        // 接入 Prettier 规则
        'stylelint-config-prettier',
        'stylelint-prettier/recommended'
    ],
    // 配置 rules
    rules: {
        // 开启 Prettier 自动格式化功能
        'prettier/prettier': true
    }
}
```

##### package.json新增脚本命令：

```json
// package.json中
{
  "scripts": {
    // stylelint 命令
    "stylelint": "stylelint src/**/*.{html,vue,sass,less}",
    "stylelint:fix": "stylelint --fix src/**/*.{html,vue,vss,sass,less}",
  }
}
```

##### 验证样式格式化是否成功

```
pnpm run stylelint      
```

#### vite 集成 Stylelint

##### 安装vite-plugin-stylelint插件

```
pnpm i vite-plugin-stylelint -D
```

##### vite.config.ts配置

```ts
import viteStylelint from 'vite-plugin-stylelint';
{
  plugins: [
    viteStylelint(),
  ]
}
```

---

### Husky配置

##### 安装husky依赖

```
pnpm i husky -D
```

##### package.json新增脚本命令：

```json
 "scripts": {
        "prepare": "husky install"
    },
```

##### 添加husky钩子之前你的项目必须存在一个git，初始化husky,生成.husky文件

```
npx husky install  
```

##### 添加husky钩子，执行完成后.husky文件夹下会生成pre-commit文件

```
npx husky add .husky/pre-commit "npm run lint"
```

##### pre-commit文件内容如下：

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run lint    // 文件提交前先运行该命令 通过后才可提交
```

---

### lint-staged配置

##### 更改package.json配置

```json
 "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "prettier --write",
      "npm run lint:fix",
      "git add ."
    ],
    "*.{html,vue,vss,sass,less}": [
      "npm run stylelint:fix",
      "git add ."
    ]
  },
```

---

### commit提交信息规范配置

##### 安装提交规范相关依赖

```
pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D
```

##### 根目录新建.commitlintrc.js

```js
module.exports = {
    extends: ["@commitlint/config-conventional"]
};
```

##### `@commitlint/config-conventional` 规定的 commit 信息一般由两个部分: type 和 subject 组成，结构为`<type>: <subject>`,如新增功能`feat: '新增功能描述'`

| type     | subject      |
| -------- | ------------ |
| feat     | 添加新功能（常用）    |
| fix      | 修复 bug（常用）   |
| style    | 代码格式修改（常用）   |
| test     | 测试用例新增、修改    |
| build    | 影响项目构建或依赖项修改 |
| chore    | 其他修改         |
| ci       | 持续集成相关文件修改   |
| docs     | 文档修改         |
| refactor | 代码重构         |
| revert   | 恢复上一次提交      |

##### 将`commitlint`集成到`husky`中

```
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS" 
// .husky文件夹下生成commit-msg文件
```

```
前端规范工作流只需要配置一次就能复用到其它项目中了,没必要太深入的研究,需要的时候看一下就行。如有需要引用，请标明出处喔。
```


