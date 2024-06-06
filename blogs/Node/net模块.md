---
title: net模块
date: 2023-01-06
tags:
 - NodeJS
categories: 
 - 前端基础
---

### 前言

###### 		Net模块提供了基于`流`的方式构建`TCP`或`IPC`服务端和客户端的能力，在具体学习之前先了解一下TCP与IPC。

### 关于TCP

###### 		TCP是网络传输控制协议，可在机器与机器之间进行通信。在OSI模型中位于传输层。

#### 特点：

- ##### 面向连接：即在正式通信前必须建立起可靠的连接，具体表现为三次握手。

  1. 客户端A向主机B发出连接请求数据包
  2. 主机B向客户端A发送同意连接和要求同步的数据包
  3. 客户端A再发出一个数据包确认与主机B同步

- ##### 端到端

- ##### 可靠的传输协议

  1. 应用数据被分割成TCP认为最合适发送的数据块
  2. 当TCP发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段；如果不能及时收到一个`确认`，将重发这个报文段。
  3. 当TCP收到来自TCP连接另一端的数据，它将发送一个确认。这个确认不是立即发送的，推迟发送。
  4. TCP将保持它首部和数据的校验和。这是一个端到端的校验和，目的是检测数据在传输的过程中的任何变化。如果收到报文段的校验和有差错，TCP将丢弃这个报文段并希望发送方重新发送。
  5. 既然TCP报文段作为IP数据包来传输，而IP数据报的到达可能会失序，那么TCP报文段的到达也可能会失序，如果有必要，TCP将对收到的数据进行重新排序，将收到的数据以正确的顺序交给应用层。然而，IP数据报会发生重复，TCP的接收端会进行重复数据的丢弃。
  6. TCP还可以进行流量控制。TCP连接的每一方都有固定大小的缓存空间，TCP接收端只允许另一方发送端发送接收端缓存区所能容纳的数据。

### 关于IPC

###### 		IPC是进程通信，只能在同一机器下的不同进程间通信。

------

### 构建TCP服务器

###### 		TCP服务器和客户端在创建会话的过程中，服务器端和客户端分别提供一个`套接字(socket)`,这两个套接字共同形成一个连接。服务器端和客户端则通过套接字实现两者之间连接的操作。

net.createServer(options, connectListener(socket))

- options: object
  - alloHalfOpen:boolean,默认为false,则当可读端结束时，套接字将自动结束可写端;
  - pauseOnConnect:boolean,默认值false,指示是否应在传入连接上暂停套接字
- connectLisetener: Function，是一个当客户端与服务器端建立链接时的回调函数，这个回调函数以socket端口对象作为参数
- 返回net.Server

```javascript
import net from 'net';

const server = net.createServer((socket) => {
  console.log('client connect')
  /***********************net.Socket事件*******************************/
  // 接收到数据时触发。
  socket.on('data', (data) => {
    console.log(data.toString())
  })
  // 当成功建立套接字连接时触发。
  socket.on('connect', () =>{
    console.log('套接字建立成功')
  })
  // 当写缓冲区变空时触发。
  socket.on('drain', () => {})
  // 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。
  socket.on('end', () => {
    console.log('数据接受完毕')
  })
  // 发生错误时触发，close事件将在此事件之后直接调用
  socket.on('error', (err) => {
    console.log(err)
  })
  // 一旦套接字完全关闭就触发
  socket.on('close', (hasError) => {
    // 参数 hadError 是布尔值，表示套接字是否由于传输错误而关闭。ture则表示由于传输错误而导致关闭
  })
})
/***************************net.Server 属性*****************************/
// 最大连接数字，设置此属性以在服务器的连接计数变高时拒绝连接。
server.maxConnections = 6;

/***************************net.Server事件******************************/
// 建立新连接时触发
server.on('connection', (socket) => {
  
})
// 发生错误时触发
server.on('error', (err) => {
  
})
// 服务器关闭时触发
server.on('close', () => {
  
})

/****************************net.Server方法*******************************/
// 异步获取服务器上的并发连接数
server.getConnections((err, count) => {
  if (err) return
  console.log(count)
})
// 获取监听地址端口参数信息
const address = server.address();

// 绑定监听端口
server.listen(8124, () => {
  console.log('TCP Server is runing')
})
// 停止服务器接受新连接并保持现有连接。
server.close((err) => {
  // 该函数是异步的，当所有连接都结束并且服务器触发 'close' 事件时，则服务器最终关闭。
  // 如果服务器在关闭时未打开，它将以 Error 作为唯一参数被调用。
})
```

### 构建TCP客户端

###### net.createConnection(options,connectListener())

- options：必需的。 
- connectListener ：net.createConnection()函数的通用参数。 如果提供，则将被添加为返回套接字上的 connect事件的监听器一次。
- 返回: 用于启动连接的新创建的套接字。

```javascript
import net from 'net';
// 创建新的 net.Socket，并立即使用 socket.connect() 发起连接，然后返回启动连接的 net.Socket。
// 建立连接后，将在返回的套接字上触发 'connect' 事件。 最后一个参数 connectListener（如果提供）将作为 'connect' 事件的监听器添加一次。
const client = net.createConnection({
  port: 8124, // 端口
  host: '11.11.11.12', // 服务地址，默认localhost
}, () => {
  console.log('连接成功')
})
/*********************net.Socket 属性*************************/
// 接受的字节数
client.bytesRead = 1024;
// 发送的字节数
client.bytesWritten = 2048;
// 返回本地IP地址的字符串表示
client.localAddress
// 返回本地端口
client.localPort
// 远程 IP 地址的字符串表示形式
client.remoteAddress
// 远程 IP 系列的字符串表示形式。 'IPv4' 或 'IPv6'。
client.remoteFamily
// 远程端口的数字表示
client.remotePort
/*********************net.Socket 事件*************************/
// 连接server成功后触发
client.on('connect', () => {

})
// 接收到数据时触发
client.on('data', (data) => {
  console.log(data.toString())
})
// 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。
client.on('end', () => {})
// 当写缓冲区变空时触发。 可用于限制上传。
client.on('drain', () => {})
// 当套接字准备好使用时触发。
client.on('ready', () => {})
// 如果套接字因不活动而超时则触发。
client.on('timeout', () => {
  // 这只是通知套接字已空闲。 用户必须手动关闭连接。
  client.destroy() // 关闭连接
})
// 发生错误时触发。 'close' 事件将在此事件之后直接调用。
client.on('error', (err) => {
  console.log(err)
})
// 一旦套接字完全关闭就触发
client.on('close',(hadError)=>{
    //如果是套接字有传输错误，则hadError为true。
})

/*********************net.Socket 方法********************************/
// 销毁流并关闭连接。
client.destroy()
// 在给定的套接字上发起连接。
client.connect()
// 获取连接地址信息
client.address()
// 关闭socket，可传入数据，在关闭之前再write一次数据
client.end(data, () => {
  console.log('连接已关闭')
})
// 暂停读取数据
client.pause()
// 继续读取数据
client.resume()
// 为data事件中的datastream统一设置编码
client.setEncoding('utf8');
// 设置套接字超时事件
client.setTimeout(3000);
// 在套接字上发送数据。 第二个参数指定字符串情况下的编码。 它默认为 UTF8 编码。
client.write(data, (err) => {
  if (err) return;
  console.log('数据发送成功')
})
```



###### 

