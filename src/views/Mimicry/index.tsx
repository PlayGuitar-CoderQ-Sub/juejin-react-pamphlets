import type { FC } from 'react';
import React from 'react';
import MimSwitch from './components/mim-switch';
import './index.less';

const MimicryPage: FC = () => {
  return (
    <div className="container">
      <div className="components">
        <MimSwitch />
      </div>
    </div>
  );
};

export default MimicryPage;
