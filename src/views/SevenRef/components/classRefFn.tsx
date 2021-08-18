import React from 'react';

class Children extends React.Component {
  render = () => <div>hello, world</div>;
}

// TODO: Ref是一个字符串，⚠️官方已经弃用了this.refs
export default class Index extends React.Component {
  currentDom: HTMLDivElement | null = null;
  currentComponentInstance: Children | null = null;
  componentDidMount() {
    console.log('函数获取Ref', this.currentDom);
    console.log('函数获取Ref', this.currentComponentInstance);
  }
  render() {
    return (
      <div>
        <div ref={(node) => (this.currentDom = node)}>
          Ref模式获取元素或组件
        </div>
        <Children ref={(node) => (this.currentComponentInstance = node)} />
      </div>
    );
  }
}
