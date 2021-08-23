import type { FC } from 'react';
import React from 'react';

// 已经废弃
import ProviderDemo from './OldContext';
// 新版本Context
import NewContext from './NewContext';
// context高阶用法
import HightProverDemo from './HigherOrderContext';
// 逐层传递Prodiver
import LayersProviderDemo from './LayersContext';

const EightContext: FC = () => {
  return (
    <div>
      <h2>新版本Context：</h2>
      <NewContext />
      <h2>Context高阶用法</h2>
      <HightProverDemo />
      <h2>逐层传递Prodiver</h2>
      <LayersProviderDemo />
    </div>
  );
};

export default EightContext;
