import type { FC } from 'react';

import React from 'react';

import { useMockTime } from './hooks/example';

const SixTeenTimeSect: FC = () => {
  useMockTime();
  return (
    <div>
      <span>模拟4毫秒场景</span>
    </div>
  );
};

export default SixTeenTimeSect;
