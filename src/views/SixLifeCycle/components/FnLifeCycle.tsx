import type { FC } from 'react';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

/**
 * @description 函数式生命周期
 * @useEffect 1. useEffect 第一个参数 callback, 返回的 deStory,
 * deStory 作为下一次callback执行之前调用，用于清除上一次 callback 产生的副作用。
 * 2. 第二个参数作为依赖项，是一个数组，可以有多个依赖项，依赖项改变，执行上一次callback 返回的 deStory ，
 * 和执行新的 effect 第一个参数 callback 。
 * ⚠️ 3. effect 回调函数不会阻塞浏览器绘制视图。
 * @useLayoutEffect 1. 首先 useLayoutEffect 是在DOM 绘制之前，这样可以方便修改 DOM ，
 * 这样浏览器只会绘制一次，如果修改 DOM 布局放在 useEffect, 那 useEffect 执行是在浏览器绘制视图之后，
 * 2. 接下来又改 DOM , 就可能会导致浏览器再次回流和重绘。而且由于两次绘制，视图上可能会造成闪现突兀的效果。
 * ✅ 一句话概括如何选择 useEffect 和 useLayoutEffect ：修改 DOM ，改变布局就用 useLayoutEffect ，其他情况就用 useEffect 。
 */

interface User {
  age: number;
}

const deStory = () => {
  console.log('销毁打印');
};

const FnLifeCycle: FC<User> = (props) => {
  const [num, setNum] = useState(0);
  // 同步
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });

  // 异步
  useEffect(() => {
    /*  componentDidMount 替代方案: 请求数据， 事件监听， 操作dom */
    console.log('componentDidMount 替代方案: 请求数据， 事件监听， 操作dom ');
  }, []);

  useEffect(() => {
    /*  componentWillUnmount 替代方案: 解除事件监听器 ，清除定时器，延时器  */
    return deStory;
  }, []);

  useEffect(() => {
    /**
     * 说 useEffect 代替 componentWillReceiveProps 着实有点牵强。
     * 首先因为二者的执行阶段根本不同，一个是在render阶段，一个是在commit阶段。
     * 其次 useEffect 会初始化执行一次，但是 componentWillReceiveProps 只有组件更新 props 变化的时候才会执行。
     */
    console.log('componentWillReceiveProps 代替方案');
  }, [props.age]);

  useEffect(() => {
    /**
     * useEffect 和 componentDidUpdate 在执行时期虽然有点差别，useEffect 是异步执行，componentDidUpdate 是同步执行 ，
     * 但都是在 commit 阶段 。但是向上面所说 useEffect 会默认执行一次，而 componentDidUpdate 只有在组件更新完成后执行。
     */
    console.log('componentDidUpdate 代替方案');
  });

  return (
    <div>
      <div>props: {props.age}</div>
      <div>states: {num}</div>
      <button onClick={() => setNum((state) => state + 1)}>改变state</button>
    </div>
  );
};

export default () => {
  const [number, setNumber] = useState(10);
  const [isRender, setRender] = useState(true);
  const btnElement = useRef(null);
  useEffect(() => {
    console.log('btnElement', btnElement.current);
  });
  return (
    <div>
      {isRender && <FnLifeCycle age={number} />}
      <button ref={btnElement} onClick={() => setNumber((state) => state + 1)}>
        改变props
      </button>
      <button onClick={() => setRender(false)}>卸载组件</button>
    </div>
  );
};
