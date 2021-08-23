import React from 'react';

// 提供者
import propsTypes from 'proptypes';
import Son from './Son';

class ProviderDemo extends React.Component {
  childContextTypes = {
    theme: propsTypes.object,
  };

  getChildContext() {
    const theme = {
      // 提供者要提供的主题颜色，供消费者消费
      color: '#ccc',
      background: 'pink',
    };
    return { theme };
  }
  render() {
    return (
      <div>
        hello, let us learn React!
        <Son />
      </div>
    );
  }
}

export default ProviderDemo;
