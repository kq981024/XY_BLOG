---
title: Promise快速识别
date: 2023-02-15
tags:
    - JavaScript
categories:
    - JavaScript
---

### 前言

### 学习前提

##### eventLoop(事件队列)

-   一开始整个脚本作为一个宏任务执行
-   执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
-   当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
-   执行浏览器 UI 线程的渲染工作
-   检查是否有`Web Worker（独立于主线程运行的子线程）`任务，有则执行
-   执行完本轮的宏任务，回到 2，依此循环，直到宏任务和微任务队列都为空

##### 宏任务

*setTimeout、setInterval、 setImmediate、script*（整体代码）、 *I/O* 操作、*UI* 渲染等。

setTimeout 这种类型的宏任务会留到下次执行宏任务时执行

##### 微任务

`MutationObserver`、`Promise.then()或catch()`、`Promise为基础开发的其它技术，比如fetch API`、`V8`的垃圾回收过程、`Node独有的process.nextTick`。

##### 		**宏任务队列可以有多个，微任务队列只有一个**。当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。

### 总结

1. `Promise`的状态一经改变就不能再改变。
2. `.then`和`.catch`都会返回一个新的`Promise`。
3. `catch`不管被连接到哪里，都能捕获上层未捕捉过的错误。
4. 在`Promise`中，返回任意一个非 `promise` 的值都会被包裹成 `promise` 对象，例如`return 2`会被包装为`return Promise.resolve(2)`。
5. `Promise` 的 `.then` 或者 `.catch` 可以被调用多次, 但如果`Promise`内部的状态一经改变，并且有了一个值，那么后续每次调用`.then`或者`.catch`的时候都会直接拿到该值。
6. `.then` 或者 `.catch` 中 `return` 一个 `error` 对象并不会抛出错误，所以不会被后续的 `.catch` 捕获。
7. `.then` 或 `.catch` 返回的值不能是 promise 本身，否则会造成死循环。
8. `.then` 或者 `.catch` 的参数期望是函数，传入非函数则会发生值透传。
9. `.then`方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为`catch`是`.then`第二个参数的简便写法。
10. `.finally`方法也是返回一个`Promise`，他在`Promise`结束的时候，无论结果为`resolved`还是`rejected`，都会执行里面的回调函数。
11. `.all()`方法传入一个Promise，如果状态为成功则返回一个数组。数组元素不是Promise会被.Resolve方法转换为Promise对象，数组结果顺序和传入顺序一致，否则为reject返回

