import{_ as n,o as a,c as s,a as t}from"./app-BGYiCm6m.js";const p={},o=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>​ CSS是个非常有趣的东西，CSS3的出现减少了JavaScript的代码量。个人觉得CSS3不难，但是很难用得好，用得顺手，这篇博客总结CSS的一些新特性（不是全部，是笔者在工作用到的或者觉得有用的）,希望对看到这篇博客的朋友有所帮助。</p><h2 id="伪类相关" tabindex="-1"><a class="header-anchor" href="#伪类相关"><span>伪类相关</span></a></h2><ul><li><h5 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器"><span>伪类选择器</span></a></h5></li></ul><pre><code class="language-css">ul&gt;<span class="token property">li</span><span class="token punctuation">:</span>first-child/<span class="token punctuation">:</span>last-child/ 选中第一个子元素/最后一个子元素/

ul&gt;<span class="token property">li</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>m|n|2n/even|2n+1/odd<span class="token punctuation">)</span> 选中第m个元素/全选/偶数位的元素/奇数位的元素

ul&gt;<span class="token property">li</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>m|n|2n/even|2n+1/odd<span class="token punctuation">)</span><span class="token punctuation">)</span> 选中除了第m个元素/全选/偶数位的元素/奇数位的元素

<span class="token property">a</span><span class="token punctuation">:</span>link/<span class="token punctuation">:</span>visited 没有访问过的链接/访问过的链接<span class="token punctuation">(</span>只能修改颜色<span class="token punctuation">)</span>

<span class="token property">a</span><span class="token punctuation">:</span>active/<span class="token punctuation">:</span>hover 鼠标点击/滑过后触发样式
</code></pre><ul><li><h5 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器"><span>伪元素选择器</span></a></h5></li></ul><pre><code class="language-css"><span class="token property">p</span><span class="token punctuation">:</span><span class="token punctuation">:</span>first-letter 选中第一个字母添加样式

<span class="token property">p</span><span class="token punctuation">:</span>first-line 选中第一行添加样式

<span class="token property">p</span><span class="token punctuation">:</span><span class="token punctuation">:</span>selection 鼠标拖动选择 添加样式

<span class="token property">div</span><span class="token punctuation">:</span><span class="token punctuation">:</span>before/<span class="token punctuation">:</span><span class="token punctuation">:</span>after 元素的开始/最后添加样式 必须配合content属性来使用
</code></pre><ul><li><h5 id="选择器的优先级" tabindex="-1"><a class="header-anchor" href="#选择器的优先级"><span>选择器的优先级</span></a></h5><p><img src="https://cdn.jsdelivr.net/gh/kq981024/Media/202406141851598.png" alt="1. CSS选择符优先级顺序"></p></li><li><h4 id="边框线" tabindex="-1"><a class="header-anchor" href="#边框线"><span>边框线</span></a></h4></li></ul><pre><code> solid:实线/dotted:点状虚线/dashed:虚线/double:双线
</code></pre><h2 id="浮动-float" tabindex="-1"><a class="header-anchor" href="#浮动-float"><span>浮动 float</span></a></h2><ul><li><p>子盒子溢出父盒子，在父盒子设置overflow:visible|hidden|scroll 显示/隐藏/滚动条</p></li><li><p>设置auto的元素会自动补齐等式 外边+边+内边+元素+内边+边+外边=父盒大小(水平垂直通用)，当设置浮动后，自动补齐等式不需要强制成立</p></li><li><p>垂直方向外边距折叠相关</p><ul><li><p>兄弟元素相邻外边距的情况：正正取大者/正负取两和/负负取绝对值较大</p></li><li><p>父子元素<strong>相邻</strong>外边距的情况：子元素会传递给父元素</p></li><li><p>解决方案一:子元素使用padding，同时父元素高度减去padding值</p></li><li><p>解决方案二:父元素添加border，同时父元素高度减去border值</p></li><li><p>最终方案：</p><pre><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        <span class="token comment">/*阻断相邻*/</span>
      <span class="token selector">.box1::before</span><span class="token punctuation">{</span>
           <span class="token comment">/* ::before是行内元素 不能独占一行 */</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></li></ul></li><li><h5 id="行内元素不支持设置宽高-可以使用display-block设置成块元素-然后再进行设置" tabindex="-1"><a class="header-anchor" href="#行内元素不支持设置宽高-可以使用display-block设置成块元素-然后再进行设置"><span>行内元素不支持设置宽高，可以使用display:block设置成块元素 然后再进行设置</span></a></h5></li><li><h5 id="box-sizing-content-box-border-box-宽高用来设置内容区大小-宽高用来设置可视区大小" tabindex="-1"><a class="header-anchor" href="#box-sizing-content-box-border-box-宽高用来设置内容区大小-宽高用来设置可视区大小"><span>box-sizing:content-box|border-box 宽高用来设置内容区大小|宽高用来设置可视区大小</span></a></h5></li><li><h5 id="box-shadow-x-y-模糊半径-rgba-0-0-0-透明度" tabindex="-1"><a class="header-anchor" href="#box-shadow-x-y-模糊半径-rgba-0-0-0-透明度"><span>box-shadow:x,y,模糊半径,rgba(0,0,0,透明度)</span></a></h5></li><li><h5 id="轮廓outline和边框border用法类似-outline-border-不改变-改变-可视区大小即页面布局" tabindex="-1"><a class="header-anchor" href="#轮廓outline和边框border用法类似-outline-border-不改变-改变-可视区大小即页面布局"><span>轮廓outline和边框border用法类似 outline/border 不改变/改变 可视区大小即页面布局</span></a></h5></li><li><h5 id="浮动元素不会盖住文字-文字会自动环绕在浮动元素周围-浮动后元素会从文档流中脱离-改变原有性质" tabindex="-1"><a class="header-anchor" href="#浮动元素不会盖住文字-文字会自动环绕在浮动元素周围-浮动后元素会从文档流中脱离-改变原有性质"><span>浮动元素不会盖住文字，文字会自动环绕在浮动元素周围，浮动后元素会从文档流中脱离，改变原有性质：</span></a></h5><h5 id="行内元素可以设置宽高-块元素不独占一行" tabindex="-1"><a class="header-anchor" href="#行内元素可以设置宽高-块元素不独占一行"><span>行内元素可以设置宽高，块元素不独占一行</span></a></h5></li><li><h5 id="高度塌陷-高度塌陷问题实质就是父元素没有设置高度-高度由子元素内容撑高。当子元素浮动脱离文档流-无法再撑起父元素的高度-导致父元素高度丢失-其下面的元素会由此上移-导致页面布局混乱。" tabindex="-1"><a class="header-anchor" href="#高度塌陷-高度塌陷问题实质就是父元素没有设置高度-高度由子元素内容撑高。当子元素浮动脱离文档流-无法再撑起父元素的高度-导致父元素高度丢失-其下面的元素会由此上移-导致页面布局混乱。"><span>高度塌陷：高度塌陷问题实质就是父元素没有设置高度，高度由子元素内容撑高。当子元素浮动脱离文档流，无法再撑起父元素的高度，导致父元素高度丢失，其下面的元素会由此上移，导致页面布局混乱。</span></a></h5><p><img src="https://cdn.jsdelivr.net/gh/kq981024/Media/202406141852930.png" alt="2. margin塌陷和margin合并解决方案（BFC）"></p><pre><code class="language-html">###### 解决方案元素开启BFC

###### 作用:可以包含浮动的子元素|不会被浮动元素覆盖|子元素和父元素的内外边距不会重叠

###### 实现方案：子元素设置overflow:auto|hidden 常用

###### 最终方案：通过::after伪元素设置clear实现
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 10px solid cadetblue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* 解决浮动高度塌陷问题最终方案 */</span>
      <span class="token selector">.box1::after</span><span class="token punctuation">{</span>
        <span class="token comment">/* ::after是行内元素 不能独占一行 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 
</code></pre></li></ul><h2 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position"><span>定位 position</span></a></h2><pre><code class="language-css">relative：相对于自己进行偏移<span class="token punctuation">,</span>没有脱离文档流

absolute：相对于其包含块<span class="token punctuation">(</span>最近开启定位的祖先<span class="token punctuation">)</span>进行偏移<span class="token punctuation">,</span>层级提升 脱离文档流

fixed：相对于视口进行偏移，特殊的绝对定位，不会随网页滚动条滚动<span class="token punctuation">,</span>层级提升 脱离文档流

<span class="token property">sticky</span><span class="token punctuation">:</span>相对于body进行偏移，特殊的相对定位，使元素到达某处固定，没有脱离文档流

设置auto的元素会自动补齐等式 left+外边+边+内边+元素+内边+边+外边+right=父盒大小<span class="token punctuation">(</span>水平垂直通用<span class="token punctuation">)</span>

<span class="token property">z-index</span><span class="token punctuation">:</span>整数 设置层级来控制定位元素的覆盖 祖先层级再高也不会盖住后代层级
</code></pre><h2 id="字体-font" tabindex="-1"><a class="header-anchor" href="#字体-font"><span>字体 font</span></a></h2><pre><code class="language-css"><span class="token selector">body</span><span class="token punctuation">{</span>
 <span class="token comment">/*设置全局字体*/</span>
 <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
   <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;字体名称&#39;</span><span class="token punctuation">;</span>
   <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;服务器中字体的路径&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h5 id="图标字体fontawesome使用步骤" tabindex="-1"><a class="header-anchor" href="#图标字体fontawesome使用步骤"><span>图标字体fontawesome使用步骤</span></a></h5><p>下载解压：https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself</p><p>引入：将CSS和webfonts移动到项目中，将all.css引入到网页中</p><p>使用：<i class="fas xx-xx" style=""></i></p><h2 id="文本-text" tabindex="-1"><a class="header-anchor" href="#文本-text"><span>文本 text</span></a></h2><h6 id="white-space-normal-nowrap-pre-处理网页空白方式-正常-不换行-保留空白、" tabindex="-1"><a class="header-anchor" href="#white-space-normal-nowrap-pre-处理网页空白方式-正常-不换行-保留空白、"><span>white-space:normal|nowrap|pre 处理网页空白方式 正常|不换行|保留空白、</span></a></h6><h6 id="如果文本过长想要夹断加省略号" tabindex="-1"><a class="header-anchor" href="#如果文本过长想要夹断加省略号"><span>如果文本过长想要夹断加省略号</span></a></h6><pre><code class="language-css"><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><h2 id="背景-background" tabindex="-1"><a class="header-anchor" href="#背景-background"><span>背景 background</span></a></h2><pre><code class="language-css"><span class="token property">background-position</span><span class="token punctuation">:</span>上下左右中，上下左右中 |偏移量 设置背景图片位置

<span class="token property">background-origin</span><span class="token punctuation">:</span>border-box/padding-box/content-box 背景图片偏移量原点从边框处/内边距处/内容区

<span class="token property">background-size</span><span class="token punctuation">:</span> width<span class="token punctuation">,</span>height/cover/contain 背景图片尺寸/图片比例不变在元素铺开/完整显示

<span class="token property">background-attachment</span><span class="token punctuation">:</span>scroll/fixed 背景图片随着滚动条滚动/固定

<span class="token property">background-clip</span><span class="token punctuation">:</span>border-box/padding-box/content-box 背景出现在边框下/内容区和内边距/内容区

<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span> 线性渐变色

background-image：<span class="token function">radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span> 径线渐变色<span class="token punctuation">(</span>放射效果<span class="token punctuation">)</span>
</code></pre><h2 id="过渡-transition" tabindex="-1"><a class="header-anchor" href="#过渡-transition"><span>过渡 transition</span></a></h2><pre><code class="language-css"><span class="token property">transition-property</span><span class="token punctuation">:</span>属性/all 指定要执行过渡的属性

<span class="token property">transition-duration</span><span class="token punctuation">:</span>时间 指定过滤效果的持续时间

<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>ease|linear|ease-in|ease-out|ease-in-out 指定过渡的速度视觉

transition-timing-function：<span class="token function">steps</span><span class="token punctuation">(</span>数字<span class="token punctuation">)</span> 分几步实现过渡

<span class="token property">transition-delay</span><span class="token punctuation">:</span>时间 指定过渡效果的延迟
</code></pre><h2 id="动画-animation" tabindex="-1"><a class="header-anchor" href="#动画-animation"><span>动画 animation</span></a></h2><ul><li><h5 id="设置关键帧" tabindex="-1"><a class="header-anchor" href="#设置关键帧"><span>设置关键帧</span></a></h5></li></ul><pre><code class="language-css"><span class="token atrule"><span class="token rule">@keyframes</span> test</span><span class="token punctuation">{</span>        <span class="token selector">//关键帧名
    0%</span><span class="token punctuation">{</span>
          //起始状态
     <span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span>
         // 结束状态
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ul><li><h5 id="添加动画" tabindex="-1"><a class="header-anchor" href="#添加动画"><span>添加动画</span></a></h5></li></ul><pre><code class="language-css"><span class="token selector">.box</span><span class="token punctuation">{</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>            //关键帧名
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>            //动画持续时间
<span class="token punctuation">}</span>
</code></pre><pre><code class="language-css"><span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite/整数 动画执行无限次/次数

<span class="token property">animation-direction</span><span class="token punctuation">:</span>normal/reverse/alternate 动画执行方向 from-&gt;to/to-&gt;from/不断切换方向

<span class="token property">animation-play-state</span><span class="token punctuation">:</span>running/paused 动画的执行状态 正常/停止

<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span>none/forwards/backwards/both 动画执行完成后状态 回到初始位置/停在终点位置/延时处在开始位置/延时处在开始位置，停在终点位
<span class="token property">animation</span><span class="token punctuation">:</span>关键帧名<span class="token punctuation">,</span>持续时间<span class="token punctuation">,</span>完成状态<span class="token punctuation">,</span>速度视觉


</code></pre><h2 id="变形-transform" tabindex="-1"><a class="header-anchor" href="#变形-transform"><span>变形 transform</span></a></h2><pre><code class="language-css"><span class="token selector">设置视距：html</span><span class="token punctuation">{</span><span class="token property">perspective</span><span class="token punctuation">:</span>800px<span class="token punctuation">}</span>
<span class="token property">transition</span><span class="token punctuation">:</span> property duration timing-function delay  // <span class="token property">缩写形式</span><span class="token punctuation">:</span>过渡属性 过渡时间 过渡函数 过渡延迟<span class="token punctuation">;</span>  
transition-property  // 过渡属性
transition-duration // 过渡时间
transition-timing-function // 过渡函数
transition-delay // 过渡延迟
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>  // 平面移动
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>  // 放大缩小
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span>  // 旋转 单位<span class="token function">deg</span><span class="token punctuation">(</span>度<span class="token punctuation">)</span> <span class="token function">trun</span><span class="token punctuation">(</span>圈<span class="token punctuation">)</span>  <span class="token function">grad</span><span class="token punctuation">(</span>梯度<span class="token punctuation">)</span> 400grad = 360deg = 1trun
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span>1<span class="token punctuation">,</span>1<span class="token punctuation">,</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>  //  x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z轴方向的矢量及旋转角度
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>70deg<span class="token punctuation">)</span><span class="token punctuation">;</span>  // 倾斜 单位<span class="token function">deg</span><span class="token punctuation">(</span>度<span class="token punctuation">)</span>  X和Y区别在于旋转轴
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">matrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  // 向量变换
transform-origin // 动画起点  top bottom left right 百分比 大小
<span class="token property">perspective</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>  // 视角 一般设置在body可以理解为人眼与屏幕的距离 
</code></pre><h2 id="弹性布局-flex" tabindex="-1"><a class="header-anchor" href="#弹性布局-flex"><span>弹性布局 flex</span></a></h2><pre><code class="language-html">使元素具有弹性，让元素可以跟随页面大小的改变而改变

display:flex 使一个元素称为弹性盒子 其子元素成为弹性元素(不包括全部后代)

一个元素可以即是弹性盒子也是弹性元素

flex-direction:row/row-reverse|column/column-reverse 子元素按行左右/右左 按列上下/下上 排列 方向

flex-wrap:nowrap/warp/warp-reverse 子元素不自动/自动换行/反方向自动换行

flex-flow: 方向 是否换行 flex-direction+flex-wrap的简写属性

justify-content:flex-start/center/flex-end/space-around/space-evenly/between 子元素水平对齐方式

开始/居中/尾部/空白分配到元素两侧/元素单侧/元素之间

align-item:stretch/flex-start/center/flex-end/baseline 子元素垂直方向对象方式

子元素高度设置为相同值/顶部/居中/底部/基线对齐

align-content:flex-start/center/flex-endspace-around/space-evenly/between

父元素空白分配 下/上下/上/元素两侧 /元素单侧/元素之间

flex-grow:数字 父盒子空间有多余 子元素伸展系数 填满父盒子 0为不伸展

flex-shrink:数字 父盒子空间不足 子元素收缩系数 适应父盒子 0为不收缩

flex-basis:像素/auto 子元素开始大小/子元素本身大小 没有grow和shrink的情况下使用

简写 flex:grow,shrink,basis

order：1.... 子元素排列顺序
</code></pre><h2 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局"><span>响应式布局</span></a></h2><h6 id="媒体查询-不同的断点拥有不同的样式" tabindex="-1"><a class="header-anchor" href="#媒体查询-不同的断点拥有不同的样式"><span>媒体查询 不同的断点拥有不同的样式</span></a></h6><h6 id="media-all-print-screen-样式-所有设备-打印机-带屏幕设备-控制哪些设备具有样式" tabindex="-1"><a class="header-anchor" href="#media-all-print-screen-样式-所有设备-打印机-带屏幕设备-控制哪些设备具有样式"><span>@media all/print/screen {样式} 所有设备/打印机/带屏幕设备 控制哪些设备具有样式</span></a></h6><p>sass中&amp;的作用：</p><pre><code class="language-css"><span class="token selector">.withdrawalBtn</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 590upx<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80upx<span class="token punctuation">;</span>
    <span class="token selector">&amp;.sure</span><span class="token punctuation">{</span>
       <span class="token property">background</span><span class="token punctuation">:</span> #FFDC03<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
只有当同时拥有withdrawalBtn和sure两个样式<span class="token punctuation">,</span>才会有背景颜色
</code></pre>`,42),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","CSS3kuaisushibie.html.vue"]]),k=JSON.parse('{"path":"/blogs/CSS/CSS3kuaisushibie.html","title":"CSS3快速识别","lang":"en-US","frontmatter":{"title":"CSS3快速识别","date":"2022-12-30T00:00:00.000Z","tags":["CSS3"],"categories":["CSS"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"伪类相关","slug":"伪类相关","link":"#伪类相关","children":[]},{"level":2,"title":"浮动 float","slug":"浮动-float","link":"#浮动-float","children":[]},{"level":2,"title":"定位 position","slug":"定位-position","link":"#定位-position","children":[]},{"level":2,"title":"字体 font","slug":"字体-font","link":"#字体-font","children":[]},{"level":2,"title":"文本 text","slug":"文本-text","link":"#文本-text","children":[]},{"level":2,"title":"背景 background","slug":"背景-background","link":"#背景-background","children":[]},{"level":2,"title":"过渡 transition","slug":"过渡-transition","link":"#过渡-transition","children":[]},{"level":2,"title":"动画 animation","slug":"动画-animation","link":"#动画-animation","children":[]},{"level":2,"title":"变形 transform","slug":"变形-transform","link":"#变形-transform","children":[]},{"level":2,"title":"弹性布局 flex","slug":"弹性布局-flex","link":"#弹性布局-flex","children":[]},{"level":2,"title":"响应式布局","slug":"响应式布局","link":"#响应式布局","children":[]}],"git":{"createdTime":1717677053000,"updatedTime":1718364603000,"contributors":[{"name":"wkq","email":"444296534@qq.com","commits":2}]},"filePathRelative":"blogs/CSS/CSS3快速识别.md"}');export{r as comp,k as data};
