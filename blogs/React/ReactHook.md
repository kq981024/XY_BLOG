---
title: React的Hook
date: 2023-10-11
tags:
  - React
categories:
  - React
---

## 关于钩子

- #### useState(状态,更新状态异步方法)：随时间或操作的数据称为状态,状态驱动视图更新。因为 state 可以重新触发函数,返回更新后的 jsx ,而普通变量无法重新渲染 jsx。

  - 多个 state 状态的维护记忆,react 是内置索引实现的。故使用内置 api 时尽量不要有逻辑判断打乱索引顺序,避免报错。
  - 状态改变视图是三步骤：1、初始化渲染 render,2、初始化组件和数据 3、虚拟 dom 转为真实 dom
  - react 将 state 的值始终固定在一次渲染的各个事件处理函数内部。即 state 的值始终是在当时的作用域下的值,而不是下次渲染的值
  - 当修改状态后的值并没有发生改变,则函数组件并不会重新渲染
  - react 实现类似 vue 中 computed 方法,直接将计算值放在 state 之后,因为每次 state 更新就会重新运行函数,从而实现计算属性功能
  - 组件销毁时,所对应的状态也会重置,状态位置（结构体相同或 key 属性相同）没有发生改变时,组件状态保留
  - useImmer 库简化不可变对象操作： 安装 npm i immer use-immer

  ```jsx
  import { useState } from 'react'
  function App() {
    const [list, setList] = useState(() => [
      { id: 1, name: '心' },
      { id: 2, name: '野' },
      { id: 3, name: 'ye' },
    ]) // 使用回调函数实现惰性初始化状态的值

    const [obj, setObj] = useState({
      name: {
        surname: '心',
        name: '野',
      },
      sex: 24,
    })

    const computedState = obj.sex * 2 // 实现类计算属性功能

    setObj({
      ...obj,
      name: {
        ...obj.name,
        surname: '更改姓', // 多级对象state更改
      },
    })

    // 翻转数组元素
    const cloneList = [...list]
    cloneList.reverse()
    setList(cloneList)
    const fn = () => {
      setList([...list, { id: 4, name: '添加元素' }])
      setList([
        ...list.slice(0, 1),
        { id: 5, name: '删除元素' },
        ...list.slice(2),
      ])
    }
    return (
      <>
        <div onClick={fn}>{'你好'}</div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    )
  }
  export default App
  ```

- #### useImperativeHandle(ref,()=>{return ...})：控制组件的 dom 属性暴露

  ```tsx
  import { useRef, forwardRef, useImperativeHandle } from 'react'

  const Nape = forwardRef(function Nape(props, ref) {
    const inpRef = useRef(null)
    useImperativeHandle(ref, () => {
      // 控制暴露属性
      return {
        focusAndStyle() {
          inpRef.current.focus()
          inpRef.current.style.background = 'red'
        },
      }
    })
    return (
      <>
        <input type="text" ref={inpRef} />
      </>
    )
  })

  function App() {
    const selfRef = useRef(null)
    const handleClick = () => {
      selfRef.current.focusAndStyle()
      // selfRef.current.style.background = 'red'  报错 因为useImperativeHandle钩子没有暴露
    }
    return (
      <>
        <button onClick={handleClick}>点击</button>
        <div>
          <Nape ref={selfRef} />
        </div>
      </>
    )
  }

  export default App
  ```

- #### useRef(null):创建一个存储 DOM 对象的容器,选择 DOM 对象设置为容器的 current 对象,实现访问原生 dom 对象,react 中尽量减少 dom 的直接操作,最好只是读取操作

  - 基础使用：

    ```tsx
    const selfRef = useRef(null) //　通过钩子创建的容器不会每次渲染就重新创建
    const demo = () => {
      return <div ref={selfRef}></div>
    }
    ```

  - 通过`forwardRef`,父组件可获得子组件的 dom 对象就进行操作

    ```tsx
    import { useRef, forwardRef } from 'react'

    const Nape = forwardRef(function Nape(props, ref) {
      return (
        <>
          <input type="text" ref={ref} />
        </>
      )
    })

    function App() {
      const selfRef = useRef(null)
      const handleClick = () => {
        selfRef.current.focus()
        selfRef.current.style.background = 'red'
      }
      return (
        <>
          <button onClick={handleClick}>点击</button>
          <div>
            <Nape ref={selfRef} />
          </div>
        </>
      )
    }

    export default App
    ```

