import React, { FC, LegacyRef } from 'react';

interface SonProps {
  grandRef?: LegacyRef<HTMLSpanElement>;
}

// 孙组件
const Son: FC<SonProps> = (props) => {
  const { grandRef } = props;
  return (
    <div>
      <div>I am alien</div>
      <span ref={grandRef}></span>
    </div>
  );
};

// 父组件
class Father extends React.Component<SonProps, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Son grandRef={this.props.grandRef} />
      </div>
    );
  }
}

const NewFather = React.forwardRef<HTMLSpanElement>((props, ref) => (
  <Father grandRef={ref} {...props} />
));

// 爷组件
class GrandFather extends React.Component {
  constructor(props) {
    super(props);
  }
  node: HTMLSpanElement | null = null;
  componentDidMount() {
    console.log('使用forwardRef透传获取Ref', this.node); // span #text 这个是想要获取的元素
  }
  render() {
    return (
      <div>
        <NewFather ref={(node) => (this.node = node)} />
      </div>
    );
  }
}

export default GrandFather;
