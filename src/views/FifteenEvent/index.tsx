import type { FC } from 'react';

import React from 'react';

// 冒泡捕获
const Index: FC = () => {
  const handleClick = () => {
    console.log('模拟冒泡阶段执行');
  };

  const handleClickCapture = () => {
    console.log('模拟捕获阶段执行');
  };

  return (
    <div>
      <button onClick={handleClick} onClickCapture={handleClickCapture}>
        点击
      </button>
    </div>
  );
};

// 阻止冒泡
const IndexTwo: FC = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log('点击到');
  };

  const handleFatherClick = () => console.log('冒泡到父级');

  return (
    <div onClick={handleFatherClick}>
      <div onClick={handleClick}>点击</div>
    </div>
  );
};

const FifteenEvent: FC = () => {
  return (
    <div>
      <span>冒泡捕获阶段</span>
      <Index />
      <span>阻止冒泡</span>
      <IndexTwo />
    </div>
  );
};

export default FifteenEvent;
