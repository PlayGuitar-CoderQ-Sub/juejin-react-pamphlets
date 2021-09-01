import React, { Suspense } from 'react';

/**
 *
 * @param {*} Component  需要异步数据的component
 * @param {*} api        请求数据接口,返回Promise，可以再then中获取与后端交互的数据
 * @returns
 */
function AsyncComponent(Component, api) {
  const AysncComponentPromise = (): Promise<any> =>
    new Promise(async (resolve) => {
      const data = await api();
      resolve({
        default: (props) => <Component rdata={data} {...props} />,
      });
    });
  return React.lazy(AysncComponentPromise);
}

// 数据模拟
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'alien',
        say: 'let us learn React',
      });
    }, 4000);
  });
};

// 测试异步组件
function Test({ rdata, age }) {
  const { name, say } = rdata;
  console.log('组件渲染');
  return (
    <div>
      <div>hello, my name is {name}</div>
      <div>age: {age}</div>
      <div>i want to say {say}</div>
    </div>
  );
}

// 父组件
export default class Index extends React.Component {
  LazyTest = AsyncComponent(Test, getData);
  render() {
    const { LazyTest } = this;
    return (
      <div>
        <Suspense fallback={<div>Loading....</div>}>
          <LazyTest age={18} />
        </Suspense>
      </div>
    );
  }
}
