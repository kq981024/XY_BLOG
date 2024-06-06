---
title: Proxy快速识别
date: 2023-08-15
tags:
    - JavaScript
categories:
    - JavaScript
---

## 前言

##### 		可以将proxy理解为一个检票口代理，要进去玩做点什么就会被这个代理拦截处理（买票啊，登记啥的）后再返回。

## 方法

- get：用于在读取被拦截对象的属性，当读取对象属性值的时候就会触发此方法，传递三个参数分别是代理对象，读取的key，以及this指向，

  ```js
  const obj = { name:'心野',age:100}
  const pxy = new Proxy(obj,{
  	get(target,key,pointTo){
          //  doSomeing
  	   return Reflect.get(...arguments)  //  不变返回
  	}
  })
  pxy.name;   // 指定返回
  pxy.age;    // 指定返回
  ```

- set：对象属性被修改时触发，传递四个参数，对象本身，key值，要修改的值，this指向。返回布尔值判断是否修改成功

  ```js
  const obj = {
    name: "心野",
    age: 24,
  };
  const pxy = new Proxy(obj, {
    set(target, key, value, receiver) {
      //....
      return Reflect.set(...arguments);//属性能被修改，此方法一定会返回true，否则false
    },
  });
  
  pxy.age = 18;    //当修改时，就会触发set方法，并打印set方法里的日志
  console.log(pxy);  //{ name: '心野', age: 18 }
  ```

- has：对in操作符的拦截，也就是在对象中能否查找到这个属性，传递两个参数，对象本身和key，返回一个布尔值判断是否可以被in操作符查找到

  ```js
  const obj = {
    _name: "_心野",
    name: "心野",
    age: 24,
  };
  const pxy = new Proxy(obj, {
    has(target, key) {
      //判定条件，带有'_'的都将不会被查到
      if (key.indexOf("_") > -1) {
        return false;
      }
      return Reflect.has(...arguments);
    },
  });
  console.log("_name" in pxy);//false
  console.log("name" in pxy);//true
  
  //但是这个方法在使用for in 遍历的时候是不会触发的，也就无法进行拦截
  for (const key in pxy) {
    console.log(key);
  }
  //_name
  //name
  //age
  ```

- ownKeys：主要对Reflect.ownKeys方法的拦截

- deleteProperty：用于delete对象属性的拦截

- definProperty 用于Object.definProperty方法的拦截

- getOwnPropertyDescriptor：用于Object.getOwnPropertyDescriptor的拦截方法

- getPrototypeOf：当读取对象原型的时候，就会触发此拦截方法

- setPrototypeOf：主要拦截Object.setPrototypeOf

- preventExtensions：用于对Object.preventExtensions的拦截

- isExtensible：用于对Object.isExtensible的拦截

- construct：用于拦截new操作符

## 例子

##### 实现简易双向绑定

```Html
 <body>
 //创建两个元素
    <input type="text" placeholder="描述" class="des" />
    <div class="box"></div>
  </body>
  <script>
  //获取元素
    const des = document.querySelector(".des");
    const div = document.querySelector("div");
    //给input添加input事件
    des.addEventListener("input", (e) => {
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
   </script>
```

## 总结    

​		`Proxy`的13种方法各有各的用处，但平常我们用不到，即使是写`Proxy`的时候，大多情况下也只能用到`get`，`set`等方法，像对`Object`方法的拦截，需求少之又少。另外也发现了，`Proxy`的每一个方法都需要返回值，返回值也都不是固定的某些值，当使用了`Reflect`对应得方法之后，完全不就不用再考虑`Proxy`这些方法需要返回哪些值，**只要返回的是Reflect对应的方法，就永远不会出错。**

