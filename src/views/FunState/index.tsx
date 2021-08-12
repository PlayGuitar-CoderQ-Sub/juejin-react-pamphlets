import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

const FunState: FC = () => {
  const [number] = useState(0);

  // initData是一个函数
  const [randomNumber] = useState(() => {
    if (Math.random() > 0.5) {
      return Math.ceil(Math.random() * 100);
    } else {
      return 1;
    }
  });

  // dispatch是一个函数
  const [disNumber, setDisNumber] = useState(0);

  const handleClick = () => {
    setDisNumber((state) => state + 1);
  };

  useEffect(() => {
    console.log('监听number变化', disNumber);
  }, [disNumber]);

  const handleClickEffect = () => {
    flushSync(() => {
      setDisNumber(2);
    });

    setDisNumber(3);

    setTimeout(() => {
      setDisNumber(4);
    });
  };

  const [state, setState] = useState({ name: 'alien' });

  // 传入相同的参数
  const handleClickSame = () => {
    state.name = 'Alien';
    setState(state);
  };

  return (
    <div>
      <h1>state非函数: {number}</h1>
      <h1>函数: {randomNumber}</h1>
      <hr />
      <h1>dispatch是一个函数: {disNumber}</h1>
      <button onClick={() => handleClick()}>dispatch是一个函数</button>
      <button onClick={() => handleClickEffect()}>useEffect是一个函数</button>
      <hr />
      <h2>{state.name}</h2>
      <button onClick={() => handleClickSame()}>传入一个相同的参数</button>
    </div>
  );
};

export default FunState;
