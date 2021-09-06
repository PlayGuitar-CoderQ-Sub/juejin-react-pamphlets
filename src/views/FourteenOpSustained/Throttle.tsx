import React from 'react';

export function throttle(fn, time) {
  let previous = 0;
  return function (...arg) {
    const now = +new Date();
    if (now - previous > time) {
      previous = now;
      //@ts-ignore
      fn.apply(this, arg);
    }
  };
}

export default function Index() {
  const handleScroll = React.useCallback(
    throttle(() => {}, 300),
    [],
  );
  return (
    <div className="scrollIndex" onScroll={handleScroll}>
      <div className="scrollContent">hello, world</div>
    </div>
  );
}
