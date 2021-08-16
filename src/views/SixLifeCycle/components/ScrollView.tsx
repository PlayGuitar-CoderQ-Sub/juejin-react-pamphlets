import React, { FC, ComponentClass } from 'react';
import { ItemProps } from './ItemList';
import './scrollView.less';

type reactHtml =
  | FC<{ item: ItemProps; key?: any }>
  | ComponentClass<{ item: ItemProps; key?: any }, any>;

interface ScrollViewProps {
  scrollToLower: () => void;
  scroll: (e: any) => void;
  data: ScrollData;
  component: reactHtml;
}

export interface ScrollData {
  list: ItemProps[];
  page: number;
  pageCount: number;
  code?: number;
  message?: string;
}

interface ScrollState {
  list: ItemProps[];
}

function debounce(fn: Function, delay) {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      //@ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}

class ScrollView extends React.Component<ScrollViewProps, ScrollState> {
  /*生命周期*/
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handerScrollToLower = debounce(this.handerScrollToLower, 200);
  }

  static getDerivedStateFromProps(newProps: ScrollViewProps) {
    const { data } = newProps;
    console.log('data', data.list);
    return {
      list: data.list || [],
    };
  }

  // 性能优化，只有列表数据变化，渲染列表
  shouldComponentUpdate(_, newState: Readonly<ScrollState>): boolean {
    return newState.list !== this.state.list;
  }

  /*获取更新前容器高度*/
  getSnapshotBeforeUpdate(): any {
    return this.node!.scrollHeight;
  }

  /*获取更新后容器高度*/
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, 'snapshot', snapshot);
    console.log(
      'scrollView容器高度变化:',
      this.node && this.node.scrollHeight - snapshot,
    );
  }

  /*绑定事件监听器 - 监听scroll事件*/
  componentDidMount() {
    this.node && this.node.addEventListener('scroll', this.handerScroll);
  }

  /*解绑事件监听器*/
  componentWillUnmount() {
    this.node && this.node.removeEventListener('scroll', this.handerScroll);
  }

  /*自定义事件*/
  /*控制滚动条滚动*/
  handerScroll = (e) => {
    const { scroll } = this.props;
    scroll && scroll(e);
    this.handerScrollToLower();
  };

  /*判断滚动条是否到底部*/
  handerScrollToLower() {
    const { scrollToLower } = this.props;

    const { scrollHeight, scrollTop, offsetHeight } = this.node!;
    console.log('scrollToLower', scrollHeight, scrollTop, offsetHeight);
    if (scrollHeight <= scrollTop + offsetHeight) {
      scrollToLower && scrollToLower();
    }
  }
  node: HTMLDivElement | null = null;

  handlerClick() {
    console.log(this.state);
  }

  render() {
    const { list } = this.state;
    const { component } = this.props;
    return (
      <div className="list_box" ref={(node) => (this.node = node)}>
        <div>
          {list.map(
            (item) => React.createElement(component, { item, key: item.id }), //渲染 Item 列表内容。
          )}
        </div>
      </div>
    );
  }
}

export default ScrollView;
