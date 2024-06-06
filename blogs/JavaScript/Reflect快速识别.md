```
title: Reflect快速识别
date: 2023-08-15
tags:
    - JavaScript
categories:
    - JavaScript
```

## 前言

​		Reflect是JS中的一个内置对象，是对对象的操作。可以理解为是Object对象操作的一个补充，因为Object对象自身也有好用的方法。但随着ES6的变迁，很多Object对象的内置方法已经渐渐被Reflect所取代。所以Reflect很像Object，但和Proxy搭配使用，Reflect是非常适配的。

## 方法

- Reflect.get：**查找对象中属性的值**，这个方法接收三个参数，第一个为目标对象，第二个为要查找的key，第三个可以理解为this指向（默认为目标对象，可选），返回所查找到的值，如果没有，则返回`undefined`。就是对象中的`.`属性

  ```js
  //这个方法可以理解为是getter方法，比较简单，也好理解，只是查找一个对象中是否有这个属性
  const obj = {
    name: "心野",
    age: 24,
  };
  //这里第三个参数写不写都一样，可写可不写
  const ref = Reflect.get(obj, "age", obj);
  console.log(ref);//24
  const reft = Reflect.get(obj, "tel", obj);
  console.log(reft);//undefined
  ```

- Reflect.set：**修改对象中属性的值**，接收四个参数，第一个为目标对象（也可以是数组），第二个要修改的key，第三个要修改的值，第四个可以理解为this指向（默认为目标对象，可选）返回布尔值判断是否修改成功

  ```js
  //这个方法可以理解为是setter方法，修改对象中属性的值，没有就新增，有就修改
  const obj = {
    name: "心野",
    age: 24,
  };
  const ref = Reflect.set(obj, "age", 18, obj);
  const ref1 = Reflect.set(obj, "tel", 138338, obj);
  console.log(ref,ref1); //true true
  console.log(obj.age); //18
  console.log(obj.tel); //138338
  
  //对数组修改
  const arr=[]
  //如果目标对象是一个数组，第二个传的就是索引
  const ref = Reflect.set(arr, 2, 18);
  console.log(arr[2])//18
  
  //现在对数据进行劫持一下
  const new_obj = Object.defineProperty(obj, "age", {
  //是否可更改
    writable: false,
  });
  //这种情况下就修改失败了
  const ref = Reflect.set(new_obj, "age", 18);
  console.log(ref);//false
  console.log(new_obj.age);//24
  ```

- Reflect.has：**查找对象中是否存在某一个值**，与in操作符一致，接收三个参数，第一个为目标对象，第二个是查找的key，第三个可以理解为this指向（默认为目标对象，可选，返回一个布尔值判断是否可以被in操作符查找到

  ```js
  //与in操作符相同
  const obj = {
    name: "iceCode",
    age: 24,
  };
  const ref = Reflect.has(obj, "age");
  const ref1 = Reflect.has(obj, "tel");
  console.log(ref, ref1);//true false
  ```

- Reflect.apply：**这里可以理解为改变this指向的一个方法等同于`Function.prototype.apply()`，接收三个参数，第一个是目标函数，第二个是this指向的对象，第三个参数列表，应为数组，返回值是调用完带着指定参数和 this 值的给定的函数后返回的结果**

- Reflect.ownKeys：返回一个数组，包含目标对象所有的key，包括不可遍历的key

- Reflect.deleteProperty：**用于删除对象中的属性**，接收两个参数，第一个为目标对象，第二个为要删除key等同于`delete obj.key`

- Reflect.definProperty：此方法与`Object.definProperty`的作用一样，唯一不同的就是它返回一个布尔值，而`Object.definProperty`返回的是一个劫持之后的对象

- Reflect.getOwnPropertyDescriptor：**返回给定属性的描述**，类似Object.getOwnPropertyDescriptor

- Reflect.getPrototypeOf：**返回对象的原型**，与`Object.getPropotypeOf`是一致的，只有在个别情况下两者的返回结果会有不同，接收一个参数，目标对象

- Reflect.setPrototypeOf：**设置对象的原型**，接收两个参数，第一个是目标对象（设置原型的对象），第二个为对象的原型对象（类型必须是对象或null，否则报错），返回一个布尔值，表明原型是否被设置成功。与`Object.setPrototypeOf`一致，只有返回值不同

- Reflect.preventExtensions：**阻止对象扩展（禁止添加新的属性）**，接收一个参数，目标对象，返回一个布尔值，表明是否设置成不可被扩展成功。 `Object.preventExtensions`类似，唯一的差别是`Object.preventExtensions`接受的目标对象如果不是对象类型则会强制转换成对象类型，而`Reflect.preventExtensions`则会报错

- Reflect.isExtensible：**判断一个对象是否可扩展（即是否能添加属性）**，接收一个参数，目标对象，返回一个布尔值。与`Object.isExtensible`类似，唯一的差别是`Object.isExtensible`接受的目标对象如果不是对象类型则会强制转换成对象类型，而`Reflect.isExtensible`则会报错

- Reflect.construct：**类似于new操作符创建一个构造函数**，接收三个参数，第一个构造函数，第二个为参数列表（数组），第三个参数为this指向（可选），返回值是传入的构造函数（或第三个参数的this指向）实例化的实例对象

## 总结

​		一般情况下，很少单独使用`Reflect`中的一些方法，但是如果要使用构造函数`Proxy`的时候，就可以大胆为所欲为的使用了，因为相同的方法名，相同的参数，可以不用知道`Proxy`的各个属性需要`return`什么的参数，直接return` Reflect`对象的相同参数就可以了，记住了`Reflect`的方法即使用也就记住了`Proxy`的方法，只要玩懂了`Reflect`也可以轻松玩转`Proxy`