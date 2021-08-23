import React from 'react';

// 测试父组件是否多余渲染子组件
export default () => {
  console.log('测试的子组件进行渲染');
  return <div>测试的子组件</div>;
};
