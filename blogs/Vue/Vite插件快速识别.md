---
title: Vite插件快速识别
date: 2022-12-30
tags:
  - Vite
categories: 
  - Vue全家桶
---

## 前言

##### 从笔者角度理解Vite，说白了`vite`就是为开发者量身定做的一套先进的开发工具，按需编译、热模块替换等特性使我们开发时免除了重新打包的等待时间，开发体验丝滑，默认还整合了`vue3`，是居家旅行、杀人灭口之必备良药。以下是笔者日常开发用到的vite插件，让我们起飞芜湖芜湖~~~~

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41c4746e651f4c0e969afa33208b5449~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## vite官方自带

##### 作用：优化打包构建，不用自己手动删除console.log得劲~~

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
export default defineConfig({
    build:{
        minify: 'terser',
        terserOptions: {
            //打包后移除console和注释
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
})
```

## @vitejs/plugin-vue

##### 作用：实现Vite与Vue的连接，使用Vite构建的项目都会默认安装

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [
    vue()
  ],
}) 
```

## @vitejs-plugin-vue-jsx

##### 作用：实现编写jsx，就是全部全部写到js里面，css关我js什么事情

```
npm i @vitejs/plugin-vue-jsx -D
```

```ts
// vite.config.ts
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [
    vueJsx ()
  ],
}) 
```

## unplugin-auto-import+unplugin-vue-components

##### 作用：插件实现vue函数和组件库的自动按需导入

```
pnpm i unplugin-auto-import unplugin-vue-components  -D
```

```typescript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default defineConfig({
  plugins: [
    ...
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ['vue', 'vue-router'],
    }),
    ViteComponents({
      dts: true,
      customComponentResolvers: ViteIconsResolver(),        // 自动引入iconify库图表
      resolvers: [VantResolver()],
      ViteIcons(),
    }),
  ],
}) 
```

```json
// tsconfig.json   需要校验的文件后缀集合
"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx","src/**/*.vue","components.d.ts","auto-imports.d.ts"],
```

## vite-plugin-style-import

##### 作用：实现组件库样式的自动引入

```
npm i  vite-plugin-style-import -D
```

```typescript
// vite.config.ts
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';

export default defineConfig({
  plgins: [
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            name = name.substring(3, name.length);
            return `element-plus/es/components/${name}/style/index`;
          },
        },
      ],
    }),
  ]
});

```

## vite-plugin-checker

##### 作用：实现对代码类型的检查 项目代码还是要规范滴

```
npm install vite-plugin-checker -D
```

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [checker({
    typescript: true
  })]
})
```

## vite-plugin-svg-icons

##### 作用：优化svg图片引入统一管理Svg图片，嘎嘎好使

```
npm i vite-plugin-svg-icons -D
```

```ts
// vite.config.ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
```

```ts
// main.ts引入后 全局都可使用
import SvgIcon from "@/components/SvgIcon.vue";
import "virtual:svg-icons-register";   
createApp(App)
  .component("svg-icon", SvgIcon)              
  .mount("#app");
```

```vue
// svgIcon组件
<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>
```

## vite-plugin-imagemin

##### 作用：实现打包构建图片压缩，肯定不会把小龙女压缩成小笼包的

```
npm i vite-plugin-imagemin -D
```

```ts
import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    viteImagemin({
     gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ]
})
```

## rollup-plugin-visualizer

##### 作用：实现可视化打包构建分析统计，看看哪个包比较膨胀！需要减肥一下

```
npm install rollup-plugin-visualizer -D
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    // 将 visualizer 插件放到最后
    visualizer()
  ]
})
```

## vite-plugin-cdn-import

##### 作用：实现CDN加速更快的加载某些包，大概就是就近取包这个意思

```
npm i vite-plugin-cdn-import -D
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import viteCDNPlugin from 'vite-plgin-cdn-import'

export default defineConfig({
  plugins: [
    viteCDNPlugin({
      // 需要 CDN 加速的模块
      modules: [
        {
          name: 'lodash',
          var: '_',
          path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`
        }
      ]
    })
  ]
})
```

## vite-plugin-compression

##### 作用：实现对代码的压缩，对粑粑山代码那是很大瘦身，代码体积不大不建议使用

```
npm i vite-plugin-compression
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  plugins: [viteCompression()]
})
```

## vite-plugin-eslint

##### 作用：实现eslint检查代码。如果代码要求规范，还是打开eslint吧 写习惯就好了

```
npm i vite-plugin-eslint -D
```

```ts
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin()],
});
```

## vite-plugin-pwa

##### 作用：实现PWA功能，就是你的网页可以离线使用。

```
npm i vite-plugin-pwa -D
```

```ts
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default {
 plugins: [
   VitePWA()
 ]
}
```

## vite-svg-loader

##### 作用：实现像组件一样调用svg文件，更方便的使用svg文件

```
npm i vite-svg-loader -D
```

```ts
// vite.config.ts
import svgLoader from 'vite-svg-loader'

export default defineConfig({
 plugins: [vue(), svgLoader()]
})
```

## vite-plugin-icons

##### 作用：基于`Iconify`图标的vite插件支持,让你方便的使用iconify图标

```
npm i vite-plugin-icons -D
```

```ts
// vite.config.ts
import Icons from 'vite-plugin-icons'

export default {
 plugins: [
   Icons()
 ],
}
```

```vue
// 使用
<script setup>
import IconAccessibility from 'virtual:vite-icons/carbon/accessibility'
import IconAccountBox from 'virtual:vite-icons/mdi/account-box'
</script>

<template>
  <icon-accessibility/>
  <icon-account-box style="font-size: 2em; color: red"/>
</template>
```

## vite-plugin-vue-setup-extend

##### 作用：拓展setup语法糖，实现在script标签中写name(在持久化路由keepAlive有用)

```
npm i vite-plugin-vue-setup-extend@0.4.0 -D
```

```ts
// 安装的插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [ VueSetupExtend() ]
})
```

## vite-plugin-mock

##### 作用：开启mock服务，自己造数据模拟接口请求，跟后端同学确定好接口变量就可以自己实现模拟接口

```
npm i vite-plugin-mock -d
```

```ts
// 安装的插件
import { viteMockServe }  from 'vite-plugin-mock'

export default defineConfig({
  plugins: [ viteMockServe(
  	 mockPath: 'mock',  // 设置模拟.ts 文件的存储文件夹
     enable: true,   // 是否开启mock
  ) ]
})
```

#### MockMethod：请求配置和响应配置

```ts
{
  // 请求地址
  url: string;
  // 请求方式
  method?: MethodType;
  // 设置超时时间
  timeout?: number;
  // 状态吗
  statusCode?:number;
  // 响应数据（JSON）
  response?: ((opt: { [key: string]: string; body: Record<string,any>; query:  Record<string,any>, headers: Record<string, any>; }) => any) | any;
  // 响应（非JSON）
  rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
}
```

### 写在最后

> 插件其实都是为了实现某个功能，有些功能类似的插件选择适合项目的就好，或者自己熟悉的。笔者目前用过的插件已总结完毕，未来也会不断更新。希望可以不断精进写出自己的插件。如需引用，还请备注出处，感谢观看。
