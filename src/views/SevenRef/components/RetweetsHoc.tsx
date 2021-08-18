import React from 'react';
import { useEffect, useRef } from 'react';

interface HocProps {
  forwardedRef: any;
}

function HOC(Component) {
  class Wrap extends React.Component<HocProps, any> {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <Wrap forwardedRef={ref} {...props} />
  ));
}

class Index extends React.Component {
  render() {
    return <div>hello, world</div>;
  }
}

const HocIndex = HOC(Index);
export default () => {
  const node = useRef(null);
  useEffect(() => {
    console.log('高阶组件转发', node.current);
  }, []);
  return (
    <div>
      <HocIndex ref={node} />
    </div>
  );
};
