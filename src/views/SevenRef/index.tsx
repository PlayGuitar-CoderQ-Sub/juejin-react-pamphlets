import type { FC } from 'react';
import React from 'react';

// 字符串ref获取，类组件实例
import ClassRefCp from './components/classRefsStr';
// 函数ref获取，类组件实例
import ClassRefFn from './components/classRefFn';
// createRef获取组件实例
import ClassCreateRef from './components/classCreateRef';
// 通过forwardRef 转发Ref
import ForwardRef from './components/forwardRef';
// 合并转发ref
import RetweetsRef from './components/RetweetsRef';
// 高阶组件转发
import RetweetsHoc from './components/RetweetsHoc';
// ref实现组件通信
import CommunicationRef from './components/CommunicationRef';
// 函数组件 forwardRef + useImperativeHandle 通信
import HooksCommRef from './components/hooksCommRef';
// 函数组件缓存数据
import FnComCacheData from './components/FnComCacheData';

const SevenRef: FC = () => {
  return (
    <div>
      <h2> 字符串ref获取，类组件实例,看打印</h2>
      <ClassRefCp />
      <h2> 函数ref获取，类组件实例,看打印</h2>
      <ClassRefFn />
      <h2>createRef获取组件实例,看打印</h2>
      <ClassCreateRef />
      <h2>通过forwardRef 转发Ref, 看打印</h2>
      <ForwardRef />
      <h2>合并转发ref, 看打印</h2>
      <RetweetsRef />
      <h2>高阶组件转发, 看打印</h2>
      <RetweetsHoc />
      <h2>ref实现组件通信, 看打印</h2>
      <CommunicationRef />
      <h2>函数式组件</h2>
      <HooksCommRef />
      <h2>函数组件缓存数据</h2>
      <FnComCacheData id={2} />
    </div>
  );
};

export default SevenRef;
