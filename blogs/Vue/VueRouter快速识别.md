---
title: VueRouter4.0实际应用
date: 2022-12-30
tags:
 - VueRouter
categories: 
 - Vue
---
---

### 前言

###### 由于 Vue 框架是 SPA(单页面应用)不会有不同的 html 提供给我们跳转，所以要使用路由进行页面的跳转，Vue 路由允许我们通过不同的 URL 访问不同的内容。通过 Vue 可以实现多视图的单页 Web 应用，由于 Vue3 是未来主流，本文以 Vue3 的路由配置为主

### 安装

###### Vue2 安装 Vue-router3.0 的版本

```
npm install vue-router@3
```

###### Vue3 安装 Vue-router4.0 的版本

```
npm install vue-router@4
```

### 路由模式

#### 1、哈希模式（url 携带#）

###### 本质是通过 location.hash = '/目标 url'来实现跳转

```typescript
window.addEventListener("hashchange", (event) => {
    console.log(event, "路由相关信息");
});
```

#### 2、history 模式（url 不携带#）

###### 本质通过 history.pushState(传递参数,标题,URL)

```typescript
window.addEventListener("popstate", (event) => {
    console.log(event, "路由相关信息");
});
```

###### 在 Vue3 中的使用

```typescript
//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'
 //路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [{
    path: '/login',
    name:'login',
    alias:['别名1','别名2'],
    redirect:'register'
    component: () => import('../components/login.vue'),
    meta:{},
    children:[]
},{
    path: '/register',
    name: '/register',
    component: () => import('../components/register.vue')
}]
 const router = createRouter({
 history: createWebHashHistory(),
 routes: routes,
 scrollBehavior() {
  return {
   el: '#app',
   top: 0,
   behavior: 'smooth',
  };
 },
});
//导出router
export default router
```

### 路由的跳转方式

#### 1、命名路由：即通过 path 和 name 进行跳转

```js
 <router-link :to="{name:name}">Login</router-link>
 <router-link :to="path">Login</router-link>
```

#### 2、编程式导航：即通过 Vue-router 提供的函数方法跳转

```jstypescript
import { useRouter } from 'vue-router'
const router = useRouter(
const toPage = () => {
  // router.push  产生历史记录
  router.push({
    path: '目标地址'|| name: '目标name'
  })
  // router.replace 不会产生历史记录 直接替代当前页面
  router.replace({
    path: '目标地址'|| name: '目标name'
  })
  // 从历史记录从前进后退 数字可正可负
  router.go(数字)
  // 后退
  router.back()
}
```

#### 3、a 标签跳转：跳转但是会刷新页面

```js
<a href="/目标地址">提示文字</a>
```

### 路由的传参 path 搭配 query name 搭配 params

#### 1、query 传参

```typescript
import { useRouter,useRoute } from 'vue-router'

// 传递参数
const router = useRouter(
const toPage = () => {
  router.push({
    path: '目标url',
    query:'参数对象'
  })
}

// 接收参数
const route = useRoute()
console.log(route.'参数对象')
```

#### 2、params 传参（存在页面刷新参数丢失的问题）

```javascript
import { useRouter,useRoute } from 'vue-router'

// 传递参数
const router = useRouter(
const toPage = () => {
  router.push({
    name: '目标name',
    params:'参数对象'
  })
}

// 接收参数
const route = useRoute()
console.log(route.'参数对象')
```

### 命名视图（有点类似 Vue 的具名插槽）

###### 控制同个页面下的不同组件位置（其实动态组件引入也一样）

```vue
<template>
    <router-view name="K"></router-view>
    <router-view name="Q"></router-view>
</template>
```

```javascript
const routes: Array<RouteRecordRaw> = [{
    path: '/K',
    name:'K',
    component:{
     K => import('../components/K.vue'),
     Q => import('../components/Q.vue')
    }
    meta:{},
    children:[]
}]
```

### 路由守卫

#### 1、全局前置路由

```ts
router.beforeEach(async (to, from, next) => {
    // to: Route  目标路由；
    // from: Route  当前路由；
    // next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    // next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
    // next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
});
```

#### 案例

```typescript
const whileList = ["/"]; // 路由白名单
router.beforeEach((to, from, next) => {
    NProgress.start();
    let token = localStorage.getItem("token");
    // 如果目标路由在白名单内 或者本地有存储token则放行路由
    if (whileList.includes(to.path) || token) {
        next();
        NProgress.done();
    } else {
        next({
            path: "/",
        });
        NProgress.done();
    }
});
```

#### 2、全局后置路由

```typescript
router.afterEach((to, from) => {
    // 一般用于网页加载条的渲染
    NProgress.done();
});
```

#### 案例

[引用自小满router]: https://xiaoman.blog.csdn.net/article/details/123699583?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123699583-blog-123585949.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123699583-blog-123585949.pc_relevant_aa&utm_relevant_index=3

```Vue
<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
    let dom = bar.value as HTMLElement;
    speed.value = 1
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1;
            dom.style.width = speed.value + '%'
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })
}
const endLoading = () => {
    let dom = bar.value as HTMLElement;
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100;
            dom.style.width = speed.value + '%'
        })
    }, 500)
}
defineExpose({
    startLoading,
    endLoading
})
</script>

```

```typescript
import loadingBar from "./components/loadingBar.vue";
// 将组件转为虚拟dom
const Vnode = createVNode(loadingBar);
// 使用render函数渲染到真正的dom
render(Vnode, document.body);

router.beforeEach((to, from, next) => {
    // 组件中使用defineExpose暴露方法 则用以下方式调用
    Vnode.component?.exposed?.startLoading();
});

router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading();
});
```

### 路由元信息

```typescript
import {RouteRecordRaw} 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
      // 自定义扩展
    isAlive?: boolean
    hidden: boolean
    transition:string
  }
}
const routes: Array<RouteRecordRaw> = [{
    path: '/login',
    name:'login',
    alias:['别名1','别名2'],
    redirect:'register'
    component: () => import('../components/login.vue'),
    meta:{isAlive:true,hidden:false,transition:'animate_fadeIn'},
    children:[]
},
```

### 路由过渡动画效果（搭配 animation.css 使用）

```vue
<template>
    <router-view #default="{ route, Component }">
        <transition
            :enter-active-class="`animate_animated ${route.meta.transition}`"
        >
            <keep-alive :include="aliveViews">
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>
<script setup lang="ts">
    import "animate.css";
</script>
```

### 路由滚动行为

###### 创建路由时配置 scrollBehavior 方法

```typescript
const router = createRouter({
    history: createWebHashHistory(),
    routes: allRoutes,
    scrollBehavior(to, from, savePosition) {
        // savePosition 自动记录当前页面滚动到的位置
        return {
            el: "#app",
            top: 0,
            behavior: "smooth",
        };
    },
});
```
