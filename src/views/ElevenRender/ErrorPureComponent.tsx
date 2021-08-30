import React from 'react';

class Index extends React.PureComponent {
  render() {
    return <span>子组件</span>;
  }
}

export default class Father extends React.Component {
  render = () => <Index callback={() => {}} />;
}
