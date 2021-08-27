import type { FC, FunctionComponent, ReactElement } from 'react';

import React from 'react';

import ClickHoc from './ClickHoc';

// 属性代理
function Hoc(WrapComponent) {
  return class Advance extends React.Component {
    state = {
      name: 'alien',
    };
    render() {
      return <WrapComponent {...this.props} {...this.state} />;
    }
  };
}

// Ref获取实例
function HocGetExamples(Component: React.ReactNode) {
  return class WrapComponent extends React.Component {
    constructor(props) {
      super(props);
      this.node = null as React.ReactNode;
    }
    render() {
      return <Component {...this.props} ref={(node) => (this.node = node)} />;
    }
  };
}

// 反向继承
class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>Angular</li>
        </ul>
      </div>
    );
  }
}

// 修改渲染树
function HocTree(Component) {
  return class Advance extends Component {
    render() {
      const element = super.render();
      const otherProps = {
        name: 'alien',
      };

      // 替换angular元素节点
      const appendElement = React.createElement(
        'li',
        {},
        `hello, world, my name is ${otherProps.name}`,
      );
      const newChild = React.Children.map(
        element.props.children.props.children,
        (child, index) => {
          if (index === 2) return appendElement;
          return child;
        },
      );
      return React.cloneElement(element, element.props, newChild);
    }
  };
}

const NewHocTree = HocTree(Index);

const Test = () => {
  return <div>12312</div>;
};

const NewTest = Hoc(Test);

const TenHoc: FC = () => {
  return (
    <div>
      <span>TenHoc</span>
      <h2>属性代理</h2>
      <NewTest />
      <h2>修改渲染树</h2>
      <NewHocTree />
      <h2>监听组件</h2>
      <ClickHoc />
    </div>
  );
};

export default TenHoc;
