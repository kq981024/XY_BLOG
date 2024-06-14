import{_ as n,o as s,c as a,a as t}from"./app-BGYiCm6m.js";const p={},o=t(`<hr><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3><h6 id="由于-vue-框架是-spa-单页面应用-不会有不同的-html-提供给我们跳转-所以要使用路由进行页面的跳转-vue-路由允许我们通过不同的-url-访问不同的内容。通过-vue-可以实现多视图的单页-web-应用-由于-vue3-是未来主流-本文以-vue3-的路由配置为主" tabindex="-1"><a class="header-anchor" href="#由于-vue-框架是-spa-单页面应用-不会有不同的-html-提供给我们跳转-所以要使用路由进行页面的跳转-vue-路由允许我们通过不同的-url-访问不同的内容。通过-vue-可以实现多视图的单页-web-应用-由于-vue3-是未来主流-本文以-vue3-的路由配置为主"><span>由于 Vue 框架是 SPA(单页面应用)不会有不同的 html 提供给我们跳转，所以要使用路由进行页面的跳转，Vue 路由允许我们通过不同的 URL 访问不同的内容。通过 Vue 可以实现多视图的单页 Web 应用，由于 Vue3 是未来主流，本文以 Vue3 的路由配置为主</span></a></h6><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><h6 id="vue2-安装-vue-router3-0-的版本" tabindex="-1"><a class="header-anchor" href="#vue2-安装-vue-router3-0-的版本"><span>Vue2 安装 Vue-router3.0 的版本</span></a></h6><pre><code>npm install vue-router@3
</code></pre><h6 id="vue3-安装-vue-router4-0-的版本" tabindex="-1"><a class="header-anchor" href="#vue3-安装-vue-router4-0-的版本"><span>Vue3 安装 Vue-router4.0 的版本</span></a></h6><pre><code>npm install vue-router@4
</code></pre><h3 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式"><span>路由模式</span></a></h3><h4 id="_1、哈希模式-url-携带" tabindex="-1"><a class="header-anchor" href="#_1、哈希模式-url-携带"><span>1、哈希模式（url 携带#）</span></a></h4><h6 id="本质是通过-location-hash-目标-url-来实现跳转" tabindex="-1"><a class="header-anchor" href="#本质是通过-location-hash-目标-url-来实现跳转"><span>本质是通过 location.hash = &#39;/目标 url&#39;来实现跳转</span></a></h6><pre><code class="language-typescript">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">&quot;路由相关信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h4 id="_2、history-模式-url-不携带" tabindex="-1"><a class="header-anchor" href="#_2、history-模式-url-不携带"><span>2、history 模式（url 不携带#）</span></a></h4><h6 id="本质通过-history-pushstate-传递参数-标题-url" tabindex="-1"><a class="header-anchor" href="#本质通过-history-pushstate-传递参数-标题-url"><span>本质通过 history.pushState(传递参数,标题,URL)</span></a></h6><pre><code class="language-typescript">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;popstate&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">&quot;路由相关信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h6 id="在-vue3-中的使用" tabindex="-1"><a class="header-anchor" href="#在-vue3-中的使用"><span>在 Vue3 中的使用</span></a></h6><pre><code class="language-typescript"><span class="token comment">//引入路由对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">,</span> createMemoryHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
 <span class="token comment">//路由数组的类型 RouteRecordRaw</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;别名1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;别名2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span><span class="token string">&#39;register&#39;</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/register&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;/register&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/register.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 routes<span class="token operator">:</span> routes<span class="token punctuation">,</span>
 <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
   el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
   top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
   behavior<span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//导出router</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><h3 id="路由的跳转方式" tabindex="-1"><a class="header-anchor" href="#路由的跳转方式"><span>路由的跳转方式</span></a></h3><h4 id="_1、命名路由-即通过-path-和-name-进行跳转" tabindex="-1"><a class="header-anchor" href="#_1、命名路由-即通过-path-和-name-进行跳转"><span>1、命名路由：即通过 path 和 name 进行跳转</span></a></h4><pre><code class="language-js"> <span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{name:name}&quot;</span><span class="token operator">&gt;</span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;path&quot;</span><span class="token operator">&gt;</span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><h4 id="_2、编程式导航-即通过-vue-router-提供的函数方法跳转" tabindex="-1"><a class="header-anchor" href="#_2、编程式导航-即通过-vue-router-提供的函数方法跳转"><span>2、编程式导航：即通过 Vue-router 提供的函数方法跳转</span></a></h4><pre><code class="language-jstypescript">import { useRouter } from &#39;vue-router&#39;
const router = useRouter(
const toPage = () =&gt; {
  // router.push  产生历史记录
  router.push({
    path: &#39;目标地址&#39;|| name: &#39;目标name&#39;
  })
  // router.replace 不会产生历史记录 直接替代当前页面
  router.replace({
    path: &#39;目标地址&#39;|| name: &#39;目标name&#39;
  })
  // 从历史记录从前进后退 数字可正可负
  router.go(数字)
  // 后退
  router.back()
}
</code></pre><h4 id="_3、a-标签跳转-跳转但是会刷新页面" tabindex="-1"><a class="header-anchor" href="#_3、a-标签跳转-跳转但是会刷新页面"><span>3、a 标签跳转：跳转但是会刷新页面</span></a></h4><pre><code class="language-js"><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/目标地址&quot;</span><span class="token operator">&gt;</span>提示文字<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><h3 id="路由的传参-path-搭配-query-name-搭配-params" tabindex="-1"><a class="header-anchor" href="#路由的传参-path-搭配-query-name-搭配-params"><span>路由的传参 path 搭配 query name 搭配 params</span></a></h3><h4 id="_1、query-传参" tabindex="-1"><a class="header-anchor" href="#_1、query-传参"><span>1、query 传参</span></a></h4><pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span>useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// 传递参数</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span>
<span class="token keyword">const</span> <span class="token function-variable function">toPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;目标url&#39;</span><span class="token punctuation">,</span>
    query<span class="token operator">:</span><span class="token string">&#39;参数对象&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接收参数</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token string">&#39;参数对象&#39;</span><span class="token punctuation">)</span>
</code></pre><h4 id="_2、params-传参-存在页面刷新参数丢失的问题" tabindex="-1"><a class="header-anchor" href="#_2、params-传参-存在页面刷新参数丢失的问题"><span>2、params 传参（存在页面刷新参数丢失的问题）</span></a></h4><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span>useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// 传递参数</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span>
<span class="token keyword">const</span> <span class="token function-variable function">toPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;目标name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token string">&#39;参数对象&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接收参数</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token string">&#39;参数对象&#39;</span><span class="token punctuation">)</span>
</code></pre><h3 id="命名视图-有点类似-vue-的具名插槽" tabindex="-1"><a class="header-anchor" href="#命名视图-有点类似-vue-的具名插槽"><span>命名视图（有点类似 Vue 的具名插槽）</span></a></h3><h6 id="控制同个页面下的不同组件位置-其实动态组件引入也一样" tabindex="-1"><a class="header-anchor" href="#控制同个页面下的不同组件位置-其实动态组件引入也一样"><span>控制同个页面下的不同组件位置（其实动态组件引入也一样）</span></a></h6><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>K<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Q<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre><code class="language-javascript"><span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/K&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;K&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token parameter"><span class="token constant">K</span></span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/K.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token parameter"><span class="token constant">Q</span></span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/Q.vue&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫"><span>路由守卫</span></a></h3><h4 id="_1、全局前置路由" tabindex="-1"><a class="header-anchor" href="#_1、全局前置路由"><span>1、全局前置路由</span></a></h4><pre><code class="language-ts">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// to: Route  目标路由；</span>
    <span class="token comment">// from: Route  当前路由；</span>
    <span class="token comment">// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。</span>
    <span class="token comment">// next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</span>
    <span class="token comment">// next(&#39;/&#39;) 或者 next({ path: &#39;/&#39; }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h4><pre><code class="language-typescript"><span class="token keyword">const</span> whileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 路由白名单</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果目标路由在白名单内 或者本地有存储token则放行路由</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>whileList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">||</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h4 id="_2、全局后置路由" tabindex="-1"><a class="header-anchor" href="#_2、全局后置路由"><span>2、全局后置路由</span></a></h4><pre><code class="language-typescript">router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一般用于网页加载条的渲染</span>
    NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h4 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1"><span>案例</span></a></h4><pre><code class="language-Vue">&lt;template&gt;
    &lt;div class=&quot;wraps&quot;&gt;
        &lt;div ref=&quot;bar&quot; class=&quot;bar&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&#39;ts&#39;&gt;
import { ref, onMounted } from &#39;vue&#39;
let speed = ref&lt;number&gt;(1)
let bar = ref&lt;HTMLElement&gt;()
let timer = ref&lt;number&gt;(0)
const startLoading = () =&gt; {
    let dom = bar.value as HTMLElement;
    speed.value = 1
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value &lt; 90) {
            speed.value += 1;
            dom.style.width = speed.value + &#39;%&#39;
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })
}
const endLoading = () =&gt; {
    let dom = bar.value as HTMLElement;
    setTimeout(() =&gt; {
        window.requestAnimationFrame(() =&gt; {
            speed.value = 100;
            dom.style.width = speed.value + &#39;%&#39;
        })
    }, 500)
}
defineExpose({
    startLoading,
    endLoading
})
&lt;/script&gt;

</code></pre><pre><code class="language-typescript"><span class="token keyword">import</span> loadingBar <span class="token keyword">from</span> <span class="token string">&quot;./components/loadingBar.vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 将组件转为虚拟dom</span>
<span class="token keyword">const</span> Vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>loadingBar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用render函数渲染到真正的dom</span>
<span class="token function">render</span><span class="token punctuation">(</span>Vnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件中使用defineExpose暴露方法 则用以下方式调用</span>
    Vnode<span class="token punctuation">.</span>component<span class="token operator">?.</span>exposed<span class="token operator">?.</span><span class="token function">startLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vnode<span class="token punctuation">.</span>component<span class="token operator">?.</span>exposed<span class="token operator">?.</span><span class="token function">endLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3 id="路由元信息" tabindex="-1"><a class="header-anchor" href="#路由元信息"><span>路由元信息</span></a></h3><pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span>RouteRecordRaw<span class="token punctuation">}</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
      <span class="token comment">// 自定义扩展</span>
    isAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    hidden<span class="token operator">:</span> <span class="token builtin">boolean</span>
    transition<span class="token operator">:</span><span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;别名1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;别名2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span><span class="token string">&#39;register&#39;</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span><span class="token punctuation">{</span>isAlive<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>hidden<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>transition<span class="token operator">:</span><span class="token string">&#39;animate_fadeIn&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><h3 id="路由过渡动画效果-搭配-animation-css-使用" tabindex="-1"><a class="header-anchor" href="#路由过渡动画效果-搭配-animation-css-使用"><span>路由过渡动画效果（搭配 animation.css 使用）</span></a></h3><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ route, Component }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
            <span class="token attr-name">:enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`animate_animated \${route.meta.transition}\`<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">:include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aliveViews<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Component<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token string">&quot;animate.css&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="路由滚动行为" tabindex="-1"><a class="header-anchor" href="#路由滚动行为"><span>路由滚动行为</span></a></h3><h6 id="创建路由时配置-scrollbehavior-方法" tabindex="-1"><a class="header-anchor" href="#创建路由时配置-scrollbehavior-方法"><span>创建路由时配置 scrollBehavior 方法</span></a></h6><pre><code class="language-typescript"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> allRoutes<span class="token punctuation">,</span>
    <span class="token function">scrollBehavior</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savePosition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// savePosition 自动记录当前页面滚动到的位置</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            el<span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            behavior<span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,50),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","VueRouterkuaisushibie.html.vue"]]),k=JSON.parse('{"path":"/blogs/Vue/VueRouterkuaisushibie.html","title":"VueRouter4.0实际应用","lang":"en-US","frontmatter":{"title":"VueRouter4.0实际应用","date":"2022-12-30T00:00:00.000Z","tags":["VueRouter"],"categories":["Vue"]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"路由模式","slug":"路由模式","link":"#路由模式","children":[]},{"level":3,"title":"路由的跳转方式","slug":"路由的跳转方式","link":"#路由的跳转方式","children":[]},{"level":3,"title":"路由的传参 path 搭配 query name 搭配 params","slug":"路由的传参-path-搭配-query-name-搭配-params","link":"#路由的传参-path-搭配-query-name-搭配-params","children":[]},{"level":3,"title":"命名视图（有点类似 Vue 的具名插槽）","slug":"命名视图-有点类似-vue-的具名插槽","link":"#命名视图-有点类似-vue-的具名插槽","children":[]},{"level":3,"title":"路由守卫","slug":"路由守卫","link":"#路由守卫","children":[]},{"level":3,"title":"路由元信息","slug":"路由元信息","link":"#路由元信息","children":[]},{"level":3,"title":"路由过渡动画效果（搭配 animation.css 使用）","slug":"路由过渡动画效果-搭配-animation-css-使用","link":"#路由过渡动画效果-搭配-animation-css-使用","children":[]},{"level":3,"title":"路由滚动行为","slug":"路由滚动行为","link":"#路由滚动行为","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1718364603000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":1}]},"filePathRelative":"blogs/Vue/VueRouter快速识别.md"}');export{i as comp,k as data};
