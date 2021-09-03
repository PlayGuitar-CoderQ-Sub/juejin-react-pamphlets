import type { FC } from 'react';

import React from 'react';

import ColorComponent from './ColorComponent';
import GoodColorComponent from './GoodColorComponent';
import VirtualList from './VirtualList';

const ThirteenData: FC = () => {
  return (
    <div>
      <span>时间分片：色块组件 (坏的例子)</span>
      <ColorComponent />
      <span>时间分片：色块组件 (改良之后的例子)</span>
      <GoodColorComponent />
      <span>虚拟列表</span>
      <VirtualList />
    </div>
  );
};

export default ThirteenData;
