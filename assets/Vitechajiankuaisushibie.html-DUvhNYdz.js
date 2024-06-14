import{_ as n,o as s,c as a,a as p}from"./app-BGYiCm6m.js";const t={},e=p(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><h5 id="从笔者角度理解vite-说白了vite就是为开发者量身定做的一套先进的开发工具-按需编译、热模块替换等特性使我们开发时免除了重新打包的等待时间-开发体验丝滑-默认还整合了vue3-是居家旅行、杀人灭口之必备良药。以下是笔者日常开发用到的vite插件-让我们起飞芜湖芜湖" tabindex="-1"><a class="header-anchor" href="#从笔者角度理解vite-说白了vite就是为开发者量身定做的一套先进的开发工具-按需编译、热模块替换等特性使我们开发时免除了重新打包的等待时间-开发体验丝滑-默认还整合了vue3-是居家旅行、杀人灭口之必备良药。以下是笔者日常开发用到的vite插件-让我们起飞芜湖芜湖"><span>从笔者角度理解Vite，说白了<code>vite</code>就是为开发者量身定做的一套先进的开发工具，按需编译、热模块替换等特性使我们开发时免除了重新打包的等待时间，开发体验丝滑，默认还整合了<code>vue3</code>，是居家旅行、杀人灭口之必备良药。以下是笔者日常开发用到的vite插件，让我们起飞芜湖芜湖~~~~</span></a></h5><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41c4746e651f4c0e969afa33208b5449~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h2 id="vite官方自带" tabindex="-1"><a class="header-anchor" href="#vite官方自带"><span>vite官方自带</span></a></h2><h5 id="作用-优化打包构建-不用自己手动删除console-log得劲" tabindex="-1"><a class="header-anchor" href="#作用-优化打包构建-不用自己手动删除console-log得劲"><span>作用：优化打包构建，不用自己手动删除console.log得劲~~</span></a></h5><pre><code class="language-javascript"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//打包后移除console和注释</span>
            <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vitejs-plugin-vue" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-vue"><span>@vitejs/plugin-vue</span></a></h2><h5 id="作用-实现vite与vue的连接-使用vite构建的项目都会默认安装" tabindex="-1"><a class="header-anchor" href="#作用-实现vite与vue的连接-使用vite构建的项目都会默认安装"><span>作用：实现Vite与Vue的连接，使用Vite构建的项目都会默认安装</span></a></h5><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><h2 id="vitejs-plugin-vue-jsx" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-vue-jsx"><span>@vitejs-plugin-vue-jsx</span></a></h2><h5 id="作用-实现编写jsx-就是全部全部写到js里面-css关我js什么事情" tabindex="-1"><a class="header-anchor" href="#作用-实现编写jsx-就是全部全部写到js里面-css关我js什么事情"><span>作用：实现编写jsx，就是全部全部写到js里面，css关我js什么事情</span></a></h5><pre><code>npm i @vitejs/plugin-vue-jsx -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vueJsx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><h2 id="unplugin-auto-import-unplugin-vue-components" tabindex="-1"><a class="header-anchor" href="#unplugin-auto-import-unplugin-vue-components"><span>unplugin-auto-import+unplugin-vue-components</span></a></h2><h5 id="作用-插件实现vue函数和组件库的自动按需导入" tabindex="-1"><a class="header-anchor" href="#作用-插件实现vue函数和组件库的自动按需导入"><span>作用：插件实现vue函数和组件库的自动按需导入</span></a></h5><pre><code>pnpm i unplugin-auto-import unplugin-vue-components  -D
</code></pre><pre><code class="language-typescript"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> ViteComponents <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VantResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token keyword">import</span> ViteIcons<span class="token punctuation">,</span> <span class="token punctuation">{</span> ViteIconsResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-icons&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .ts, .tsx, .js, .jsx</span>
        <span class="token operator">/</span>\\<span class="token punctuation">.</span>vue$<span class="token operator">/</span><span class="token punctuation">,</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// .vue</span>
        <span class="token operator">/</span>\\<span class="token punctuation">.</span>md$<span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// .md</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ViteComponents</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      dts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      customComponentResolvers<span class="token operator">:</span> <span class="token function">ViteIconsResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        <span class="token comment">// 自动引入iconify库图表</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token function">ViteIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><pre><code class="language-json"><span class="token comment">// tsconfig.json   需要校验的文件后缀集合</span>
<span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;components.d.ts&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;auto-imports.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><h2 id="vite-plugin-style-import" tabindex="-1"><a class="header-anchor" href="#vite-plugin-style-import"><span>vite-plugin-style-import</span></a></h2><h5 id="作用-实现组件库样式的自动引入" tabindex="-1"><a class="header-anchor" href="#作用-实现组件库样式的自动引入"><span>作用：实现组件库样式的自动引入</span></a></h5><pre><code>npm i  vite-plugin-style-import -D
</code></pre><pre><code class="language-typescript"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createStyleImportPlugin<span class="token punctuation">,</span>
  ElementPlusResolve<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plgins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolves<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      libs<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          libraryName<span class="token operator">:</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">,</span>
          esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> name<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">element-plus/es/components/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/index</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><h2 id="vite-plugin-checker" tabindex="-1"><a class="header-anchor" href="#vite-plugin-checker"><span>vite-plugin-checker</span></a></h2><h5 id="作用-实现对代码类型的检查-项目代码还是要规范滴" tabindex="-1"><a class="header-anchor" href="#作用-实现对代码类型的检查-项目代码还是要规范滴"><span>作用：实现对代码类型的检查 项目代码还是要规范滴</span></a></h5><pre><code>npm install vite-plugin-checker -D
</code></pre><pre><code class="language-typescript"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">checker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    typescript<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-svg-icons" tabindex="-1"><a class="header-anchor" href="#vite-plugin-svg-icons"><span>vite-plugin-svg-icons</span></a></h2><h5 id="作用-优化svg图片引入统一管理svg图片-嘎嘎好使" tabindex="-1"><a class="header-anchor" href="#作用-优化svg图片引入统一管理svg图片-嘎嘎好使"><span>作用：优化svg图片引入统一管理Svg图片，嘎嘎好使</span></a></h5><pre><code>npm i vite-plugin-svg-icons -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-svg-icons&#39;</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定需要缓存的图标文件夹</span>
      iconDirs<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;src/assets/icons&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定symbolId格式</span>
      symbolId<span class="token operator">:</span> <span class="token string">&quot;icon-[dir]-[name]&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><pre><code class="language-ts"><span class="token comment">// main.ts引入后 全局都可使用</span>
<span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&quot;@/components/SvgIcon.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;virtual:svg-icons-register&quot;</span><span class="token punctuation">;</span>   
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;svg-icon&quot;</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>              
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue">// svgIcon组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>symbolId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;SvgIcon&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> symbolId <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> symbolId <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="vite-plugin-imagemin" tabindex="-1"><a class="header-anchor" href="#vite-plugin-imagemin"><span>vite-plugin-imagemin</span></a></h2><h5 id="作用-实现打包构建图片压缩-肯定不会把小龙女压缩成小笼包的" tabindex="-1"><a class="header-anchor" href="#作用-实现打包构建图片压缩-肯定不会把小龙女压缩成小笼包的"><span>作用：实现打包构建图片压缩，肯定不会把小龙女压缩成小笼包的</span></a></h5><pre><code>npm i vite-plugin-imagemin -D
</code></pre><pre><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     gifsicle<span class="token operator">:</span> <span class="token punctuation">{</span>
        optimizationLevel<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        interlaced<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      optipng<span class="token operator">:</span> <span class="token punctuation">{</span>
        optimizationLevel<span class="token operator">:</span> <span class="token number">7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      mozjpeg<span class="token operator">:</span> <span class="token punctuation">{</span>
        quality<span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      pngquant<span class="token operator">:</span> <span class="token punctuation">{</span>
        quality<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        speed<span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      svgo<span class="token operator">:</span> <span class="token punctuation">{</span>
        plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;removeViewBox&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;removeEmptyAttrs&#39;</span><span class="token punctuation">,</span>
            active<span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="rollup-plugin-visualizer" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-visualizer"><span>rollup-plugin-visualizer</span></a></h2><h5 id="作用-实现可视化打包构建分析统计-看看哪个包比较膨胀-需要减肥一下" tabindex="-1"><a class="header-anchor" href="#作用-实现可视化打包构建分析统计-看看哪个包比较膨胀-需要减肥一下"><span>作用：实现可视化打包构建分析统计，看看哪个包比较膨胀！需要减肥一下</span></a></h5><pre><code>npm install rollup-plugin-visualizer -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-visualizer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 将 visualizer 插件放到最后</span>
    <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-cdn-import" tabindex="-1"><a class="header-anchor" href="#vite-plugin-cdn-import"><span>vite-plugin-cdn-import</span></a></h2><h5 id="作用-实现cdn加速更快的加载某些包-大概就是就近取包这个意思" tabindex="-1"><a class="header-anchor" href="#作用-实现cdn加速更快的加载某些包-大概就是就近取包这个意思"><span>作用：实现CDN加速更快的加载某些包，大概就是就近取包这个意思</span></a></h5><pre><code>npm i vite-plugin-cdn-import -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> viteCDNPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plgin-cdn-import&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteCDNPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 需要 CDN 加速的模块</span>
      modules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">,</span>
          <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span>
          path<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-compression" tabindex="-1"><a class="header-anchor" href="#vite-plugin-compression"><span>vite-plugin-compression</span></a></h2><h5 id="作用-实现对代码的压缩-对粑粑山代码那是很大瘦身-代码体积不大不建议使用" tabindex="-1"><a class="header-anchor" href="#作用-实现对代码的压缩-对粑粑山代码那是很大瘦身-代码体积不大不建议使用"><span>作用：实现对代码的压缩，对粑粑山代码那是很大瘦身，代码体积不大不建议使用</span></a></h5><pre><code>npm i vite-plugin-compression
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-eslint" tabindex="-1"><a class="header-anchor" href="#vite-plugin-eslint"><span>vite-plugin-eslint</span></a></h2><h5 id="作用-实现eslint检查代码。如果代码要求规范-还是打开eslint吧-写习惯就好了" tabindex="-1"><a class="header-anchor" href="#作用-实现eslint检查代码。如果代码要求规范-还是打开eslint吧-写习惯就好了"><span>作用：实现eslint检查代码。如果代码要求规范，还是打开eslint吧 写习惯就好了</span></a></h5><pre><code>npm i vite-plugin-eslint -D
</code></pre><pre><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="vite-plugin-pwa" tabindex="-1"><a class="header-anchor" href="#vite-plugin-pwa"><span>vite-plugin-pwa</span></a></h2><h5 id="作用-实现pwa功能-就是你的网页可以离线使用。" tabindex="-1"><a class="header-anchor" href="#作用-实现pwa功能-就是你的网页可以离线使用。"><span>作用：实现PWA功能，就是你的网页可以离线使用。</span></a></h5><pre><code>npm i vite-plugin-pwa -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VitePWA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-pwa&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token function">VitePWA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="vite-svg-loader" tabindex="-1"><a class="header-anchor" href="#vite-svg-loader"><span>vite-svg-loader</span></a></h2><h5 id="作用-实现像组件一样调用svg文件-更方便的使用svg文件" tabindex="-1"><a class="header-anchor" href="#作用-实现像组件一样调用svg文件-更方便的使用svg文件"><span>作用：实现像组件一样调用svg文件，更方便的使用svg文件</span></a></h5><pre><code>npm i vite-svg-loader -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> svgLoader <span class="token keyword">from</span> <span class="token string">&#39;vite-svg-loader&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">svgLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-icons" tabindex="-1"><a class="header-anchor" href="#vite-plugin-icons"><span>vite-plugin-icons</span></a></h2><h5 id="作用-基于iconify图标的vite插件支持-让你方便的使用iconify图标" tabindex="-1"><a class="header-anchor" href="#作用-基于iconify图标的vite插件支持-让你方便的使用iconify图标"><span>作用：基于<code>Iconify</code>图标的vite插件支持,让你方便的使用iconify图标</span></a></h5><pre><code>npm i vite-plugin-icons -D
</code></pre><pre><code class="language-ts"><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> Icons <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-icons&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token function">Icons</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><pre><code class="language-vue">// 使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> IconAccessibility <span class="token keyword">from</span> <span class="token string">&#39;virtual:vite-icons/carbon/accessibility&#39;</span>
<span class="token keyword">import</span> IconAccountBox <span class="token keyword">from</span> <span class="token string">&#39;virtual:vite-icons/mdi/account-box&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-accessibility</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-account-box</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="vite-plugin-vue-setup-extend" tabindex="-1"><a class="header-anchor" href="#vite-plugin-vue-setup-extend"><span>vite-plugin-vue-setup-extend</span></a></h2><h5 id="作用-拓展setup语法糖-实现在script标签中写name-在持久化路由keepalive有用" tabindex="-1"><a class="header-anchor" href="#作用-拓展setup语法糖-实现在script标签中写name-在持久化路由keepalive有用"><span>作用：拓展setup语法糖，实现在script标签中写name(在持久化路由keepAlive有用)</span></a></h5><pre><code>npm i vite-plugin-vue-setup-extend@0.4.0 -D
</code></pre><pre><code class="language-ts"><span class="token comment">// 安装的插件</span>
<span class="token keyword">import</span> VueSetupExtend <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-vue-setup-extend&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token function">VueSetupExtend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="vite-plugin-mock" tabindex="-1"><a class="header-anchor" href="#vite-plugin-mock"><span>vite-plugin-mock</span></a></h2><h5 id="作用-开启mock服务-自己造数据模拟接口请求-跟后端同学确定好接口变量就可以自己实现模拟接口" tabindex="-1"><a class="header-anchor" href="#作用-开启mock服务-自己造数据模拟接口请求-跟后端同学确定好接口变量就可以自己实现模拟接口"><span>作用：开启mock服务，自己造数据模拟接口请求，跟后端同学确定好接口变量就可以自己实现模拟接口</span></a></h5><pre><code>npm i vite-plugin-mock -d
</code></pre><pre><code class="language-ts"><span class="token comment">// 安装的插件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-mock&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token function">viteMockServe</span><span class="token punctuation">(</span>
  	 mockPath<span class="token operator">:</span> <span class="token string">&#39;mock&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 设置模拟.ts 文件的存储文件夹</span>
     enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// 是否开启mock</span>
  <span class="token punctuation">)</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h4 id="mockmethod-请求配置和响应配置" tabindex="-1"><a class="header-anchor" href="#mockmethod-请求配置和响应配置"><span>MockMethod：请求配置和响应配置</span></a></h4><pre><code class="language-ts"><span class="token punctuation">{</span>
  <span class="token comment">// 请求地址</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 请求方式</span>
  method<span class="token operator">?</span><span class="token operator">:</span> MethodType<span class="token punctuation">;</span>
  <span class="token comment">// 设置超时时间</span>
  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// 状态吗</span>
  statusCode<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// 响应数据（JSON）</span>
  response<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>opt<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> body<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> query<span class="token operator">:</span>  Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> headers<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// 响应（非JSON）</span>
  rawResponse<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> IncomingMessage<span class="token punctuation">,</span> res<span class="token operator">:</span> ServerResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h3><blockquote><p>插件其实都是为了实现某个功能，有些功能类似的插件选择适合项目的就好，或者自己熟悉的。笔者目前用过的插件已总结完毕，未来也会不断更新。希望可以不断精进写出自己的插件。如需引用，还请备注出处，感谢观看。</p></blockquote>`,77),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","Vitechajiankuaisushibie.html.vue"]]),r=JSON.parse('{"path":"/blogs/Vue/Vitechajiankuaisushibie.html","title":"Vite插件快速识别","lang":"en-US","frontmatter":{"title":"Vite插件快速识别","date":"2022-12-30T00:00:00.000Z","tags":["前端工程化"],"categories":["Vue"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"vite官方自带","slug":"vite官方自带","link":"#vite官方自带","children":[]},{"level":2,"title":"@vitejs/plugin-vue","slug":"vitejs-plugin-vue","link":"#vitejs-plugin-vue","children":[]},{"level":2,"title":"@vitejs-plugin-vue-jsx","slug":"vitejs-plugin-vue-jsx","link":"#vitejs-plugin-vue-jsx","children":[]},{"level":2,"title":"unplugin-auto-import+unplugin-vue-components","slug":"unplugin-auto-import-unplugin-vue-components","link":"#unplugin-auto-import-unplugin-vue-components","children":[]},{"level":2,"title":"vite-plugin-style-import","slug":"vite-plugin-style-import","link":"#vite-plugin-style-import","children":[]},{"level":2,"title":"vite-plugin-checker","slug":"vite-plugin-checker","link":"#vite-plugin-checker","children":[]},{"level":2,"title":"vite-plugin-svg-icons","slug":"vite-plugin-svg-icons","link":"#vite-plugin-svg-icons","children":[]},{"level":2,"title":"vite-plugin-imagemin","slug":"vite-plugin-imagemin","link":"#vite-plugin-imagemin","children":[]},{"level":2,"title":"rollup-plugin-visualizer","slug":"rollup-plugin-visualizer","link":"#rollup-plugin-visualizer","children":[]},{"level":2,"title":"vite-plugin-cdn-import","slug":"vite-plugin-cdn-import","link":"#vite-plugin-cdn-import","children":[]},{"level":2,"title":"vite-plugin-compression","slug":"vite-plugin-compression","link":"#vite-plugin-compression","children":[]},{"level":2,"title":"vite-plugin-eslint","slug":"vite-plugin-eslint","link":"#vite-plugin-eslint","children":[]},{"level":2,"title":"vite-plugin-pwa","slug":"vite-plugin-pwa","link":"#vite-plugin-pwa","children":[]},{"level":2,"title":"vite-svg-loader","slug":"vite-svg-loader","link":"#vite-svg-loader","children":[]},{"level":2,"title":"vite-plugin-icons","slug":"vite-plugin-icons","link":"#vite-plugin-icons","children":[]},{"level":2,"title":"vite-plugin-vue-setup-extend","slug":"vite-plugin-vue-setup-extend","link":"#vite-plugin-vue-setup-extend","children":[]},{"level":2,"title":"vite-plugin-mock","slug":"vite-plugin-mock","link":"#vite-plugin-mock","children":[{"level":3,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}]}],"git":{"createdTime":1717677053000,"updatedTime":1718279013000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":2}]},"filePathRelative":"blogs/Vue/Vite插件快速识别.md"}');export{k as comp,r as data};