- #### useContext():类似 Vue3 中的 provide 和 inject 依赖注入

  ```jsx
  import { createContext, useContext } from 'react'

  const AppContext = createContext(0) // 未提供value则是默认值
  const useGetContext = () => useContext(AppContext)

  function App() {
    return (
      <>
        <AppContext.Provider value={'爷爷的礼物'}>
          <div>
            爷
            <Father />
          </div>
        </AppContext.Provider>
      </>
    )
  }

  function Son() {
    const value = useGetContext()
    return (
      <>
        <div>孙</div>
        <div>{value}</div>
      </>
    )
  }

  function Father() {
    return (
      <>
        <div>
          父
          <Son />
        </div>
      </>
    )
  }

  export default App
  ```

- #### useEffect(()=>{...},[])：用于处理于组件渲染无关,但对组件有副作用的代码,在渲染被绘制到屏幕后执行（异步）

  - 第一个参数是处理逻辑,第二个参数即当依赖发生变化才触发处理逻辑,如果第二项是空数据,则 effect 只会在组件初始化执行一次。处理逻辑可以返回一个回调函数,可以操作上次 Effect 执行带来的影响。
  - useEffect 触发时机是在每次 JSX 渲染后,即包括初始渲染(全部 efferct)和更新渲染(对应依赖性更新)且都是最后才触发,内部通过`object.is()`判断是否发生改变,如果处理逻辑中包含状态（props,state,计算变量等）,应该将状态加入到依赖数组。且尽量在 useEffect 中定义函数
  - 初始化数据时 useEffect 需要做清理工作,即 return 一个清理箭头回调函数,其函数作用域与 useEffect 相同。或者使用第三方库 ahook

- #### useLayoutEffect: 在渲染绘制到屏幕前执行的（同步）需要操作 dom 并改变样式时使用避免闪屏问题

- #### useInsertionEffect：在 Dom 更新前触发,基本只在 CSS-in-Js 库中使用

- #### useReducer(()=>{},initialArg):整合 state,一个方法统一处理对 state 的不同操作

  ```jsx
  import { useReducer } from 'react'
  import { useImmerReducer } from 'use-immer'
  /** 
     普通写法
     const listReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, { id: 3, txt: 'ccc' }]
      case 'sub':
        return state.slice(1, state.length)
    }
  } **/

  // immer写法
  const listReducer = (draft, action) => {
    switch (action.type) {
      case 'add':
        draft.push({ id: 3, txt: 'ccc' })
        break
      case 'sub':
        draft.splice(0, 1)
        break
    }
  }

  function App() {
    /** 普通写法
    const [list, listDispatch] = useReducer(listReducer, [
      { id: 1, txt: 'aaa' },
      { id: 2, txt: 'bbb' },
    ]) **/

    // immer写法
    const [list, listDispatch] = useImmerReducer(listReducer, [
      { id: 1, txt: 'aaa' },
      { id: 2, txt: 'bbb' },
    ])
    return (
      <>
        <button onClick={() => listDispatch({ type: 'add' })}>增</button>
        <button onClick={() => listDispatch({ type: 'sub' })}>减</button>
        <div>
          {list.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </div>
      </>
    )
  }

  export default App
  ```

