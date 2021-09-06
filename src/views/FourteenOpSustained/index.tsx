import type { FC } from 'react';

import React from 'react';

import Debounce from './Debounce';
import Throttle from './Throttle';
import Animation from './Animation';
import ControlDom from './ControlDom';
import Css3SetState from './Css3SetState';

const FourteenOpSustained: FC = () => {
  return (
    <div>
      <span>防抖</span>
      <Debounce />
      <span>节流</span>
      <Throttle />
      <span>动画</span>
      <Animation />
      <span>操作dom</span>
      <ControlDom />
      <span>利用gpu渲染</span>
      <Css3SetState />
    </div>
  );
};

export default FourteenOpSustained;
