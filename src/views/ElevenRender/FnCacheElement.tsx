import React, { useMemo } from 'react';

function Children({ number }) {
  console.log('子组件渲染');
  return <div>let us learn React， {number}</div>;
}

export default function Index() {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);
  return (
    <div>
      {useMemo(
        () => (
          <Children number={numberA} />
        ),
        [numberA],
      )}
      <button onClick={() => setNumberA(numberA + 1)}>改变numberA</button>
      <button onClick={() => setNumberB(numberB + 1)}>改变numberB</button>
    </div>
  );
}
