---
title: JavaScript快速识别
date: 2023-01-06
tags:
 - JavaScript
categories: 
 - JavaScript
---
## 关于原型和原型链

- #### 原型

​		每个函数定义时自动添加prototype属性,默认指向原型对象(空的object)

​		原型对象中有个属性constructor，指向函数对象

```javascript
console.log(Date.prototype.constructor === Date)		//true
```

​		可以给原型对象添加属性(方法)

​		每个对象创建时自动添加 ______proto______ 属性,默认值为构造函数的prototype属性值

```javascript
function Fn(){}
let fn = new Fn()
console.log(Fn.prototype===fn.__proto__);		//true
```

- #### 原型链

​		对象要使用某个属性或方法，会现在自身寻找→原型对象中寻找→原型对象的原型中寻找......直到object对象（object对象没有原型）

- #### 原型继承


​		构造函数的实例对象自动拥有构造函数原型对象的属性和方法,利用的就是原型链 ，实例的隐式原型等于构造的显示原型   二者指向同一个原型对象(空的object) ，如果显示原型重新指向,会断开之前指向的原型对象，指向新的原型对象。而隐式原型对象依然指向之前的原型对象，不会随着显示原型的重新指向而改变指向。

## this的情况

- #### **隐式绑定**  


​		函数调用时前面并未指定任何对象，这种情况下this指向全局对象window

```javascript
function fn1() {
    let fn2 = function () {
        console.log(this);   //window
        fn3();
    };
    console.log(this); //window
    fn2();
};

function fn3() {
    console.log(this); //window
};

fn1();
```

​		如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上，若存在多个对象，则遵循就近原则

```javascript
function fn() {
    console.log(this.name);
};
let obj = {
    name: '安卓',
    func: fn,
};
let obj1 = {
    name: 'IOS',
    o: obj
};
obj1.o.func()     // 安卓
```

- #### **隐式丢失**


​		在特定情况下会存在隐式绑定丢失的问题，最常见的就是作为参数传递以及变量赋值

```javascript
var name = '安卓';
let obj = {
    name: 'IOS',
    fn: function () {
        console.log(this.name);
    }
};

function fn1(param) {
    param();
};
fn1(obj.fn);	// 安卓
// obj.fn 也就是一个函数传递进 fn1 中执行，单纯传递了一个函数而已，this并没有跟函数绑在一起，所以this丢失这里指向了window。
```

```javascript
var name = '安卓';
let obj = {
    name: 'IOS',
    fn: function () {
        console.log(this.name);
    }
};
let fn1 = obj.fn;
fn1(); 	// 安卓
```

- #### **显式绑定**（通过call、apply以及bind方法改变this的行为）


​		call与apply让函数从被动变主动，函数能主动选择自己的上下文，以此方法改变this指向时，指向参数提供的是null或者undefined，那么 this 将指向全局对象。

```javascript
let obj1 = {
    name: '安卓'
};
let obj2 = {
    name: 'IOS'
};
let name = '鸿蒙';

function fn() {
    console.log(this.name);
};
fn.call(obj1); // 安卓
fn.apply(obj2); // IOS
fn.call(undefined); // 鸿蒙
fn.apply(null); // 鸿蒙
fn.bind(undefined)(); // 鸿蒙
```

- #### **call、apply与bind的区别**

  - call、apply与bind都用于改变this绑定，但call、apply在改变this指向的同时还会执行函数，而bind在改变this后是返回一个全新的boundFcuntion绑定函数，这也是为什么上方例子中bind后还加了一对括号 ()的原因。

  - bind属于硬绑定，返回的 boundFunction 的 this 指向无法再次通过bind、apply或 call 修改；call与apply的绑定只适用当前调用，调用完就没了，下次要用还得再次绑

    ```js
    let obj1 = {
        name: '安卓'
    };
    let obj2 = {
        name: 'IOS'
    };
    let name = '鸿蒙';
    
    function fn() {
        console.log(this.name);
    };
    fn.call(obj1); 	// 安卓
    fn();  // 鸿蒙
    fn.apply(obj2); // IOS
    fn(); // 鸿蒙
    let boundFn = fn.bind(obj1);	// 安卓
    boundFn.call(obj2);		// 安卓
    boundFn.apply(obj2);	// 安卓
    boundFn.bind(obj2)();	// 安卓
    ```

  - call与apply功能完全相同，唯一不同的是call方法传递函数调用形参是以散列形式，而apply方法的形参是一个数组。在传参的情况下，call的性能要高于apply，因为apply在执行时还要多一步解析数组。

    ```js
    let obj = {
        name: '乔布斯'
    };
    
    function fn(system,brand) {
        console.log(`${this.name}开发了${brand}手机，属于${system}系统`);
    };
    fn.call(obj,'IOS','苹果');	//乔布斯开发了苹果系统，属于IOS系统
    fn.apply(obj,['IOS','苹果']);  //乔布斯开发了苹果系统，属于IOS系统
    ```

