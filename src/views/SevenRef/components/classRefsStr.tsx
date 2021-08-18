import React from 'react';

class Children extends React.Component {
  render = () => <div>hello, world</div>;
}

// TODO: Ref是一个字符串，⚠️官方已经弃用了this.refs
export default class Index extends React.Component {
  componentDidMount() {
    console.log('字符串获取Ref', this.refs);
  }
  render() {
    return (
      <div>
        <div ref={'currentDom'}>字符串模式获取元素组件</div>
        <Children ref={'currentComInstance'} />
      </div>
    );
  }
}
