import type { FC } from 'react';
import React from 'react';

interface SonProps {
  fatherSay: string;
  sayFather: (string) => void;
}

const Son: FC<SonProps> = (props) => {
  const { fatherSay, sayFather } = props;
  return (
    <div>
      <h1>我是子组件</h1>
      <div>父组件对我说： {fatherSay}</div>
      <input
        type="text"
        placeholder="我对父组件说"
        onChange={(e) => sayFather(e.target.value)}
      />
    </div>
  );
};

export default Son;
