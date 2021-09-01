import type { FC } from 'react';

import React from 'react';

import AsyncRender from './asyncRender';
import LazyComponent from './lazyComponent';
import ErrorComponent from './componentDidCatch';
import Practice from './Practice';

const TwelveOptimizes: FC = () => {
  return (
    <div>
      <h1>异步渲染组件: (待更新)</h1>
      <AsyncRender />
      <h1>动态加载组件: (懒加载)</h1>
      <LazyComponent />
      <h1>渲染错误边界: </h1>
      <ErrorComponent />
      <h1>实例: </h1>
      <Practice />
    </div>
  );
};

export default TwelveOptimizes;
