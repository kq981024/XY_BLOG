---
title: Vitest快速识别
date: 2023-2-8
tags:
  - Vitest
categories: 
  - Vue全家桶
---

### 前言

        Vitest 是一个由 Vite 提供支持的极速单元测试框架有以下特点：

* 开箱即用的 TypeScript / JSX 支持
* 支持测试 Vue、React、Lit 等框架中的组件
* jest友好(兼容jest的快照测试)
  
  个人感受就是单元测试很友好，配置与vite通用，如果是使用vite开发的项目，测试框架首选Vitest

### 安装

* `vitest`: 测试框架，用于执行整个测试过程并提供断言库、mock、覆盖率
* `js-dom`: 通过提供 Browser API 模拟浏览器环境
* `@vue/test-utils` 工具库: `Vue`推荐的测试工具库, [官网文档](https://v1.test-utils.vuejs.org/zh/)
* resize-observer-polyfill：页面调整观察者填充的大小
* @vitest/ui：测试可视化界面

```
pnpm add -D vitest  @vue/test-utils jsdom @vitest/ui resize-observer-polyfill
```

### 配置

###### 新建vitest.config.ts文件

```ts
import { defineConfig } from "vitest/config";
export default defineConfig({
    optimizeDeps: {
        disabled: true,
    },
    test: {
        // 测试报告生成 default：终端  html: vitestUI
        reporters: ["default", "html"], 
        // 每次测试前 所有监听清除模拟历史记录
        clearMocks: true,
        // vitest的测试环境
        environment: "jsdom",
        // 在每个测试文件之前运行
        // setupFiles: ["./vitest.setup.ts"],
        //模块的转换方式
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    },
});
```

###### 新建vitest.setup.ts文件

```ts
import { config } from '@vue/test-utils';
import { vi } from 'vitest';
import ResizeObserver from 'resize-observer-polyfill';

vi.stubGlobal('ResizeObserver', ResizeObserver);

config.global.stubs = {};
```

###### 新建tsconfig.vitest.json文件

```ts
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "composite": true,
      "lib": ["ES2021", "DOM", "DOM.Iterable"],
      "types": ["node", "jsdom", "unplugin-vue-macros/macros-global"],
      "skipLibCheck": true
    },
    "include": ["packages", "vitest.setup.ts", "typings/env.d.ts"],
    "exclude": ["node_modules", "dist", "**/*.md"]
  }

```

###### packge.json文件添加运行脚本

```json
    "scripts": {
        "test": "vitest --ui",
        "test:coverage": "vitest run --coverage"
    },
```



##### 


