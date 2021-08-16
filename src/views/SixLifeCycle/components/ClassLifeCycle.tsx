import React from 'react';

interface IndexState {
  name: string;
  type: string;
  list: any[];
}

// 防抖函数
function debounce(fn: Function, delay: number) {
  let timerId: NodeJS.Timeout;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      //@ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * @description 生命周期
 * @constructor 初始化state，可以用于截取路由中的参数, 赋值给state
 * 对类组件的事件做一些处理，比如绑定this，节流，防抖
 * 对类组件进行一些必要的生命周期的劫持，渲染劫持，这个功能更适合反向继承的HOC，在HOC环节，会详细讲解反向继承模式这种模式
 * @getDerivedStateFromProps 代替componentWillMount 和 componentWillReceiveProps
 * 组件初始化或者更新时，讲props映射到state。
 * 返回值的state合并完，可以作为shouldComponentUpdate 第二个参数newState，可以判断是否渲染组件
 * (请不要把 getDerivedStateFromProps 和 shouldComponentUpdate 强行关联到一起，两者没有必然联系)
 * @componentWillMount 做一些初始化操作 (⚠️但是官方已经不推荐在这个生命周期使用)
 * @UNSAFE_componentWillMount 做一些初始化操作 (⚠️但是官方已经不推荐在这个生命周期使用)
 * @componentWillReceiveProps 所以可以在异步成功回调(接口请求数据)改变 state 。这个是 getDerivedStateFromProps 不能实现的。
 * (⚠️但是官方已经不推荐在这个生命周期使用)
 * @UNSAFE_componentWillReceiveProps 所以可以在异步成功回调(接口请求数据)改变 state 。这个是 getDerivedStateFromProps 不能实现的。
 * (⚠️但是官方已经不推荐在这个生命周期使用)
 * @render 那么可以在render里面做一些,createElement创建元素 , cloneElement 克隆元素 ，React.children 遍历 children
 * @getSnapshotBeforeUpdate 获取更新前 DOM 的状态, 将返回一个值作为一个snapShot(快照)，传递给 componentDidUpdate作为第三个参数
 * getSnapshotBeforeUpdate 这个生命周期意义就是配合componentDidUpdate 一起使用，计算形成一个 snapShot 传递给 componentDidUpdate 。保存一次更新前的信息。
 * @componentDidUpdate componentDidUpdate 生命周期执行，此时 DOM 已经更新，可以直接获取 DOM 最新状态。
 * 这个函数里面如果想要使用 setState ，一定要加以限制，否则会引起无限循环。
 * @componentDidMount 此时 DOM 已经创建完，既然 DOM 已经创建挂载，就可以做一些基于 DOM 操作，DOM 事件监听器。
 * 可以做一些关于 DOM 操作，比如基于 DOM 的事件监听器。对于初始化向服务器请求数据，渲染视图，这个生命周期也是蛮合适的。
 * @shouldComponentUpdate 这个生命周期，一般用于性能优化，shouldComponentUpdate 返回值决定是否重新渲染的类组件。
 * 需要重点关注的是第二个参数 newState ，如果有 getDerivedStateFromProps 生命周期 ，它的返回值将合并到 newState ，
 * 供 shouldComponentUpdate 使用。
 * @componentWillUnmount componentWillUnmount 是组件销毁阶段唯一执行的生命周期，主要做一些收尾工作，
 * 比如清除一些可能造成内存泄漏的定时器，延时器，或者是一些事件监听器。
 */
class ClassLifeCycle extends React.Component<any, IndexState> {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      name: 'alien',
      type: 'success',
      list: [],
    };
    // 防抖
    this.handleClick = debounce(this.handleClick, 500);
    // const _render = this.render;
    // // @ts-ignore
    // this.render = function () {
    //   return _render.bind(this); // 劫持修改类组件的生命周期
    // };
  }
  node: HTMLDivElement | null = null;

  // 初始化渲染
  async componentDidMount() {
    this.node!.addEventListener('click', () => {
      console.log('监听点击事件');
    });
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<IndexState>,
    snapshot?: any,
  ) {
    const style = getComputedStyle(this.node!);
    const newPosition = {
      cx: style.overflowX,
      cy: style.overflowY,
    };
    console.log(newPosition);
    console.log(prevProps, prevState, snapshot);
  }

  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<IndexState>,
    nextContext: any,
  ): boolean {
    console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
    return true;
  }

  componentWillUnmount() {
    console.log('卸载生命周期');
    this.node?.removeEventListener('click', this.handleClick);
  }

  static getDerivedStateFromProps(newProps) {
    const { type } = newProps;
    console.log('type', type);
    switch (type) {
      case 'fruit':
        return { list: ['苹果', '香蕉', '葡萄'] };
      case 'vegetables':
        return { list: ['菠菜', '西红柿', '土豆'] };
      default:
        break;
    }
  }

  // 点击事件
  handleClick() {
    console.log('点击事件handleClick', this);
    this.setState({
      name: 'coderQ',
    });
  }

  render() {
    return (
      <div
        style={{ width: '200px', border: '2px solid blue' }}
        onClick={() => this.handleClick()}
      >
        {this.state.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <div
          onClick={() => this.handleClick()}
          ref={(node) => (this.node = node)}
        >
          获取位置
        </div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
export default ClassLifeCycle;
