import{_ as n,o as s,c as a,a as t}from"./app-BGYiCm6m.js";const p={},o=t(`<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3><h6 id="net模块提供了基于流的方式构建tcp或ipc服务端和客户端的能力-在具体学习之前先了解一下tcp与ipc。" tabindex="-1"><a class="header-anchor" href="#net模块提供了基于流的方式构建tcp或ipc服务端和客户端的能力-在具体学习之前先了解一下tcp与ipc。"><span>Net模块提供了基于<code>流</code>的方式构建<code>TCP</code>或<code>IPC</code>服务端和客户端的能力，在具体学习之前先了解一下TCP与IPC。</span></a></h6><h3 id="关于tcp" tabindex="-1"><a class="header-anchor" href="#关于tcp"><span>关于TCP</span></a></h3><h6 id="tcp是网络传输控制协议-可在机器与机器之间进行通信。在osi模型中位于传输层。" tabindex="-1"><a class="header-anchor" href="#tcp是网络传输控制协议-可在机器与机器之间进行通信。在osi模型中位于传输层。"><span>TCP是网络传输控制协议，可在机器与机器之间进行通信。在OSI模型中位于传输层。</span></a></h6><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h4><ul><li><h5 id="面向连接-即在正式通信前必须建立起可靠的连接-具体表现为三次握手。" tabindex="-1"><a class="header-anchor" href="#面向连接-即在正式通信前必须建立起可靠的连接-具体表现为三次握手。"><span>面向连接：即在正式通信前必须建立起可靠的连接，具体表现为三次握手。</span></a></h5><ol><li>客户端A向主机B发出连接请求数据包</li><li>主机B向客户端A发送同意连接和要求同步的数据包</li><li>客户端A再发出一个数据包确认与主机B同步</li></ol></li><li><h5 id="端到端" tabindex="-1"><a class="header-anchor" href="#端到端"><span>端到端</span></a></h5></li><li><h5 id="可靠的传输协议" tabindex="-1"><a class="header-anchor" href="#可靠的传输协议"><span>可靠的传输协议</span></a></h5><ol><li>应用数据被分割成TCP认为最合适发送的数据块</li><li>当TCP发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段；如果不能及时收到一个<code>确认</code>，将重发这个报文段。</li><li>当TCP收到来自TCP连接另一端的数据，它将发送一个确认。这个确认不是立即发送的，推迟发送。</li><li>TCP将保持它首部和数据的校验和。这是一个端到端的校验和，目的是检测数据在传输的过程中的任何变化。如果收到报文段的校验和有差错，TCP将丢弃这个报文段并希望发送方重新发送。</li><li>既然TCP报文段作为IP数据包来传输，而IP数据报的到达可能会失序，那么TCP报文段的到达也可能会失序，如果有必要，TCP将对收到的数据进行重新排序，将收到的数据以正确的顺序交给应用层。然而，IP数据报会发生重复，TCP的接收端会进行重复数据的丢弃。</li><li>TCP还可以进行流量控制。TCP连接的每一方都有固定大小的缓存空间，TCP接收端只允许另一方发送端发送接收端缓存区所能容纳的数据。</li></ol></li></ul><h3 id="关于ipc" tabindex="-1"><a class="header-anchor" href="#关于ipc"><span>关于IPC</span></a></h3><h6 id="ipc是进程通信-只能在同一机器下的不同进程间通信。" tabindex="-1"><a class="header-anchor" href="#ipc是进程通信-只能在同一机器下的不同进程间通信。"><span>IPC是进程通信，只能在同一机器下的不同进程间通信。</span></a></h6><hr><h3 id="构建tcp服务器" tabindex="-1"><a class="header-anchor" href="#构建tcp服务器"><span>构建TCP服务器</span></a></h3><h6 id="tcp服务器和客户端在创建会话的过程中-服务器端和客户端分别提供一个套接字-socket-这两个套接字共同形成一个连接。服务器端和客户端则通过套接字实现两者之间连接的操作。" tabindex="-1"><a class="header-anchor" href="#tcp服务器和客户端在创建会话的过程中-服务器端和客户端分别提供一个套接字-socket-这两个套接字共同形成一个连接。服务器端和客户端则通过套接字实现两者之间连接的操作。"><span>TCP服务器和客户端在创建会话的过程中，服务器端和客户端分别提供一个<code>套接字(socket)</code>,这两个套接字共同形成一个连接。服务器端和客户端则通过套接字实现两者之间连接的操作。</span></a></h6><p>net.createServer(options, connectListener(socket))</p><ul><li>options: object <ul><li>alloHalfOpen:boolean,默认为false,则当可读端结束时，套接字将自动结束可写端;</li><li>pauseOnConnect:boolean,默认值false,指示是否应在传入连接上暂停套接字</li></ul></li><li>connectLisetener: Function，是一个当客户端与服务器端建立链接时的回调函数，这个回调函数以socket端口对象作为参数</li><li>返回net.Server</li></ul><pre><code class="language-javascript"><span class="token keyword">import</span> net <span class="token keyword">from</span> <span class="token string">&#39;net&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;client connect&#39;</span><span class="token punctuation">)</span>
  <span class="token doc-comment comment">/***********************net.Socket事件*******************************/</span>
  <span class="token comment">// 接收到数据时触发。</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 当成功建立套接字连接时触发。</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;套接字建立成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 当写缓冲区变空时触发。</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;drain&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据接受完毕&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 发生错误时触发，close事件将在此事件之后直接调用</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 一旦套接字完全关闭就触发</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">hasError</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 参数 hadError 是布尔值，表示套接字是否由于传输错误而关闭。ture则表示由于传输错误而导致关闭</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/***************************net.Server 属性*****************************/</span>
<span class="token comment">// 最大连接数字，设置此属性以在服务器的连接计数变高时拒绝连接。</span>
server<span class="token punctuation">.</span>maxConnections <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/***************************net.Server事件******************************/</span>
<span class="token comment">// 建立新连接时触发</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 发生错误时触发</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 服务器关闭时触发</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/****************************net.Server方法*******************************/</span>
<span class="token comment">// 异步获取服务器上的并发连接数</span>
server<span class="token punctuation">.</span><span class="token function">getConnections</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 获取监听地址端口参数信息</span>
<span class="token keyword">const</span> address <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绑定监听端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8124</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TCP Server is runing&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 停止服务器接受新连接并保持现有连接。</span>
server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 该函数是异步的，当所有连接都结束并且服务器触发 &#39;close&#39; 事件时，则服务器最终关闭。</span>
  <span class="token comment">// 如果服务器在关闭时未打开，它将以 Error 作为唯一参数被调用。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="构建tcp客户端" tabindex="-1"><a class="header-anchor" href="#构建tcp客户端"><span>构建TCP客户端</span></a></h3><h6 id="net-createconnection-options-connectlistener" tabindex="-1"><a class="header-anchor" href="#net-createconnection-options-connectlistener"><span>net.createConnection(options,connectListener())</span></a></h6><ul><li>options：必需的。</li><li>connectListener ：net.createConnection()函数的通用参数。 如果提供，则将被添加为返回套接字上的 connect事件的监听器一次。</li><li>返回: 用于启动连接的新创建的套接字。</li></ul><pre><code class="language-javascript"><span class="token keyword">import</span> net <span class="token keyword">from</span> <span class="token string">&#39;net&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 创建新的 net.Socket，并立即使用 socket.connect() 发起连接，然后返回启动连接的 net.Socket。</span>
<span class="token comment">// 建立连接后，将在返回的套接字上触发 &#39;connect&#39; 事件。 最后一个参数 connectListener（如果提供）将作为 &#39;connect&#39; 事件的监听器添加一次。</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8124</span><span class="token punctuation">,</span> <span class="token comment">// 端口</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;11.11.11.12&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 服务地址，默认localhost</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/*********************net.Socket 属性*************************/</span>
<span class="token comment">// 接受的字节数</span>
client<span class="token punctuation">.</span>bytesRead <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">// 发送的字节数</span>
client<span class="token punctuation">.</span>bytesWritten <span class="token operator">=</span> <span class="token number">2048</span><span class="token punctuation">;</span>
<span class="token comment">// 返回本地IP地址的字符串表示</span>
client<span class="token punctuation">.</span>localAddress
<span class="token comment">// 返回本地端口</span>
client<span class="token punctuation">.</span>localPort
<span class="token comment">// 远程 IP 地址的字符串表示形式</span>
client<span class="token punctuation">.</span>remoteAddress
<span class="token comment">// 远程 IP 系列的字符串表示形式。 &#39;IPv4&#39; 或 &#39;IPv6&#39;。</span>
client<span class="token punctuation">.</span>remoteFamily
<span class="token comment">// 远程端口的数字表示</span>
client<span class="token punctuation">.</span>remotePort
<span class="token doc-comment comment">/*********************net.Socket 事件*************************/</span>
<span class="token comment">// 连接server成功后触发</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 接收到数据时触发</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端。</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 当写缓冲区变空时触发。 可用于限制上传。</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;drain&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 当套接字准备好使用时触发。</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 如果套接字因不活动而超时则触发。</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这只是通知套接字已空闲。 用户必须手动关闭连接。</span>
  client<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭连接</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 发生错误时触发。 &#39;close&#39; 事件将在此事件之后直接调用。</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 一旦套接字完全关闭就触发</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">hadError</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//如果是套接字有传输错误，则hadError为true。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/*********************net.Socket 方法********************************/</span>
<span class="token comment">// 销毁流并关闭连接。</span>
client<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 在给定的套接字上发起连接。</span>
client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 获取连接地址信息</span>
client<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 关闭socket，可传入数据，在关闭之前再write一次数据</span>
client<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接已关闭&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 暂停读取数据</span>
client<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 继续读取数据</span>
client<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 为data事件中的datastream统一设置编码</span>
client<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置套接字超时事件</span>
client<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 在套接字上发送数据。 第二个参数指定字符串情况下的编码。 它默认为 UTF8 编码。</span>
client<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据发送成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h6 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h6>`,19),c=[o];function e(l,u){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","netmokuai.html.vue"]]),r=JSON.parse('{"path":"/blogs/Node/netmokuai.html","title":"net模块","lang":"en-US","frontmatter":{"title":"net模块","date":"2023-01-06T00:00:00.000Z","tags":["NodeJS"],"categories":["Node"]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"关于TCP","slug":"关于tcp","link":"#关于tcp","children":[]},{"level":3,"title":"关于IPC","slug":"关于ipc","link":"#关于ipc","children":[]},{"level":3,"title":"构建TCP服务器","slug":"构建tcp服务器","link":"#构建tcp服务器","children":[]},{"level":3,"title":"构建TCP客户端","slug":"构建tcp客户端","link":"#构建tcp客户端","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1717677053000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":1}]},"filePathRelative":"blogs/Node/net模块.md"}');export{k as comp,r as data};