## **new绑定**

​		*new* 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例，会进行如下的操作：
 		步骤 *1*：创建一个空的简单 *JavaScript* 对象，即 { } ;
​		 步骤 *2*：链接该对象到另一个对象（即设置该对象的原型对象）；
 		步骤 *3*：将步骤 *1* 新创建的对象作为 *this* 的上下文；
 		步骤 *4*：如果该函数没有返回对象，则返回 *this*。

```javascript
function Fn(){
    this.name = '乔布斯';
};
let echo = new Fn();
console.log(echo.name)	// 乔布斯
```

## **this的绑定优先级**

```tex
显式绑定 > 隐式绑定 > 默认绑定

new绑定 > 隐式绑定 > 默认绑定
```

## **箭头函数的this**

​		箭头函数中没有this，箭头函数的this指向取决于外层作用域中的this，外层作用域或函数的this指向谁，箭头函数中的this便指向谁。一旦箭头函数的this绑定成功，也无法被再次修改，可以通过修改箭头函数的外层作用域达到修改箭头函数的this

```javascript
function fn() {
    return () => {
        console.log(this.name);
    };
};
let obj1 = {
    name: '乔布斯'
};
let obj2 = {
    name: '库克'
};
console.log(fn.call(obj1)());  //  乔布斯
console.log(fn.call(Obj2)())	// 库克
```

## 事件对象

​		当事件的响应函数被触发时,浏览器每次都会将一个事件对象作为实参event传递进响应函数

```js
event = event||window.event        // 事件参数的兼容
```

## 事件冒泡

​		即事件的向上传导，当底层元素的事件被触发时，其上层元素的**相同事件**也会被触发

## 取消事件冒泡

```
event.cancelBubble = true
```

## 事件委派

​		多个底层元素包括后添加的元素需要执行相同事件，将事件绑定到上层元素，底层通过冒泡触发上层元素绑定的事件

​		上层元素可以通过event.target.className=='name'接受期望元素绑定，其余不绑定。尽量减少绑定次数，提高程序性能

## 事件循环机制

​		在 *js* 中任务会分为同步任务和异步任务。

​		如果是同步任务，则会在主线程（也就是 *js* 引擎线程）上进行执行，形成一个执行栈。但是一旦遇到异步任务，则会将这些异步任务交给异步模块去处理，然后主线程继续执行后面的同步代码。

​		当异步任务有了运行结果以后，就会在任务队列里面放置一个事件，这个任务队列由事件触发线程来进行管理。

​		一旦执行栈中所有的同步任务执行完毕，就代表着当前的主线程（*js* 引擎线程）空闲了，系统就会读取任务队列，将可以运行的异步任务添加到执行栈中，开始执行。

​		在 *js* 中，任务队列中的任务又可以被分为 *2* 种类型：宏任务（*macrotask*）与微任务（*microtask*）

​		宏任务可以理解为每次执行栈所执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中所执行的任务。

​		微任务可以理解为当前宏任务执行结束后立即执行的任务。

## Node中的事件循环

*Node.JS* 的事件循环分为 *6* 个阶段：

- *timers* 阶段：这个阶段执行 *timer*（ *setTimeout、setInterval* ）的回调
- *I/O callbacks* 阶段：处理一些上一轮循环中的少数未执行的 *I/O* 回调
- *idle、prepare* 阶段：仅 *Node.js* 内部使用
- *poll* 阶段：获取新的 *I/O* 事件, 适当的条件下 *Node.js* 将阻塞在这里
- *check* 阶段：执行 *setImmediate( )*  的回调
- *close callbacks* 阶段：执行 

## 数据(堆数据)|内存|变量(栈索引)

- 数据是存储在内存代表特定信息的东东 ；例如:var a = '基本数据/对象|方法/变量'    a保存的是数据/对象|方法地址/变量内存内容
- 内存是内存条通电后产生的可存储数据的空间 ，物理断电后空间和数据都消失
- 变量=变量名+变量值  对应一块小内存   变量名用来查找对应的内存  变量值就是内存中保存的数据  

## 回调函数   

定义了 没有调用 最终执行了

#### IIFE  函数立即执行表达式|匿名函数自调用

作用:隐藏实现，不会污染外部命名空间 可以暴露方法

```javascript
<script type="text/javascript">
    // 函数自调用
      (function(){
        var a =3 
        console.log(a);   //3 
      })()
      var a = 4
      console.log(a);     //4
      
      // ;使得不会认为是整体
      ;(function(){
        var a =1
        function test(){
          console.log(++a);
        }
        window.$ = function(){
          return {
            test:test       //返回对象 对外暴露test方法
          }
        }
      })()
       $().test()
    </script>
```

## 变量与函数提升     

先执行变量提升再执行函数提升	

- 变量提升


