import type { FC } from 'react';
import React, { useState } from 'react';

import Son from '@/components/Son';

const Father: FC = () => {
  const [childSay, setChildSay] = useState('');
  const [fatherSay, setFatherSay] = useState('');

  return (
    <div>
      <h1>我是父组件</h1>
      <div>子组件对我说： {childSay}</div>
      <input
        type="text"
        placeholder="我对子组件说"
        onChange={(e) => setFatherSay(e.target.value)}
      />
      <hr />
      <Son fatherSay={fatherSay} sayFather={setChildSay} />
      <hr />
    </div>
  );
};

export default Father;