- #### useMemo(()=>计算结果,[计算属性依赖])：对计算结果进行缓存

  - memo 传入 props 不变,当前组件跳过重新渲染

    ```jsx
    import { memo, useState } from 'react'

    const Father = memo(function Father() {
      // 更改重新调用函数时由于传入的props没变   于是跳过
      return (
        <>
          <div>{Math.random()}</div>
        </>
      )
    })

    function App() {
      const [count, setCount] = useState(0)
      const handleClick = () => {
        setCount(1)
      }
      return (
        <>
          <button onClick={handleClick}>测试</button>
          <Father />
        </>
      )
    }

    export default App
    ```

  - 缓存计算结果,由于 Object.is 判断引用数据类型总是 false,所以需要该钩子判断减少重新渲染

    ```jsx
    import { memo, useMemo, useState } from 'react'

    function Father({ list }) {
      // 更改重新调用函数时由于传入的props没变   于是跳过
      return (
        <>
          <ul>{list.length}</ul>
          <div>{Math.random()}</div>
        </>
      )
    }

    function App() {
      const [count, setCount] = useState(0)
      const list = useMemo(() => [count, count, count], [count]) // 只有依赖性改变的时候,缓存才会改变然后重新渲染
      const handleClick = () => {
        setCount(Math.random())
      }

      return (
        <>
          <button onClick={handleClick}>测试</button>
          <Father list={list} />
        </>
      )
    }

    export default App
    ```

- #### useCallBack(()=>{},[依赖项]):`useCallback`就是`useMemo`的第一个参数的返回值是函数时的特殊情况

  ```jsx
  const fnMemo = useMemo(()=>()=>{...},[...])    // 返回一个回调函数写法
  const fnCb = useCallBack(()=>{...}.[...])    // 简化写法
  ```

- #### useTransition：不阻塞 UI 的情况下来更新状态,返回一个状态值表示过渡任务的等待状态,以及一个启动该过渡任务的函数,也可直接引入 startTransition 使用,不过少了判断值

  ```jsx
  import { useState, useTransition } from 'react'

  function App() {
    const [state, setState] = useState('平常')
    const [pending, startTransition] = useTransition()
    const changeHandle = () => {
      setState('紧急')
      // 将非紧急任务滞后
      startTransition(() => {
        setState('非紧急')
      })
    }

    return (
      <>
        <button onClick={changeHandle}>更新</button>
        {pending && <div>loading</div>}
        <div>{state}</div>
      </>
    )
  }

  export default App
  ```

- #### useDeferredValue(arg)：接受一个值,并返回该值的新副本,该副本将推迟到更紧急的更新之后（理解未通透）

  ```jsx
  import { useState, useDeferredValue } from 'react'
  const [state1, setState1] = useState('状态1')
  const state2 = useDeferredValue(state1) // 得到的数据副本
  ```

- #### useId:生成传递给无障碍属性的唯一 ID,通俗来说就是同个组件多次出现在一个页面中,会产生相同的 ID 值。而在 Dom 中 ID 最好是唯一的

  ```jsx
  import { useId } from 'react'

  function Comp() {
    const selfId = useId()
    return (
      <>
        <div id={selfId}></div>
      </>
    )
  }

  function App() {
    return (
      <>
        <Comp />
        <Comp />
      </>
    )
  }

  export default App
  ```

- #### useDebugValue：在调试工具中输出某些内容（基本没用）

- #### useSyncExternalStore：第三方库使用的状态（很少用）

- #### 自定义 hook,以 use 开头。可以在其中使用内置 hook

  ```tsx
  import { useImmer } from 'use-immer'
  import { useEffect } from 'react'

  function useMouse() {
    const [mouse, setMouse] = useImmer({ x: undefined, y: undefined })

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMouse((draft) => {
          draft.x = e.pageX
          draft.y = e.pageY
        })
      }
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }, [])
    return mouse
  }

  function App() {
    const location = useMouse()
    return (
      <>
        <div>{location.x}</div>
        <div>{location.y}</div>
      </>
    )
  }

  export default App
  ```

## 错误边界

​ react 如果代码编译报错会销毁整个 Dom，导致判断错误在哪无法可视化出来。可以引入`react-error-boundary`创建错误边界，可视化的看出哪里出现错误

```jsx
npm i react-error-boundary -d   //　安装

// 使用
import {ErrorBoundary} from "react-error-boundary"

function App(){
	return (
	<div>
	   <ErrorBoundary　fallback={<div>错误提示</div>}>
	     //　可能错误组件
	   </ErrorBoundary>
	</div>
	)
}

export default App
```
