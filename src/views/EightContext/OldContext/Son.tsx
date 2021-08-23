import React from 'react';

import propsTypes from 'proptypes';

//  消费者
class ConsumerDemo extends React.Component {
  contextTypes = {
    theme: propsTypes.object,
  };

  render() {
    console.log(this.context.theme);
    const { color, background } = this.context.theme;
    return <div style={{ color, background }}>消费者</div>;
  }
}

export default ConsumerDemo;
