import type { FC } from 'react';
import React, { useState, useMemo } from 'react';

function calcNumber(count) {
  console.log('calcNumber重新计算');
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total;
}

const MemoTest: FC = () => {
  const [count, setCount] = useState(100000);
  const [show, setShow] = useState(true);
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和： {total}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
};

export default MemoTest;
