import type { FC } from 'react';
import React from 'react';

interface CallbackPros {
  onClick: () => void;
  name: string;
}

const CallbackSon: FC<CallbackPros> = (props) => {
  console.log('子组件渲染');
  return (
    <div>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </div>
  );
};

export default CallbackSon;
