---
title: path模块
date: 2023-01-06
tags:
  - NodeJS
categories:
  - 前端基础
---

### 前言

​		path 模块是处理路径的模块，提供方法和属性用来满足对路径的处理需求

### 方法

##### path.join([...paths])

- **参数说明**：[...paths]:路径数组

- **作用**：将多个路径片段拼接成完整的路径字符串

```ts
const path = require("path");
const fullPath = path.join("a", "b", "c"); //  a/b/c
```

##### path.basename(path,ext)

- **参数说明**：path:路径字符串,ext：文件扩展名，如果不为空则省略路径字符串的扩展名

- **作用**：获取文件名

```ts
const path = require("path");
const fpath = "../a/b/c/index.html";
const fullName = path.basename(fpath); // index.html
const nameWithoutExt = path.basename(fpath, ".html"); // index
```

##### path.extname(path)

- **参数说明**：path:路径字符串

- **作用**：获取文件的扩展名

```ts
const path = require("path");
const fpath = "a/b/c/index.html";
const fext = path.extname(fpath); // .html
```

##### path.dirname(path)

- **参数说明**：path:路径字符串

- **作用**：获取文件所在目录

```ts
const path = require("path");
const fpath = "a/b/c/index.html";
const fext = path.dirname(fpath); // a/b/c
```

##### path.resolve([...paths])

- **参数说明**:路径数组

- **作用**:将路径数组拼接解析为规范绝对路径

- **注意**：路径片段是从右拼接到左，当没有传入 path 片段，返回当前工作目录的绝对路径

```ts
const path = require("path");
path.resolve("/foo/bar", "./baz");
// 返回: '/foo/bar/baz'

path.resolve("/foo/bar", "/tmp/file/");
// 返回: '/tmp/file'

path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

##### path.parse(path)

- **参数说明**：path:路径字符串

- **作用**：解析路径并返回路径对象，属性包含base,extd等

  

##### path.sep(path)  

- **参数说明**：path:路径字符串
- **作用**：返回路径分隔符,window（/），Linux（\）

