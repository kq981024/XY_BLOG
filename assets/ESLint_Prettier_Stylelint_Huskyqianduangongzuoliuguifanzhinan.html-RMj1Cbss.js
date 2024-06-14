import{_ as n,o as s,c as a,a as t}from"./app-BGYiCm6m.js";const e={},p=t(`<hr><h3 id="前置工作" tabindex="-1"><a class="header-anchor" href="#前置工作"><span>前置工作</span></a></h3><h5 id="本配置方案适用于vue3-vite-ts场景下搭建工作流" tabindex="-1"><a class="header-anchor" href="#本配置方案适用于vue3-vite-ts场景下搭建工作流"><span>本配置方案适用于Vue3+Vite+Ts场景下搭建工作流</span></a></h5><hr><h4 id="涉及到的npm模块" tabindex="-1"><a class="header-anchor" href="#涉及到的npm模块"><span>涉及到的npm模块</span></a></h4><h5 id="_1、eslint-——-用来检查代码规范性的标准" tabindex="-1"><a class="header-anchor" href="#_1、eslint-——-用来检查代码规范性的标准"><span>1、eslint —— 用来检查代码规范性的标准</span></a></h5><h5 id="_2、prettier-——-用来格式化代码的标准" tabindex="-1"><a class="header-anchor" href="#_2、prettier-——-用来格式化代码的标准"><span>2、prettier —— 用来格式化代码的标准</span></a></h5><h5 id="_3、stylelint-——-用来检查样式相关代码的标准" tabindex="-1"><a class="header-anchor" href="#_3、stylelint-——-用来检查样式相关代码的标准"><span>3、stylelint —— 用来检查样式相关代码的标准</span></a></h5><h5 id="_4、husky-——-git的钩子-在git的hook中执行一些命令" tabindex="-1"><a class="header-anchor" href="#_4、husky-——-git的钩子-在git的hook中执行一些命令"><span>4、husky —— git的钩子，在git的hook中执行一些命令</span></a></h5><h5 id="_5、lint-staged——-对git暂存的文件进行lint检查" tabindex="-1"><a class="header-anchor" href="#_5、lint-staged——-对git暂存的文件进行lint检查"><span>5、lint-staged—— 对git暂存的文件进行lint检查</span></a></h5><hr><h4 id="编译器默认为vscode安装所需插件" tabindex="-1"><a class="header-anchor" href="#编译器默认为vscode安装所需插件"><span>编译器默认为Vscode安装所需插件</span></a></h4><ul><li><h5 id="eslint-——-配合编译器检查代码是否规范" tabindex="-1"><a class="header-anchor" href="#eslint-——-配合编译器检查代码是否规范"><span>Eslint —— 配合编译器检查代码是否规范</span></a></h5></li><li><h5 id="stylelint-——-配合编译器格式化css" tabindex="-1"><a class="header-anchor" href="#stylelint-——-配合编译器格式化css"><span>StyleLint —— 配合编译器格式化CSS</span></a></h5></li><li><h5 id="prettier-code-formatter-——-配合编辑器格式化代码" tabindex="-1"><a class="header-anchor" href="#prettier-code-formatter-——-配合编辑器格式化代码"><span>Prettier - Code formatter —— 配合编辑器格式化代码</span></a></h5></li></ul><hr><h3 id="eslint配置" tabindex="-1"><a class="header-anchor" href="#eslint配置"><span>ESLint配置</span></a></h3><h5 id="安装eslint相关依赖" tabindex="-1"><a class="header-anchor" href="#安装eslint相关依赖"><span>安装eslint相关依赖</span></a></h5><pre><code>pnpm i eslint eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D    
</code></pre><h5 id="初始化eslint-根目录下生成-eslintrc-json文件" tabindex="-1"><a class="header-anchor" href="#初始化eslint-根目录下生成-eslintrc-json文件"><span>初始化eslint,根目录下生成.eslintrc.json文件</span></a></h5><pre><code>npx eslint --init    
</code></pre><pre><code class="language-json"><span class="token comment">// package.json运行脚本添加如下</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .vue,.js,.jsx,.ts,.tsx ./ --max-warnings 0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .vue,.js,jsx,.ts,.tsx ./ --max-warnings 0 --fix&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><pre><code class="language-json"><span class="token comment">// .eslintrc.json</span>
    <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><pre><code> pnpm run lint   // 验证eslint是否配置成功
</code></pre><hr><h3 id="prettier配置" tabindex="-1"><a class="header-anchor" href="#prettier配置"><span>Prettier配置</span></a></h3><h5 id="安装prettier" tabindex="-1"><a class="header-anchor" href="#安装prettier"><span>安装prettier</span></a></h5><pre><code>pnpm i prettier -D   
</code></pre><h5 id="根目录下新建-prettierrc-js文件-配置如下" tabindex="-1"><a class="header-anchor" href="#根目录下新建-prettierrc-js文件-配置如下"><span>根目录下新建.prettierrc.js文件 配置如下</span></a></h5><pre><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一行最多 120 字符..</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 2 个空格缩进</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 不使用缩进符，而使用空格</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾需要有分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象的 key 仅在必要时用引号</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 不使用单引号，而使用双引号</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 末尾需要有逗号</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 大括号内的首尾需要空格</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 标签的反尖括号需要换行</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头函数，只有一个参数的时候，也需要括号</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 每个文件格式化的范围是文件的全部内容</span>
  <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要写文件开头的 @prettier</span>
  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要自动在文件开头插入 @prettier</span>
  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用默认的折行标准</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 根据显示样式决定 html 要不要折行</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// vue 文件中的 script 和 style 内不用缩进</span>
  <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行符使用 lf</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h5 id="prettier-来接管-eslint-覆盖eslint-本身规则依赖安装" tabindex="-1"><a class="header-anchor" href="#prettier-来接管-eslint-覆盖eslint-本身规则依赖安装"><span>Prettier 来接管 eslint，覆盖eslint 本身规则依赖安装</span></a></h5><pre><code>pnpm i eslint-config-prettier eslint-plugin-prettier -D
</code></pre><h5 id="更改eslintrc-json-配置" tabindex="-1"><a class="header-anchor" href="#更改eslintrc-json-配置"><span>更改eslintrc.json 配置</span></a></h5><pre><code class="language-json"><span class="token punctuation">{</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 1. 接入 prettier 的规则</span>
        <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:prettier/recommended&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 3. 开启 prettier 自动修复的功能</span>
        <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;indent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token number">4</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;linebreak-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;unix&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;always&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h5 id="校验检查eslint-规则-prettier-的自动修复配置" tabindex="-1"><a class="header-anchor" href="#校验检查eslint-规则-prettier-的自动修复配置"><span>校验检查ESLint 规则 Prettier 的自动修复配置</span></a></h5><pre><code>pnpm run lint  
</code></pre><h4 id="vite中集成eslint" tabindex="-1"><a class="header-anchor" href="#vite中集成eslint"><span>Vite中集成ESlint</span></a></h4><h5 id="安装vite-plugin-eslint-d插件" tabindex="-1"><a class="header-anchor" href="#安装vite-plugin-eslint-d插件"><span>安装vite-plugin-eslint -D插件</span></a></h5><pre><code>pnpm i vite-plugin-eslint -D
</code></pre><h5 id="vite-config-ts-配置" tabindex="-1"><a class="header-anchor" href="#vite-config-ts-配置"><span>vite.config.ts 配置</span></a></h5><pre><code class="language-ts"><span class="token keyword">import</span> viteEslint <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 省略其它插件</span>
    <span class="token function">viteEslint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><hr><h3 id="stylelint配置" tabindex="-1"><a class="header-anchor" href="#stylelint配置"><span>Stylelint配置</span></a></h3><h5 id="安装stylelint相关插件" tabindex="-1"><a class="header-anchor" href="#安装stylelint相关插件"><span>安装Stylelint相关插件</span></a></h5><pre><code>pnpm i stylelint stylelint-prettier stylelint-config-standard postcss-scss postcss-html stylelint-config-recommended-vue stylelint-config-recess-order -D
</code></pre><h5 id="文件根目录新建文件-stylelintrc配置如下" tabindex="-1"><a class="header-anchor" href="#文件根目录新建文件-stylelintrc配置如下"><span>文件根目录新建文件.stylelintrc配置如下：</span></a></h5><pre><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册 stylelint 的 prettier 插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-prettier&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 继承一系列规则集合</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// standard 规则集合</span>
        <span class="token string">&#39;stylelint-config-standard&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// standard 规则集合的 scss 版本</span>
        <span class="token string">&#39;stylelint-config-standard-scss&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 样式属性顺序规则</span>
        <span class="token string">&#39;stylelint-config-recess-order&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 接入 Prettier 规则</span>
        <span class="token string">&#39;stylelint-config-prettier&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;stylelint-prettier/recommended&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置 rules</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 开启 Prettier 自动格式化功能</span>
        <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h5 id="package-json新增脚本命令" tabindex="-1"><a class="header-anchor" href="#package-json新增脚本命令"><span>package.json新增脚本命令：</span></a></h5><pre><code class="language-json"><span class="token comment">// package.json中</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// stylelint 命令</span>
    <span class="token property">&quot;stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.{html,vue,sass,less}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stylelint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --fix src/**/*.{html,vue,vss,sass,less}&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h5 id="验证样式格式化是否成功" tabindex="-1"><a class="header-anchor" href="#验证样式格式化是否成功"><span>验证样式格式化是否成功</span></a></h5><pre><code>pnpm run stylelint      
</code></pre><h4 id="vite-集成-stylelint" tabindex="-1"><a class="header-anchor" href="#vite-集成-stylelint"><span>vite 集成 Stylelint</span></a></h4><h5 id="安装vite-plugin-stylelint插件" tabindex="-1"><a class="header-anchor" href="#安装vite-plugin-stylelint插件"><span>安装vite-plugin-stylelint插件</span></a></h5><pre><code>pnpm i vite-plugin-stylelint -D
</code></pre><h5 id="vite-config-ts配置" tabindex="-1"><a class="header-anchor" href="#vite-config-ts配置"><span>vite.config.ts配置</span></a></h5><pre><code class="language-ts"><span class="token keyword">import</span> viteStylelint <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-stylelint&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteStylelint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><hr><h3 id="husky配置" tabindex="-1"><a class="header-anchor" href="#husky配置"><span>Husky配置</span></a></h3><h5 id="安装husky依赖" tabindex="-1"><a class="header-anchor" href="#安装husky依赖"><span>安装husky依赖</span></a></h5><pre><code>pnpm i husky -D
</code></pre><h5 id="package-json新增脚本命令-1" tabindex="-1"><a class="header-anchor" href="#package-json新增脚本命令-1"><span>package.json新增脚本命令：</span></a></h5><pre><code class="language-json"> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><h5 id="添加husky钩子之前你的项目必须存在一个git-初始化husky-生成-husky文件" tabindex="-1"><a class="header-anchor" href="#添加husky钩子之前你的项目必须存在一个git-初始化husky-生成-husky文件"><span>添加husky钩子之前你的项目必须存在一个git，初始化husky,生成.husky文件</span></a></h5><pre><code>npx husky install  
</code></pre><h5 id="添加husky钩子-执行完成后-husky文件夹下会生成pre-commit文件" tabindex="-1"><a class="header-anchor" href="#添加husky钩子-执行完成后-husky文件夹下会生成pre-commit文件"><span>添加husky钩子，执行完成后.husky文件夹下会生成pre-commit文件</span></a></h5><pre><code>npx husky add .husky/pre-commit &quot;npm run lint&quot;
</code></pre><h5 id="pre-commit文件内容如下" tabindex="-1"><a class="header-anchor" href="#pre-commit文件内容如下"><span>pre-commit文件内容如下：</span></a></h5><pre><code class="language-shell"><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>
<span class="token function">npm</span> run lint    // 文件提交前先运行该命令 通过后才可提交
</code></pre><hr><h3 id="lint-staged配置" tabindex="-1"><a class="header-anchor" href="#lint-staged配置"><span>lint-staged配置</span></a></h3><h5 id="更改package-json配置" tabindex="-1"><a class="header-anchor" href="#更改package-json配置"><span>更改package.json配置</span></a></h5><pre><code class="language-json"> <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{js,jsx,vue,ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;npm run lint:fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;git add .&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.{html,vue,vss,sass,less}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;npm run stylelint:fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;git add .&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><hr><h3 id="commit提交信息规范配置" tabindex="-1"><a class="header-anchor" href="#commit提交信息规范配置"><span>commit提交信息规范配置</span></a></h3><h5 id="安装提交规范相关依赖" tabindex="-1"><a class="header-anchor" href="#安装提交规范相关依赖"><span>安装提交规范相关依赖</span></a></h5><pre><code>pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D
</code></pre><h5 id="根目录新建-commitlintrc-js" tabindex="-1"><a class="header-anchor" href="#根目录新建-commitlintrc-js"><span>根目录新建.commitlintrc.js</span></a></h5><pre><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h5 id="commitlint-config-conventional-规定的-commit-信息一般由两个部分-type-和-subject-组成-结构为-type-subject-如新增功能feat-新增功能描述" tabindex="-1"><a class="header-anchor" href="#commitlint-config-conventional-规定的-commit-信息一般由两个部分-type-和-subject-组成-结构为-type-subject-如新增功能feat-新增功能描述"><span><code>@commitlint/config-conventional</code> 规定的 commit 信息一般由两个部分: type 和 subject 组成，结构为<code>&lt;type&gt;: &lt;subject&gt;</code>,如新增功能<code>feat: &#39;新增功能描述&#39;</code></span></a></h5><table><thead><tr><th>type</th><th>subject</th></tr></thead><tbody><tr><td>feat</td><td>添加新功能（常用）</td></tr><tr><td>fix</td><td>修复 bug（常用）</td></tr><tr><td>style</td><td>代码格式修改（常用）</td></tr><tr><td>test</td><td>测试用例新增、修改</td></tr><tr><td>build</td><td>影响项目构建或依赖项修改</td></tr><tr><td>chore</td><td>其他修改</td></tr><tr><td>ci</td><td>持续集成相关文件修改</td></tr><tr><td>docs</td><td>文档修改</td></tr><tr><td>refactor</td><td>代码重构</td></tr><tr><td>revert</td><td>恢复上一次提交</td></tr></tbody></table><h5 id="将commitlint集成到husky中" tabindex="-1"><a class="header-anchor" href="#将commitlint集成到husky中"><span>将<code>commitlint</code>集成到<code>husky</code>中</span></a></h5><pre><code>npx husky add .husky/commit-msg &quot;npx --no-install commitlint -e $HUSKY_GIT_PARAMS&quot; 
// .husky文件夹下生成commit-msg文件
</code></pre><pre><code>前端规范工作流只需要配置一次就能复用到其它项目中了,没必要太深入的研究,需要的时候看一下就行。如有需要引用，请标明出处喔。
</code></pre>`,81),o=[p];function r(c,l){return s(),a("div",null,o)}const u=n(e,[["render",r],["__file","ESLint_Prettier_Stylelint_Huskyqianduangongzuoliuguifanzhinan.html.vue"]]),k=JSON.parse('{"path":"/blogs/WorkFlow/ESLint_Prettier_Stylelint_Huskyqianduangongzuoliuguifanzhinan.html","title":"ESlint+Prettier+StyleLint+Husky前端工作流规范配置","lang":"en-US","frontmatter":{"title":"ESlint+Prettier+StyleLint+Husky前端工作流规范配置","date":"2022-12-30T00:00:00.000Z","tags":["工作流规范"],"categories":["WorkFlow"]},"headers":[{"level":3,"title":"前置工作","slug":"前置工作","link":"#前置工作","children":[]},{"level":3,"title":"ESLint配置","slug":"eslint配置","link":"#eslint配置","children":[]},{"level":3,"title":"Prettier配置","slug":"prettier配置","link":"#prettier配置","children":[]},{"level":3,"title":"Stylelint配置","slug":"stylelint配置","link":"#stylelint配置","children":[]},{"level":3,"title":"Husky配置","slug":"husky配置","link":"#husky配置","children":[]},{"level":3,"title":"lint-staged配置","slug":"lint-staged配置","link":"#lint-staged配置","children":[]},{"level":3,"title":"commit提交信息规范配置","slug":"commit提交信息规范配置","link":"#commit提交信息规范配置","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1717677053000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":1}]},"filePathRelative":"blogs/WorkFlow/ESLint+Prettier+Stylelint+Husky前端工作流规范指南.md"}');export{u as comp,k as data};
