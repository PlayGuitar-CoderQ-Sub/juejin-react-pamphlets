import React, { useContext } from 'react';

import type { FC } from 'react';

import { CounteContext } from '@/views/dashboard';

const Tabs: FC = () => {
  const { count } = useContext(CounteContext);
  return <div>Tabs, {count}</div>;
};

export default Tabs;
