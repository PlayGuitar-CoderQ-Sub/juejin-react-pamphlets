import type { FC } from 'react';
import React, { useRef, useState, useEffect } from 'react';

const RefTest: FC = () => {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    numRef.current = count;
  }, [count]);

  const changeDom = () => {
    // 获取整个div
    console.log('整个div', divRef.current);
    // 获取div的class
    console.log('div的class', divRef.current?.className);
    // 获取div自定义属性
    console.log('div自定义属性', divRef.current?.getAttribute('data-clj'));
  };
  return (
    <div>
      <div className="div-class" data-clj="我是div的自定义属性" ref={divRef}>
        我是div
      </div>
      <button onClick={() => changeDom()}>获取DOM</button>
      <hr />
      <div>
        <h2>count上一次的值：{numRef.current}</h2>
        <h2>count这一次的值: {count}</h2>
        <button onClick={() => setCount(count + 10)}>+10</button>
      </div>
    </div>
  );
};

export default RefTest;
