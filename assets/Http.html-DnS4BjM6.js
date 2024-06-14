import{_ as l,o as i,c as e,a as t}from"./app-BGYiCm6m.js";const a={},h=t('<h2 id="http1-0-和-http2-0-的区别" tabindex="-1"><a class="header-anchor" href="#http1-0-和-http2-0-的区别"><span>HTTP1.0 和 HTTP2.0 的区别</span></a></h2><ul><li>二进制协议：1.0 的解析是基于文本，2.0 使用二进制；将请求和响应分割为更小的帧，实现多路复用</li><li>多路复用：在一个连接中，客户端和服务端可以同时发送多个请求和响应，不用按照顺序一个一个发送，避免了 HTTP 队头阻塞问题 <ul><li>TP 队头阻塞：是指在同一域名下浏览器的连接数有限制，并且请求要在连接内按顺序处理，这样就会导致某个请求的延迟或阻塞会影响后续请求的处理。但 Tcp 队头阻塞仍然存在</li><li>TCP 队头阻塞：为了保证<strong>数据包的有序传输</strong>，如果一个数据包在丢失损坏后，<code>TCP</code>接受端会要求重新发送该数据包，直到被正确接收为止。）</li></ul></li><li>头部信息压缩：1.0 每次请求都会带上所有信息，2.0 引入头部压缩，将头部信息使用 gzip 压缩后发送，节省性能。同时客户端和服务端共同维护一张头部信息表，届时发送索引即可知道字段信息</li><li>服务端推送：2.0 允许服务器向客户端主动发送资源。</li></ul><h2 id="http-和-https-协议的区别" tabindex="-1"><a class="header-anchor" href="#http-和-https-协议的区别"><span>HTTP 和 HTTPS 协议的区别</span></a></h2><ul><li>HTTPS 需要 CA 证书，HTTP 不需要</li><li>HTTP 是不安全的明文传输，HTTPS 是基于 SSL 加密的安全传输</li><li>HTTP 端口是 80，HTTPS 是 443</li></ul><h2 id="http-请求中的-keep-alive" tabindex="-1"><a class="header-anchor" href="#http-请求中的-keep-alive"><span>HTTP 请求中的 Keep-alive</span></a></h2><p>​ 1.0 中每次请求响应建立连接，完成后立即断开是<strong>短连接；<strong>是一种</strong>长连接</strong>在请求完成后保持连接减少服务器请求压力。通过在请求头中添加<strong>Connection: keep-alive</strong>字段，在响应头中有该字段说明长连接已建立。在 1.0 中默认开启，2.0 使用多路复用机制后就取缔掉 Keep-alive 了</p><h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手"><span>三次握手</span></a></h2><p>​ 指建立一个<code>TCP</code>连接时，需要客户端和服务器总共发送 3 个包，主要作用是为了确认双方接受和发放能力是否正常。</p><ul><li><h5 id="字段理解" tabindex="-1"><a class="header-anchor" href="#字段理解"><span>字段理解：</span></a></h5><ul><li>seq：<code>序列号</code>随机数 seq=x 每次连接都会携带一个自己的随机序列号</li><li>ack：<code>确认号</code>ack=seq+1 确认上一次收到了序列号除了第一次连接都会携带</li><li>ACK：确认收到序列号 ACK=1 除了第一次连接都会携带</li><li>SYN：发起一个新连接 SYN=1</li><li>SYN：发起一个新连接 SYN=1</li><li>FIN：释放一个连接 FIN=1</li></ul></li><li><p>初始化 客户端处在 closed 状态，服务端处于 listen 状态</p><ul><li>第一次握手：客户端向服务端发送请求连接报文</li><li>第二次握手：服务器收到报文，向客户端发送回复报文，同意连接</li><li>第三次握手：浏览器收到报文后回复服务器。收到同意连接报文。连接正式建立</li><li>为什么需要第三次握手：为了确认双方的接收能力和发送能力都正常。服务端在发送完<code>SYN</code>报文后，客户端需要回复一个<code>ACK</code>告诉服务的确认有效。</li></ul></li></ul><h2 id="四次握手" tabindex="-1"><a class="header-anchor" href="#四次握手"><span>四次握手</span></a></h2><p>​ 客户端断开连接</p><ul><li>第一次握手：向服务器发送报文，我要断开连接了</li><li>第二次握手：服务器收到报文后，开始处理未完成事物</li><li>第三次握手：服务器向客户端发送报文，我处理好了</li><li>第四次握手：客户端收到服务器报文后，回复服务器 OK</li></ul><p><strong>为什么是四次</strong> 客户端发送<code>FIN</code>报文后，表示客户端当前没有数据需要处理，而不代表服务端没有数据需要处理。此时需要服务端回复<code>ACK</code>确认收到报文后，开始处理内部数据。当内部数据处理完后，再回复<code>FIN</code>可以关闭连接</p><h2 id="浏览器输入-url-回车后处理" tabindex="-1"><a class="header-anchor" href="#浏览器输入-url-回车后处理"><span>浏览器输入 URL 回车后处理</span></a></h2><ul><li>URL 解析：头部啊 端口啊 域名啊补充完整</li><li>缓存判断：判断本地是否有请求资源的缓存，这样就可以不用向服务器请求</li><li>DNS 解析：通过域名获取服务器 IP 地址</li><li>建立连接：三次握手</li><li>发送请求</li><li>服务器处理返回数据</li><li>浏览器渲染页面</li><li>关闭连接：四次握手</li></ul><h2 id="https-加密过程" tabindex="-1"><a class="header-anchor" href="#https-加密过程"><span>HTTPS 加密过程</span></a></h2><p>使用混合加密方式即对称加密加非对称加密</p><ul><li>服务端传递 CA 证书给客户端</li><li>客户端通过证书验证网站，拿到公钥 A</li><li>客户端对称加密生成密钥 B，用公钥 A 加密后返回给服务端</li><li>服务端拿私钥 A 解密公钥 A，拿到客户端给的密钥 B</li><li>后续通信就使用客户端给的密钥 B 进行加密</li></ul><h2 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码"><span>HTTP 状态码</span></a></h2><ul><li>1xx：请求正在处理</li><li>2XX：正常状态 <ul><li>200：请求处理成功</li><li>201：请求成功服务器已创建新资源</li><li>202：服务器已接收请求，但尚未处理</li></ul></li><li>3xx：重定向状态 <ul><li>301：请求重定向</li><li>302：临时重定向</li><li>303：临时重定向，使用 get 请求新的 URL</li><li>304：浏览器缓存相关</li></ul></li><li>4xx：错误状态 <ul><li>400：请求格式服务器无法理解</li><li>401：请求未授权</li><li>403：禁止访问</li><li>404：服务器上没有请求资源</li></ul></li><li>5xx：服务器错误状态 <ul><li>500：服务端错误</li><li>503：服务器暂时无法处理请求</li></ul></li></ul><h2 id="九种请求方式" tabindex="-1"><a class="header-anchor" href="#九种请求方式"><span>九种请求方式</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/kq981024/Media/202406141901105.png" alt="9种请求方式"></p>',22),s=[h];function n(p,r){return i(),e("div",null,s)}const d=l(a,[["render",n],["__file","Http.html.vue"]]),o=JSON.parse('{"path":"/blogs/Network/Http.html","title":"Http","lang":"en-US","frontmatter":{"title":"Http","date":"2023-10-06T00:00:00.000Z","tags":["Network"],"categories":["Network"]},"headers":[{"level":2,"title":"HTTP1.0 和 HTTP2.0 的区别","slug":"http1-0-和-http2-0-的区别","link":"#http1-0-和-http2-0-的区别","children":[]},{"level":2,"title":"HTTP 和 HTTPS 协议的区别","slug":"http-和-https-协议的区别","link":"#http-和-https-协议的区别","children":[]},{"level":2,"title":"HTTP 请求中的 Keep-alive","slug":"http-请求中的-keep-alive","link":"#http-请求中的-keep-alive","children":[]},{"level":2,"title":"三次握手","slug":"三次握手","link":"#三次握手","children":[]},{"level":2,"title":"四次握手","slug":"四次握手","link":"#四次握手","children":[]},{"level":2,"title":"浏览器输入 URL 回车后处理","slug":"浏览器输入-url-回车后处理","link":"#浏览器输入-url-回车后处理","children":[]},{"level":2,"title":"HTTPS 加密过程","slug":"https-加密过程","link":"#https-加密过程","children":[]},{"level":2,"title":"HTTP 状态码","slug":"http-状态码","link":"#http-状态码","children":[]},{"level":2,"title":"九种请求方式","slug":"九种请求方式","link":"#九种请求方式","children":[]}],"git":{"createdTime":1717591877000,"updatedTime":1718364603000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":2}]},"filePathRelative":"blogs/Network/Http.md"}');export{d as comp,o as data};