---
title: React基础
date: 2023-10-11
tags:
  - React
categories:
  - React
---

## 前言

##### React 是一个将数据渲染为 HTML 视图的开源 JS 库,采用组件化模式、声明式编码

## 关于 JSX/TSX

##### 一种类似 XML 的 JS 扩展语法,本质就是`React.createElement(component,props,...children)`的语法糖,作用是简化创建虚拟 DOM,如下编译过程。

![](C:\Users\44429\Desktop\Snipaste_2023-10-15_22-42-44.png)

- 标签中混入`JS表达式(即有返回)`时要用`{}`包裹
- 类名属性改为`className="name"`形式,`for改为htmlFor形式`内联类名使用`style={{}}`形式,原有属性需要驼峰写法,自定义属性无需驼峰写法
- 仅存有一个根标签, 所有标签必须闭合
- 小写标签为 html 自有标签,大写标签共识为组件
- 会自动将数组中的元素在页面中显示,需要设置 key 值提高性能

## 关于样式

1. 全局引入：引入无需指定

2. 局部引入：样式文件命名增加.module 关键字,引入需要指定

3. classnames 库实现样式的对象形式控制,安装 npm 即可

   ```tsx
   import './App.css' // 全局直接使用 box1
   import sty from './selfCss.module.css' // 局部需要引入指定 box2
   import classNames from 'classnames'
   function App() {
     const selfClass = classNames({
       box1: true,
       [sty.box2]: true, // 为真样式生效,为假样式不生效
     })
     return (
       <>
         <div className={selfClass}>{'心野'}</div>
       </>
     )
   }
   export default App
   ```

4. 由于 react 规定类名不能直接使用肉串形式,要使用驼峰,但如果写的样式名是肉串模式需在 vite 中配置

   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react-swc'
   export default defineConfig({
     plugins: [react()],
     css: {
       modules: {
         localsConvention: 'camelCase', // 使局部样式可以使用驼峰
       },
     },
   })
   ```

## 关于事件

事件传参推荐写法：使用回调函数形式

```tsx
function App() {
  const handleClick = (num: number, e) => {
    console.log(num, e)
  }
  return (
    <>
      <div className={selfClass} onClick={(e) => handleClick(123, e)}>
        {'你好'}
      </div>
    </>
  )
}
```

## 关于组件通信

- #### 父子组件通信：当传递的属性只有属性名,默认属性值为 true,属性多可以使用对象解构

  ```tsx
  import React from 'react'
  import PropTypes from 'prop-types'

  function ChildrenApp({
    name = '心野', //　es6方式设置默认值
    age,
    sex,
    onClick,
  }: {
    name: string
    age: number
    sex: boolean
    icon: React.ReactElement
    onClick: React.MouseEventHandler
  }) {
    return (
      <>
        <div onClick={onClick}>子组件</div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{sex}</p>
      </>
    )
  }

  ChildrenApp.defaultProps = {
    age: 24, // react方式设置默认值
  }

  ChildrenApp.PropTypes = {
    // name: PropTypes.string, // 使用prop-types库限制传入组件参数类型,ts会直接检验,无需使用
    // name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 多类型值 其实是Ts中的|
    name: PropTypes.oneOf(['心', '野']), //类似ts中的枚举类型enum
    icon: PropTypes.element, // 代表传入的是jsx字符串
  }

  function App() {
    const handleClick = (e: any) => {
      console.log(e)
    }
    const info = {
      name: '心野',
      age: 24,
    }
    return (
      <>
        <div>{'你好'}</div>
        <ChildrenApp
          {...info}
          sex
          icon={<div>dom</div>}
          onClick={(e: any) => handleClick(e)}
        />
      </>
    )
  }

  export default App
  ```

## 关于组件

一次开发多处使用,减少心智负担。受控组件和非受控组件：通过 Props 控制的组件是受控组件,通过 State 控制的组件是非受控组件

```tsx
import { useState } from 'react'
import { useImmer } from 'use-immer'

