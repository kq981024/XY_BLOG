---
title: fs模块
date: 2023-01-06
tags:
 - NodeJS
categories: 
 - 前端基础
---

### 前言

        fs模块是用来操作文件的模块，提供一系列的方法和属性满足对文件的操作需求,**fs的相对路径参照物是命令行的工作目录**，**__dirname**保存的是文件所在目录的绝对路径


### 方法

##### fs.readFile(path,opt,cbk)：同步读取 | fs.readFileSync(path）: 同步读取

- **参数说明** ： path：读取文件路径，opt：读取配置，cbk：读取文件回调

- **作用**：读取给定文件路径下的文件

- **实例**：
  
  ```js
  const fs = require('fs')
  fs.readFile('./文件路径.txt','utf8',(err,data)=>{
       // err:读取失败，data：读取数据
  })
  const data = fs.readFileSync('./同步读取.txt', 'utf-8')
  ```

##### fs.writeFile(path,data,opt,cbk(obj))：异步写入 |  fs.writeFileSync(path,data)：同步写入

- **参数说明**：path：文件存放路径，data:写入内容，opt:写入配置(flag:'a'<追加加>)，cbk:写入文件回调，obj：为null为成功否则为错误对象

- **作用**：写入数据到给定文件路径下的文件

- **实例**：
  
  ```js
  const fs = require('fs')
  
  fs.writeFile('异步写入.txt', '你好', (obj) => {
    if (obj) {
      console.log('错误----', obj)
    }
    console.log('成功')
  })
  
  const fs = require('fs')
  fs.writeFileSync('同步写入.txt', '你好')
  ```

##### fs.append(path,data,cbk(obj))：异步追加 | fs.appendSync(path,data)：同步追加 

- **参数说明**：path：追加文件路径，data:追加内容，

- **作用**：追加文件内容

- **实例**：

  ```js
  fs.appendFile('./同步写入.txt', '同步追加', (errObj) => {
    if (errObj) {
      console.log('追加错误----', errObj)
    }
    console.log('追加成功')
  })
  
  fs.appendFileSync('./异步写入.txt', '\r\n异步追加')
  ```

##### fs.createWriteStream(path)：流式写入 适用于频繁写入 可减少文件开启关闭次数

- **参数说明**：path:文件路径

- **作用**：创建流式写入对象 减少文件操作次数

- **实例**：

  ```js
  const fs = require('fs')
  const ws = fs.createWriteStream('./流式写入.txt')
  ws.write('第一次写入\r\n')
  ws.write('第二次写入\r\n')
  ws.write('第三次写入\r\n')
  ws.write('第N次写入\r\n')
  ws.close()
  ```

##### fs.createReadStream(path)：流式读取 

- **参数说明**：path:文件路径

- **作用**：创建流式读取对象 减少文件操作次数

- **实例**：

  ```js
  const fs = require('fs')
  const rs = fs.createReadStream('./流式读取.txt')
  const ws = fs.createWriteStream('./流式写入.txt')
  rs.on('data', (chunk) => {
    console.log(chunk, '读取的数据块大致64kb')
  })
  
  rs.pipe(ws)   // 快速复制rs读取的文件
  ```

##### fs.rename(oldPath,newPath,cbk(obj)) :异步重命名移动 | fs.renameSync(oldPath,newPath) :同步重命名移动

- **参数说明**：oldPath：旧文件路径  newPath:新文件路径  cbk(obj) 回调根据obj判断是否成功

- **作用**：重命名文件和移动文件

- **实例**：

  ```js
  fs.rename('./同步写入.txt', './异步重命名.txt', (err) => {
    if (err) {
      console.log('错误', err)
    }
    console.log('成功')
  })
  
  fs.renameSync('./同步写入.txt', './同步重命名.txt')
  ```

##### fs.unlink(path,cbk(obj)) ;fs.rm(path,cbk(obj)) 异步删除文件 | fs.unlinkSync(path) ;fs.rm(path): 同步删除文件

- **参数说明**：path: 文件路径

- **作用**：删除文件

- **实例**：

  ```js
  fs.unlink('66666.txt', (err) => {
    if (err) console.log('错误', err)
    console.log('成功')
  })
  fs.unlinkSync('66666.txt')
  
  fs.rm('66666.txt', (err) => {
    if (err) console.log('错误', err)
    console.log('成功')
  })
  
  fs.rmSync('66666.txt')
  ```

##### fs.mkdir(path,cbk(obj))：异步创建文件夹| fs.mkdirSync(path)：同步创建文件夹

- **参数说明**：path:文件夹路径

- **作用**：创建文件夹

- **实例**：

  ```js
  const fs = require('fs')
  
  fs.mkdir('./新建文件夹/多层级递归删除recursive属性', { recursive: true }, (err) => {
    if (err) {
      console.log('错误', err)
    }
    console.log('成功')
  })
  
  fs.mkdirSync('./同步新增文件夹')
  ```

##### fs.readdir(path,cbk(obj,data))：异步读取文件夹| fs.readdirSync(path)：同步读取文件夹

- **参数说明**：path:文件夹路径，data:文件数据

- **作用**：创建文件夹

- **实例**：

  ```js
  fs.readdir('./', (err, data) => {
    if (err) {
      console.log('错误', err)
    }
    console.log('数据', data)
  })
  fs.readdirSync('./')
  ```

##### fs.rmdir(path, opt<{ recursive: true } >,cbk(obj))：异步删除文件夹| fs.rmdirSync(path)：同步删除文件夹

- **参数说明**：path:文件夹路径

- **作用**：删除文件夹

- **实例**：

  ```js
  fs.rmdir('./新建文件夹/多层级递归删除recursive属性', (err) => {
    if (err) {
      console.log('错误', err) 
    }
    console.log('成功')
  })
  fs.rmdirSync('./新建文件夹')
  ```

##### fs.stat(path,cbk(obj,data))：异步获取文件状态 | fs.stat(path)：同步获取文件状态

- **参数说明**：path:文件夹路径，data：状态数据

- **作用**：获取文件状态

- **实例**：

  ```js
  fs.stat('./新建文件夹', (err, data) => {
    if (err) console.log('错误', err)
    console.log(data)
  })
  
  let data = fs.statSync('./新建文件夹')
  console.log(data)
  ```

##### ##### 

