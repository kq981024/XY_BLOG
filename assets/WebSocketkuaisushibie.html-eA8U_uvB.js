import{_ as e,o as t,c as a,a as c}from"./app-BGYiCm6m.js";const n={},o=c(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><h5 id="从笔者角度理解websocket-说白了就是打破请求只能由客户端发起的限制。每次轮训服务端好麻烦的勒-服务端说不用你来问-我自己给你。只能说极大优化了通信-使得某些需要互相通信的功能实现非常简单。是居家旅行必备良药。以下是笔者日常开发的小总结-让我们起飞芜湖芜湖" tabindex="-1"><a class="header-anchor" href="#从笔者角度理解websocket-说白了就是打破请求只能由客户端发起的限制。每次轮训服务端好麻烦的勒-服务端说不用你来问-我自己给你。只能说极大优化了通信-使得某些需要互相通信的功能实现非常简单。是居家旅行必备良药。以下是笔者日常开发的小总结-让我们起飞芜湖芜湖"><span>从笔者角度理解webSocket，说白了就是打破请求只能由客户端发起的限制。每次轮训服务端好麻烦的勒，服务端说不用你来问，我自己给你。只能说极大优化了通信，使得某些需要互相通信的功能实现非常简单。是居家旅行必备良药。以下是笔者日常开发的小总结，让我们起飞芜湖芜湖~~~~</span></a></h5><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41c4746e651f4c0e969afa33208b5449~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h2 id="初始化websocket" tabindex="-1"><a class="header-anchor" href="#初始化websocket"><span>初始化webSocket</span></a></h2><pre><code>const initSocket = new webSocket(url,[,protocols])
// url:要连接的URL，即服务端响应的URL
// protocols?: 子协议字符串数组
</code></pre><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性"><span>实例属性</span></a></h2><pre><code>initSocket.readyState   // 连接状态 0、正在连接 1、已连接可通讯 2、正在关闭连接 3、连接关闭或未连接

initSocket.bufferedAmount  // 判断是否还有字节未传输到网络中
</code></pre><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h2><pre><code>initSocket.close()    // 断开连接

initSocket.send(data)  // 确定已连接可向服务器发送数据  可以发送字符串、buffer和bolb类型数据
</code></pre><h2 id="实例事件" tabindex="-1"><a class="header-anchor" href="#实例事件"><span>实例事件</span></a></h2><pre><code>initSocket.onclose(callback)  // 断开连接回调

initSocket.onerror(callback)  // 发生错误事件回调

initSocket.onmessage(callback) // 服务器发送数据 接听到回调

initSocket.onopen(callback)   // 连接成功回调 在此回调中无法直接调用send方法，需延迟后调用
</code></pre><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>单向变双向，真滴好用。更多使用方式详见官网https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget</p></blockquote>`,13),i=[o];function s(l,r){return t(),a("div",null,i)}const d=e(n,[["render",s],["__file","WebSocketkuaisushibie.html.vue"]]),p=JSON.parse('{"path":"/blogs/JavaScript/WebSocketkuaisushibie.html","title":"WebSocket快速识别","lang":"en-US","frontmatter":{"title":"WebSocket快速识别","date":"2023-08-08T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"初始化webSocket","slug":"初始化websocket","link":"#初始化websocket","children":[]},{"level":2,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[]},{"level":2,"title":"实例事件","slug":"实例事件","link":"#实例事件","children":[]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1718364603000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":2}]},"filePathRelative":"blogs/JavaScript/WebSocket快速识别.md"}');export{d as comp,p as data};
