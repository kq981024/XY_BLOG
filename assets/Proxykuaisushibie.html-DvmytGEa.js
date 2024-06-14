import{_ as n,o as s,c as a,a as t}from"./app-BGYiCm6m.js";const p={},e=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><h5 id="可以将proxy理解为一个检票口代理-要进去玩做点什么就会被这个代理拦截处理-买票啊-登记啥的-后再返回。" tabindex="-1"><a class="header-anchor" href="#可以将proxy理解为一个检票口代理-要进去玩做点什么就会被这个代理拦截处理-买票啊-登记啥的-后再返回。"><span>可以将proxy理解为一个检票口代理，要进去玩做点什么就会被这个代理拦截处理（买票啊，登记啥的）后再返回。</span></a></h5><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><ul><li><p>get：用于在读取被拦截对象的属性，当读取对象属性值的时候就会触发此方法，传递三个参数分别是代理对象，读取的key，以及this指向，</p><pre><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;心野&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> pxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>pointTo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//  doSomeing</span>
	   <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>  <span class="token comment">//  不变返回</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
pxy<span class="token punctuation">.</span>name<span class="token punctuation">;</span>   <span class="token comment">// 指定返回</span>
pxy<span class="token punctuation">.</span>age<span class="token punctuation">;</span>    <span class="token comment">// 指定返回</span>
</code></pre></li><li><p>set：对象属性被修改时触发，传递四个参数，对象本身，key值，要修改的值，this指向。返回布尔值判断是否修改成功</p><pre><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;心野&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//....</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//属性能被修改，此方法一定会返回true，否则false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pxy<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>    <span class="token comment">//当修改时，就会触发set方法，并打印set方法里的日志</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pxy<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//{ name: &#39;心野&#39;, age: 18 }</span>
</code></pre></li><li><p>has：对in操作符的拦截，也就是在对象中能否查找到这个属性，传递两个参数，对象本身和key，返回一个布尔值判断是否可以被in操作符查找到</p><pre><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&quot;_心野&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;心野&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//判定条件，带有&#39;_&#39;的都将不会被查到</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;_name&quot;</span> <span class="token keyword">in</span> pxy<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token keyword">in</span> pxy<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>

<span class="token comment">//但是这个方法在使用for in 遍历的时候是不会触发的，也就无法进行拦截</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> pxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//_name</span>
<span class="token comment">//name</span>
<span class="token comment">//age</span>
</code></pre></li><li><p>ownKeys：主要对Reflect.ownKeys方法的拦截</p></li><li><p>deleteProperty：用于delete对象属性的拦截</p></li><li><p>definProperty 用于Object.definProperty方法的拦截</p></li><li><p>getOwnPropertyDescriptor：用于Object.getOwnPropertyDescriptor的拦截方法</p></li><li><p>getPrototypeOf：当读取对象原型的时候，就会触发此拦截方法</p></li><li><p>setPrototypeOf：主要拦截Object.setPrototypeOf</p></li><li><p>preventExtensions：用于对Object.preventExtensions的拦截</p></li><li><p>isExtensible：用于对Object.isExtensible的拦截</p></li><li><p>construct：用于拦截new操作符</p></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><h5 id="实现简易双向绑定" tabindex="-1"><a class="header-anchor" href="#实现简易双向绑定"><span>实现简易双向绑定</span></a></h5><pre><code class="language-Html"> &lt;body&gt;
 //创建两个元素
    &lt;input type=&quot;text&quot; placeholder=&quot;描述&quot; class=&quot;des&quot; /&gt;
    &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
  &lt;script&gt;
  //获取元素
    const des = document.querySelector(&quot;.des&quot;);
    const div = document.querySelector(&quot;div&quot;);
    //给input添加input事件
    des.addEventListener(&quot;input&quot;, (e) =&gt; {
    //每次触发input事件都会更改formProxy对象里面属性的值
      formProxy.des = e.target.value;
    });
    //为了简便操作，这里直接代理一个空对象
    const formProxy = new Proxy({}, {
      get(traget, key, receiver) {
        return Reflect.get(...arguments);
      },
      //在更改代理对象里面属性值的时候，就会触发set事件
      set(target, key, value, receiver) {
      //在set事件里面拿到更改的值value 赋值到要显示的地方
        div.innerText = value;  //给div
        des.value = value;  //给input
        return Reflect.set(...arguments);
      },
    });
   &lt;/script&gt;
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>​ <code>Proxy</code>的13种方法各有各的用处，但平常我们用不到，即使是写<code>Proxy</code>的时候，大多情况下也只能用到<code>get</code>，<code>set</code>等方法，像对<code>Object</code>方法的拦截，需求少之又少。另外也发现了，<code>Proxy</code>的每一个方法都需要返回值，返回值也都不是固定的某些值，当使用了<code>Reflect</code>对应得方法之后，完全不就不用再考虑<code>Proxy</code>这些方法需要返回哪些值，<strong>只要返回的是Reflect对应的方法，就永远不会出错。</strong></p>`,9),o=[e];function c(l,u){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","Proxykuaisushibie.html.vue"]]),k=JSON.parse('{"path":"/blogs/JavaScript/Proxykuaisushibie.html","title":"Proxy快速识别","lang":"en-US","frontmatter":{"title":"Proxy快速识别","date":"2023-08-15T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1717677053000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":1}]},"filePathRelative":"blogs/JavaScript/Proxy快速识别.md"}');export{i as comp,k as data};
