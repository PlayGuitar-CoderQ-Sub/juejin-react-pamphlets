import type { FC } from 'react';

import React from 'react';

import CacheElemet from './cacheElemet';
import FnCacleElemet from './FnCacheElement';
import PureComponent from './PureComponent';
import ErrorPureComponent from './errorPureComponent';
import MemoElementComponent from './MemoElemet';

const ElevenRender: FC = () => {
  return (
    <div>
      <h1>缓存React.Element</h1>
      <CacheElemet />
      <h1>函数式组件达到缓存效果</h1>
      <FnCacleElemet />
      <h1>PureComponent组件</h1>
      <PureComponent />
      <h1>PureComponent失效</h1>
      <ErrorPureComponent />
      <h1>MemoElementComponent</h1>
      <MemoElementComponent />
    </div>
  );
};

export default ElevenRender;