```javascript
function fn1(){
 console.log(a);
  var a =4
}

//　fn1 等价于 fn2
    
function fn2() {
 var a
console.log(a)
 a = 4
}
  
fn()      //undefined
```

- 函数提升


```javascript
fn()      //  fn()函数提升			
function fn(){
  console.log('fn()');
}
```

## 执行上下文

​		即当前代码运行环境，执行代码需要哪些数据提前准备好再开始执行

## 作用域和作用域链

​		作用域只能向外查找,不能向内查找。当需要某个属性时，向外找最近的上层作用域里的同名属性

```javascript
<script type="text/javascript">
      var a =10,b=20
      function fn(x){
        var a = 100,c=300
        console.log('fn()',a,b,c,x);
        function bar(x){
          var a =1000,d=400
          console.log('bar()',a,b,c,d,x);
        }
        bar(100)      //1000,20,300,400,100
        bar(200)      //1000,20,300,400,200
      }
      fn(10)      //100,20,300,10
</script>
```

​		函数调用函数的情况下,考虑被调用函数的作用域向外

```javascript
 <script type="text/javascript">
      var x =10
      function fn(){
        console.log(x);
      }
      function show(f){
        var x =20
        f()
      }
      show(fn)			//10
    </script>
```

​		对象属性名 不包括在函数作用域内

```javascript
<script type="text/javascript">
      var fn = function () {
        console.log(fn)
      }
      fn()      //fn()
      var obj = {
        fn2: function () {
          console.log(fn2)
        },
      }
      obj.fn2() //错误   函数内部作用域并没有fn2
    </script>
```

## 函数闭包  

​		闭包定义：一个函数和对其周围状态的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（*closure*）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 *JavaScript* 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

- 嵌套情况下 内部函数引用了外部函数或变量时 ，产生闭包
- 将函数作为另一个函数的返回值    产生闭包
- 将函数作为实参传递给另一个函数调用		产生闭包

```javascript
  <body>
    <button>按钮一</button>
    <button>按钮二</button>
    <button>按钮三</button>
    <script type="text/javascript">
      var btns = document.getElementsByTagName('button')
      for (let i = 0,length =btns.length; i < length; i++) {
        btns[i].addEventListener('click', function () {
          alert('第'+(i+1)+'按钮被按了')      //捕获i i在function之外
        })
      }
    </script>
  </body>
```

## 闭包作用

- 匿名自执行函数
- 结果缓存
- 封装
- 实现类和继承

​		使用函数内部的变量在函数执行完后，仍然存活在内存中(延长局部变量的生命周期

让函数外部可以操作到函数内部(局部变量)的数据

## 闭包的生命周期

​		产生：嵌套内部函数定义完成后产生

​		死亡：包含闭包的函数对象成为垃圾对象时

## 内存泄露

​		内存泄漏（*Memory Leak*）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

- 函数执行完后,函数内的局部变量没有释放,占用内存时间会变长    解决:及时释放
- 内存泄露多了就会导致内存溢出
- 意外的全局变量/定时器没有清理/闭包都会导致内存泄露

## 内存溢出

​		当程序运行需要的内存超过了剩余的内存,就会抛出内存溢出的错误

## weakmap和weakset

* WeakSet* 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在 *WeakSet* 的集合中是唯一的
* 与 *Set* 相比，*WeakSet* 只能是**对象的集合**，而不能是任何类型的任意值。
* *WeakSet* 持弱引用：集合中对象的引用为弱引用。 如果没有其他的对 *WeakSet* 中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 *WeakSet* 中没有存储当前对象的列表。 正因为这样，*WeakSet* 是不可枚举的。

*WeakMap* 对象也是键值对的集合。它的**键必须是对象类型**，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 *GC* 回收掉。*WeakMap* 提供的接口与 *Map* 相同。

与 *Map* 对象不同的是，*WeakMap* 的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。

## 如何编写高性能的 *JavaScript*？

- 遵循严格模式："use strict"
- 将 *JavaScript* 本放在页面底部，加快渲染页面
- 将 *JavaScript* 脚本将脚本成组打包，减少请求
- 使用非阻塞方式下载 *JavaScript* 脚本
- 尽量使用局部变量来保存全局变量
- 尽量减少使用闭包
- 使用 *window* 对象属性方法时，省略 *window*
- 尽量减少对象成员嵌套
- 缓存 *DOM* 节点的访问
- 通过避免使用 *eval()* 和 *Function()* 构造器
- 给 *setTimeout()* 和 *setInterval()* 传递函数而不是字符串作为参数
- 尽量使用直接量创建对象和数组
- 最小化重绘 (*repaint*) 和回流 (*reflow*)

## 理解纯函数

- 只负责自己的任务，不会更改在函数调用前就已存在的对象或变量
- 输入相同，则输出相同。给定相同的输入，纯函数总是返回相同的结果