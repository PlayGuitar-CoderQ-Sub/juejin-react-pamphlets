import React, { useRef } from 'react';

export default function Index() {
  const dom = useRef<HTMLDivElement>(null);
  const changeColor = () => {
    const target = dom.current;
    target!.style.background = '#c00';
    setTimeout(() => {
      (target!.style.background = 'orange'),
        setTimeout(() => {
          target!.style.background = 'yellowgreen';
        }, 500);
    }, 500);
  };
  return (
    <div>
      <button onClick={changeColor}>改变颜色</button>
      <div className="current" ref={dom}></div>
    </div>
  );
}
