/**
 * @description workLoop React 处理类组件的主要功能方法
 * @instance: 类组件对应的实例。
 * @workInProgress: 树， 当前正在调和的fiber树，一次更新中，React会自上而下的深度遍历子代fiber。
 * 遍历一个fiber会把当前的fiber指向workInProgress。
 * @current: 数， 初始化更新中， current = null 在第一次fiber调和之后，会将workInProgress树赋值给current树。
 * React使用workInProgress和current来确保一次更新中，快速构建切状态不丢失。
 * @Component 就是项目中的class组件
 * @nextProps 作为组件在一次更新中新的props
 * @renderExpirationTime 作为下一次渲染的过期时间。
 */

/* function updateClassComponent() {
    let shouldUpdate
    const instance = workInProgress.stateNode // stateNode 是 fiber 指向 类组件实例的指针。
    if (instance === null) { // instance 为组件实例,如果组件实例不存在，证明该类组件没有被挂载过，那么会走初始化流程
        constructClassInstance(workInProgress, Component, nextProps); // 组件实例将在这个方法中被new。
        mountClassInstance(  workInProgress,Component, nextProps,renderExpirationTime ); //初始化挂载组件流程
        shouldUpdate = true // shouldUpdate 标识来证明 组件是否需要更新
    } else {
      shouldUpdate = updateClassInstance(current, workInProgress, Component, nextProps, renderExpirationTime) // 更新组件流程
    }
    if (shouldUpdate) {
      nextChildren = instance.render(); // 执行render函数，得到子节点
      reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime) // 继续调和子节点
    }
  }
} */
import React from 'react';
import ClassLifeCycle from './components/ClassLifeCycle';
import FnLifeCycle from './components/FnLifeCycle';
import ScrollExamples from './components/ItemList';
import './index.less';

const SixLifeCycle = () => {
  return (
    <div>
      <h2>类组件生命周期：（详情请看console打印）</h2>
      <ClassLifeCycle type={'vegetables'} />
      <hr />
      <h2>函数式组件生命周期：（详情请看console打印）</h2>
      <FnLifeCycle />
      <hr />
      <h2>scrollView组件演示</h2>
      <ScrollExamples />
    </div>
  );
};

export default SixLifeCycle;
