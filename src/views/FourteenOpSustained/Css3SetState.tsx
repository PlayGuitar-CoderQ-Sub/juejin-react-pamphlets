import { useState } from 'react';
import React from 'react';
import './index.less';

export default function Index() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const changePosition = () => {
    console.log('123');

    let time = 0;
    const timer = setInterval(() => {
      //@ts-ignore
      if (time === 30) clearInterval(timer);
      setPosition({ left: time * 10, top: time * 10 });
      time++;
    }, 30);
  };
  const { left, top } = position;
  return (
    <div>
      <button onClick={() => changePosition()}>改变位置</button>
      <div
        className="current"
        style={{ transform: `translate(${left}px,${top}px )` }}
      ></div>
    </div>
  );
}
