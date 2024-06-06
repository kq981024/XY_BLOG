---
title: pinia快速识别
date: 2023-02-15
tags:
  - Pinia
categories:
  - Vue全家桶
---

### 前言

`Pinia`西班牙语直译为菠萝，正如菠萝一样，在 Pinia 中的每个`Store`都是单独存在的，Store 之间也可以互相访问调用数据，实现全局的状态管理。比起  `Vuex`，Pinia 提供更简单的 Api，更少的规范以及支持 TS 和组合式 Api 风格。

### 差异

- mutations  不复存在。只有 state 、getters 、actions。
- actions 中支持同步和异步方法修改 state 状态。
- 与 TypeScript 一起使用具有可靠的类型推断支持。
- 不再有模块嵌套，只有 Store 的概念，Store 之间可以相互调用。
- 支持插件扩展，可以非常方便实现本地存储等功能。
- 更加轻量，压缩后体积只有 2kb 左右。

### 安装

```
pnpm pinia
```

### 引入

```ts
// src/main.js
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);
```

### 方法

##### 定义 Store

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('storeId', {
  state: () => (
    // store变量
       count:0
   ),
  getters: {
    // store计算属性
    countPlus:this.count++
   },
  actions: {
    // store对变量的方法
    const addCount = ()=>{
        count++
      }
   }
})
```

##### 解构 Store:   直接结构会失去响应式，所以使用 storeToRefs()进行解构

```ts
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
```

##### 修改 Store：$patch(cbk(store))

```ts
// 直接修改
const counterStore = useCounterStore();
counterStore.count++;
// 调用action方法修改
counterStore.countPlus();
// $patch修改   性能更好优先使用
couterStore.$patch((store) => {
  store.count++;
});
```

##### 监听 Store：$subscribe(cbk(mutation,state))

```ts
const counterStore = useCounterStore();
counterStore.$subscribe((mutation, state) => {
  // 每当状态发生变化时，将 state 持久化到本地存储
  localStorage.setItem("counter", JSON.stringify(state));
});
```

##### 重置 Store：$reset()

```ts
const counterStore = useCounterStore();
counterStore.$reset();
```

### 插件

##### 1、  实现本地存储：pinia-plugin-persist

```ts
export const useCounterStore = defineStore('conter', {
  state: () => ({ count: 1 }),
  // 开启数据缓存
  persist: {
    enabled: true
    strategies: [
        {
          key: 'myCounter', // 存储的 key 值，默认为 storeId
          storage: localStorage, // 存储的位置，默认为 sessionStorage
          paths: ['count'], // 需要存储的 state 状态，默认存储所有的状态
        }
      ]
     }
})
```
