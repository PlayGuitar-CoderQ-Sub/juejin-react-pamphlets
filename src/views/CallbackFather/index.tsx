import type { FC } from 'react';
import React, { useState, memo, useCallback } from 'react';

import CallbackSon from '@/components/CallbackSon';
const Child = memo(CallbackSon);

const CallbackFather: FC = () => {
  const [title, setTitle] = useState('这是一个title');
  const [subTitle, setSubTiitle] = useState('这是一个副标题');

  const callback = () => {
    setTitle('标题该表了');
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <button onClick={() => setSubTiitle('副标题改变了')}>更改副标题</button>
      <Child onClick={useCallback(callback, [])} name="邱子健" />
    </div>
  );
};

export default CallbackFather;
