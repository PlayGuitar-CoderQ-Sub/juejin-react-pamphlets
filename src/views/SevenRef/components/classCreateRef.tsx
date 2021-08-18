import React, { createRef } from 'react';

class Children extends React.Component {
  render = () => <div>hello, world</div>;
}

// TODO: Ref是一个字符串，⚠️官方已经弃用了this.refs
export default class Index extends React.Component {
  currentDom = createRef<HTMLDivElement>();
  currentComponentInstance = createRef<Children>();
  componentDidMount() {
    console.log('使用createRef获取Ref', this.currentDom);
    console.log('使用createRef获取Ref', this.currentComponentInstance);
  }
  render() {
    return (
      <div>
        <div ref={this.currentDom}>Ref模式获取元素或组件</div>
        <Children ref={this.currentComponentInstance} />
      </div>
    );
  }
}