function Nape({ title = '', liList = [], handleCheck = function (e, id) {} }) {
  return (
    <>
      <h1>{title}</h1>
      {liList.length > 0 && (
        <ul>
          {liList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item?.checked}
                onChange={(e) => handleCheck(e, item.id)}
              />
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

function App() {
  const [list, setList] = useImmer([])
  const [inpTxt, setInpTxt] = useState('')
  const todoList = list.filter((item) => item.checked)
  const doneList = list.filter((item) => !item.checked)
  const handleChange = (e: any) => {
    setInpTxt(e.target.value)
  }

  const addTest = () => {
    setList((draft) => {
      draft.unshift({ id: inpTxt, value: inpTxt, checked: false })
    })
    setInpTxt('')
  }

  const handleCheck = (e: any, id: string) => {
    setList((draft) => {
      draft.find((item) => item.id === id).checked = e.target.checked
    })
  }

  return (
    <>
      <div>
        <input type="text" value={inpTxt} onChange={(e) => handleChange(e)} />
        <button onClick={addTest}>添加任务</button>
      </div>
      <Nape title="已完成任务" liList={todoList} handleCheck={handleCheck} />
      <Nape title="未完成任务" liList={doneList} handleCheck={handleCheck} />
    </>
  )
}

export default App
```

## React：实现核心功能和组件

- ##### React.createElement(arg1,arg2,arg3)：创建一个 React 元素(无法修改),arg1：html 标签名；arg2：html 标签属性对象；arg3：元素的子元素或者内容(...可多个)

  ```jsx
  React.createElement('div', {}, 'div内容')
  ```

- ##### React.createRef()：创建一个 dom 容器,current 属性即 dom 对象,跟 useRef 一样

- ##### React.Fragment:适用于父容器但不产生多余网页结构。`<> </>` 是 Fragment 的语法糖

- ##### React.createContext({})：创建上下文供子后代使用,数据可以后期传入

- ##### React.memo(组件):接受组件作为参数,返回一个具有缓存功能的新组件,即当组件的 props 发生变化,组件才会重新渲染,防止组件重新渲染

- ##### React.StrictMode：开启严格模式

  - 检查组件是否是纯函数
  - 及早的发现 useEffet 中的错误
  - 警告过时的 API

- ##### Profiler：测试性能，根据不同参数得出组件是否需要优化，devtool 工具自带

- ##### lazy 和 Suspense：当组件不想一开始渲染，但是 js 中 import 会自动加载，会导致性能问题，所以需要使用组件懒加载

  - lazy 能够让组件在第一次被渲染之前延迟加载组件的代码
  - <Suspense>允许显示回退，直到其子项完成加载

  ```jsx
  import { useState, lazy, Suspense } from 'react'

  const Comp = lazy(() => import('...组件路径')) // 此法导入不会立即执行，当需要加载时才会执行

  function App() {
    const [show, setShow] = useState(false)
    return (
      <>
        <button onClick={() => setShow(true)}>show</button>
        <Suspense fallback={<div>加载中</div>}>{show && <Comp />}</Suspense>
      </>
    )
  }
  ```

## ReactDOM：操作浏览器 DOM

#### react-dom/client

#### react-dom/server

- ##### ReactDOM.createRoot(arg1).render(arg2)：创建 React 的根容器,将 React 元素插入并渲染到根元素中。根元素中的所有内容都会被删除,被 React 元素所替换。 arg1：dom 容器;arg2：dom 对象

- ##### ReactDOM.createPortal(dom 对象，目标位置 dom 对象)：创建传送门,类似 Vue3 的 teleport,将组件渲染到指定的 dom 位置

  ```jsx
  import {createPortal} from 'react-dom'

  function App(){
    return (<>
        <div>
          {
            createPortal(<h1>传送门</h1>),
            domcument.body
           }
        </div>
        </>)
  }
  export defalut App
  ```

- ##### flushSync(()=>{...}):确保 dom 立刻更新，有点类似 Vue 中的 nextTick，后续得到的是 dom 更新后的数据
