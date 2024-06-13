---
title: React的Hook
date: 2023-10-11
tags:
  - React
categories:
  - React
---

## 

### **useState**

###### 		**随时间或操作的数据称为状态（state）,状态驱动视图更新。state 可以重新触发函数，返回更新后的 Dom，而普通变量无法重新渲染 Dom**

- 每当更改状态值，dom都会重新渲染，所有逻辑也会重新走一遍。（除非用useMemo和useCallBack）所以很轻松的就实现了Vue的计算属性API。其中状态值是useState进行定义的，而不是常规的变量。
- 当每次组件销毁时，如果状态所处的位置（结构体相同或 key 属性相同）没有发生改变时,组件状态保留。

```jsx
import { useState } from 'react'
function App() {
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
  return (
    <>
      {obj.name}
    </>
  )
}
export default App
```

#### 		

------

### useImperativeHandle

###### 		控制组件的 dom 暴露，可以选择暴露出去的方法。配合useRef使用，层级不复杂的时候，子传父还是好用的

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

#### 	

------

### 		useRef

###### 		创建一个存储 DOM 对象的容器,选择 DOM 对象设置为容器的 current 对象,实现访问原生 dom 对象,react 中尽量减少 dom 的直接操作,最好只是读取操作

- ##### 基础使用：

  ```tsx
  const selfRef = useRef(null) //　通过钩子创建的容器不会每次渲染就重新创建
  const demo = () => {
    return <div ref={selfRef}></div>
  }
  ```

- ##### 通过`forwardRef`,父组件可获得子组件的 dom 对象就进行操作

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

#### 	

------

### 		useContext

###### 		提供数据给深层次的结构，类似 Vue3 中的 provide 和 inject 依赖注入

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



------

### 		useEffect

###### 		用于处理于组件渲染无关,但对组件有副作用的代码,在渲染被绘制到屏幕后执行（异步）

- 触发时机在渲染后，依赖方法尽量在useEffect中直接定义
- 依赖性的改变会触发依赖方法，改变的判断是依据`object.is()`
- 初始化useEffect需要做清理工作，即 return 一个清理箭头回调函数,其函数作用域与 useEffect 相同，就是定时器的清理

```jsx
import { useEffect} from 'react';  
export default ()=>{
  useEffect(() => { })     // 每次重新渲染触发
  useEffect(() => { }, [])  // 首次渲染触发
  useEffect(() => { }, [a])  // a变化触发 包括初次定义
  useEffect(() => {
    return () => {}
  }, [a])  // 清除工作
}
```

#### 	

------

### 		useReducer

###### 		整合 state,一个方法统一处理对 state 的不同操作，只能说是更规范对一个状态的操作，大部分情况下还是useState即可

```jsx
import { useReducer } from 'react'
import { useImmerReducer } from 'use-immer'
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

#### 		

------

### 		useMemo

###### 		由于react状态更新会刷dom，可能就会重新触发些计算复杂的函数导致页面加载过慢，影响用户体验。memo对计算结果进行缓存，达到优化用户体验。

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



------

### 		useCallBack

###### 		useCallback就是useMemo的第一个参数的返回值是函数时的特殊情况

```jsx
const fnMemo = useMemo(()=>()=>{...},[...])    // 返回一个回调函数写法
const fnCb = useCallBack(()=>{...}.[...])    // 简化写法
```

------

### 		useLayoutEffect

###### 		在渲染绘制到屏幕前执行的（同步）需要操作 dom 并改变样式时使用避免闪屏问题

------

### 		useTransition

###### 		不阻塞 UI 的情况下来更新状态,返回一个状态值表示过渡任务的等待状态,以及一个启动该过渡任务的函数,也可直接引入 startTransition 使用,不过少了判断值

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

#### 		

------

### 		useDeferredValue

###### 		接受一个值,并返回该值的新副本,该副本将推迟到更紧急的更新之后

```jsx
import { useState, useDeferredValue } from 'react'
const [state1, setState1] = useState('状态1')
const state2 = useDeferredValue(state1) // 得到的数据副本
```

#### 		

------

### 		useId

###### 		生成传递给无障碍属性的唯一 ID，通俗来说就是同个组件多次出现在一个页面中，会产生相同的 ID 值。而在 Dom 中 ID 最好是唯一的，笔者一般用nanoid()

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

#### 		

------

### 		自定义 hook

###### 		以 use 开头。可以在其中使用内置 hook

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

#### 		