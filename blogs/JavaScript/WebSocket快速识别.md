---
title: WebSocket快速识别
date: 2023-08-08
tags:
  - JavaScript
categories: 
  - JavaScript
---

## 前言

##### 		从笔者角度理解webSocket，说白了就是打破请求只能由客户端发起的限制。每次轮训服务端好麻烦的勒，服务端说不用你来问，我自己给你。只能说极大优化了通信，使得某些需要互相通信的功能实现非常简单。是居家旅行必备良药。以下是笔者日常开发的小总结，让我们起飞芜湖芜湖~~~~

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41c4746e651f4c0e969afa33208b5449~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 初始化webSocket

```
const initSocket = new webSocket(url,[,protocols])
// url:要连接的URL，即服务端响应的URL
// protocols?: 子协议字符串数组
```

## 实例属性

```
initSocket.readyState   // 连接状态 0、正在连接 1、已连接可通讯 2、正在关闭连接 3、连接关闭或未连接

initSocket.bufferedAmount  // 判断是否还有字节未传输到网络中
```

## 实例方法

```
initSocket.close()    // 断开连接

initSocket.send(data)  // 确定已连接可向服务器发送数据  可以发送字符串、buffer和bolb类型数据
```

## 实例事件

```
initSocket.onclose(callback)  // 断开连接回调

initSocket.onerror(callback)  // 发生错误事件回调

initSocket.onmessage(callback) // 服务器发送数据 接听到回调

initSocket.onopen(callback)   // 连接成功回调 在此回调中无法直接调用send方法，需延迟后调用
```

## 写在最后

> 单向变双向，真滴好用。更多使用方式详见官网https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget

