---
title: CSS3快速识别
date: 2022-12-30
tags:
  - CSS3
categories: 
  - 前端基础
---

### 前言

##### 		CSS是个非常有趣的东西，CSS3的出现减少了JavaScript的代码量。个人觉得CSS3不难，但是很难用得好，用得顺手，这篇博客总结CSS的一些新特性（不是全部，是笔者在工作用到的或者觉得有用的）,希望对看到这篇博客的朋友有所帮助。

---

### 伪类相关

##### 伪类选择器

```
ul>li:first-child/:last-child/ 选中第一个子元素/最后一个子元素/

ul>li:nth-child(m|n|2n/even|2n+1/odd) 选中第m个元素/全选/偶数位的元素/奇数位的元素

ul>li:not(:nth-child(m|n|2n/even|2n+1/odd)) 选中除了第m个元素/全选/偶数位的元素/奇数位的元素

a:link/:visited 没有访问过的链接/访问过的链接(只能修改颜色)

a:active/:hover 鼠标点击/滑过后触发样式
```

##### 伪元素选择器

```css
p::first-letter 选中第一个字母添加样式

p:first-line 选中第一行添加样式

p::selection 鼠标拖动选择 添加样式

div::before/::after 元素的开始/最后添加样式 必须配合content属性来使用
```

##### 选择器的优先级

```
 内联样式>id选择器>类和伪类选择器>元素(标签)优先级 加 !important就是最高优先级
```

#### 边框线

```
 solid:实线/dotted:点状虚线/dashed:虚线/double:双线
```

### 浮动 float

- ##### 子盒子溢出父盒子，在父盒子设置overflow:visible|hidden|scroll 显示/隐藏/滚动条

- ##### 设置auto的元素会自动补齐等式 外边+边+内边+元素+内边+边+外边=父盒大小(水平垂直通用)，当设置浮动后，自动补齐等式不需要强制成立

- ##### 垂直方向外边距折叠相关

######        兄弟元素**相邻**外边距的情况：正正取大者/正负取两和/负负取绝对值较大

######        父子元素**相邻**外边距的情况：子元素会传递给父元素

###### 解决方案一:子元素使用padding，同时父元素高度减去padding值

###### 解决方案二:父元素添加border，同时父元素高度减去border值

###### 最终方案:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .box1{
        width: 200px;
        height: 200px;
        background-color: cornflowerblue;
      }
        /*阻断相邻*/
      .box1::before{
           /* ::before是行内元素 不能独占一行 */
        content: '';
        display: table;
      }
      .box2{
        width: 100px;
        height: 100px;
        background-color: coral;
        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div class="box2">

      </div>
    </div>
  </body>
</html>
```

- ##### 行内元素不支持设置宽高，可以使用display:block设置成块元素 然后再进行设置

- ##### box-sizing:content-box|border-box 宽高用来设置内容区大小|宽高用来设置可视区大小

- ##### box-shadow:x,y,模糊半径,rgba(0,0,0,透明度)

- ##### 轮廓outline和边框border用法类似 outline/border 不改变/改变 可视区大小即页面布局

- ##### 浮动元素不会盖住文字，文字会自动环绕在浮动元素周围，浮动后元素会从文档流中脱离，改变原有性质：
  
  #####  行内元素可以设置宽高，块元素不独占一行

- ##### 高度塌陷问题以及解决方案
  
  ```
  高度塌陷问题实质就是父元素没有设置高度，高度由子元素内容撑高。当子元素浮动脱离文档流，无法再撑起父元素的高度，导致父元素高度丢失，其下面的元素会由此上移，导致页面布局混乱。
  ```

###### 解决方案元素开启BFC

###### 作用:可以包含浮动的子元素|不会被浮动元素覆盖|子元素和父元素的内外边距不会重叠

###### 实现方案：子元素设置overflow:auto|hidden 常用

###### 最终方案：通过::after伪元素设置clear实现

```html
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .box1{
        border: 10px solid cadetblue;
      }
      .box2{
        width: 200px;
        height: 200px;
        background-color: coral;
        float: left;
      }
      /* 解决浮动高度塌陷问题最终方案 */
      .box1::after{
        /* ::after是行内元素 不能独占一行 */
        display: table;
        content: '';
        clear: both;
      }

    </style>
  </head>
  <body>
    <div class="box1">
      <div class="box2">

      </div>
    </div>
  </body>
```

### 定位 position

```css
relative：相对于自己进行偏移,没有脱离文档流

absolute：相对于其包含块(最近开启定位的祖先)进行偏移,层级提升 脱离文档流

fixed：相对于视口进行偏移，特殊的绝对定位，不会随网页滚动条滚动,层级提升 脱离文档流

sticky:相对于body进行偏移，特殊的相对定位，使元素到达某处固定，没有脱离文档流

设置auto的元素会自动补齐等式 left+外边+边+内边+元素+内边+边+外边+right=父盒大小(水平垂直通用)

z-index:整数 设置层级来控制定位元素的覆盖 祖先层级再高也不会盖住后代层级
```

### 字体 font

```css
body{
 /*设置全局字体*/
 @font-face {
   font-family: '字体名称';
   src: url('服务器中字体的路径');
  }
}
```

##### 图标字体fontawesome使用步骤

下载解压：https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself

引入：将CSS和webfonts移动到项目中，将all.css引入到网页中

使用：<i class="fas xx-xx" style="样式"></i>    

### 文本 text

###### white-space:normal|nowrap|pre       处理网页空白方式  正常|不换行|保留空白、

###### 如果文本过长想要夹断加省略号

```css
.box{
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 }
```

### 背景 background

```css
background-position:上下左右中，上下左右中 |偏移量 设置背景图片位置

background-origin:border-box/padding-box/content-box 背景图片偏移量原点从边框处/内边距处/内容区

background-size: width,height/cover/contain 背景图片尺寸/图片比例不变在元素铺开/完整显示

background-attachment:scroll/fixed 背景图片随着滚动条滚动/固定

background-clip:border-box/padding-box/content-box 背景出现在边框下/内容区和内边距/内容区

background-image: linear-gradient(red,yellow) 线性渐变色

background-image：radial-gradient(red,yellow) 径线渐变色(放射效果)
```

### 过渡 transition

```css
transition-property:属性/all 指定要执行过渡的属性

transition-duration:时间 指定过滤效果的持续时间

transition-timing-function:ease|linear|ease-in|ease-out|ease-in-out 指定过渡的速度视觉

transition-timing-function：steps(数字) 分几步实现过渡

transition-delay:时间 指定过渡效果的延迟
```

### 动画 animation

##### 设置关键帧

```css
@keyframes test{        //关键帧名
    0%{
          //起始状态
     }
    100%{
         // 结束状态
    }
}
```

##### 添加动画

```css
.box{
        animation-name: test;            //关键帧名
        animation-duration: 2s;            //动画持续时间
}
```

```css
animation-iteration-count:infinite/整数 动画执行无限次/次数

animation-direction:normal/reverse/alternate 动画执行方向 from->to/to->from/不断切换方向

animation-play-state:running/paused 动画的执行状态 正常/停止

animation-fill-mode:none/forwards/backwards/both 动画执行完成后状态

                    回到初始位置/停在终点位置/延时处在开始位置/延时处在开始位置，停在终点位

简写

animation:关键帧名,持续时间,完成状态,速度视觉
```

### 变形 transform

```css
设置视距：html{perspective:800px}

transform-origin:0 0 设置变形的原点 默认值center

transform:translate(偏移量|百分比) 元素平移 百分比是基于自身 可以实现居中

transform:rotate(角度deg|数字turn) 元素旋转

transform:scale(数字) 元素缩放
```

### 弹性布局 flex

```
使元素具有弹性，让元素可以跟随页面大小的改变而改变

display:flex 使一个元素称为弹性盒子 其子元素成为弹性元素(不包括全部后代)

一个元素可以即是弹性盒子也是弹性元素
```

##### 弹性盒子属性:

```css
flex-direction:row/row-reverse|column/column-reverse 子元素按行左右/右左 按列上下/下上 排列 方向

flex-wrap:nowrap/warp/warp-reverse 子元素不自动/自动换行/反方向自动换行

flex-flow: 方向 是否换行 flex-direction+flex-wrap的简写属性

justify-content:flex-start/center/flex-end/space-around/space-evenly/between 子元素水平对齐方式

开始/居中/尾部/空白分配到元素两侧/元素单侧/元素之间

align-item:stretch/flex-start/center/flex-end/baseline 子元素垂直方向对象方式

子元素高度设置为相同值/顶部/居中/底部/基线对齐

align-content:flex-start/center/flex-endspace-around/space-evenly/between

父元素空白分配 下/上下/上/元素两侧 /元素单侧/元素之间
```

##### 弹性元素属性：

```css
flex-grow:数字 父盒子空间有多余 子元素伸展系数 填满父盒子 0为不伸展

flex-shrink:数字 父盒子空间不足 子元素收缩系数 适应父盒子 0为不收缩

flex-basis:像素/auto 子元素开始大小/子元素本身大小 没有grow和shrink的情况下使用

简写 flex:grow,shrink,basis

order：1.... 子元素排列顺序
```

### 响应式布局

###### 媒体查询  不同的断点拥有不同的样式

###### @media  all/print/screen {样式}        所有设备/打印机/带屏幕设备     控制哪些设备具有样式

sass中&的作用：

```css
.withdrawalBtn{
    width: 590upx;
    height: 80upx;
    &.sure{
       background: #FFDC03;
    }
}
只有当同时拥有withdrawalBtn和sure两个样式,才会有背景颜色
```
