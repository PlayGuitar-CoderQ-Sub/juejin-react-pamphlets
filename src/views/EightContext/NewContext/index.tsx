import React, { createContext, useState, useContext, useMemo } from 'react';

// 测试子组件
import TestSon from '../TestSon';

// 订阅者
import SonConsumer from './Consumer';

// 新版本提供者
export const ThemeContext = createContext<State | null>(null);
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

interface State {
  color: string;
  background: string;
}

// 类组件方式
class ConsumerDemo extends React.Component {
  render() {
    const { color, background } = this.context;
    return <div style={{ color, background }}>消费者</div>;
  }
}

// 订阅者模式
const ConcumerDemo = (props) => {
  const { color, background } = props;
  return (
    <div style={{ color, background }}>
      消费者 <TestSon />
    </div>
  );
};

const ConcumerDemoSon = () => {
  return (
    <>
      <ThemeConsumer>
        {(contextValue) => <ConcumerDemo {...contextValue} />}
      </ThemeConsumer>
      ;
    </>
  );
};

ConsumerDemo.contextType = ThemeContext;

const Son = React.memo(() => <ConsumerDemo />);

// 函数式组件方式
const ConsumerFnDemo = () => {
  const contextValue = useContext<State | null>(ThemeContext);
  const { color, background } = contextValue!;
  return <div style={{ color, background }}>消费者</div>;
};

const MemoConsumerFnDemo = React.memo(() => <ConsumerFnDemo />);

export default () => {
  const [contextValue, setContextValue] = useState({
    color: '#ccc',
    background: 'pink',
  });

  return (
    <div>
      <h2>类组件：</h2>
      <ThemeProvider value={contextValue as State & null}>
        <Son />
      </ThemeProvider>
      <h2>函数式组件: </h2>
      <ThemeProvider value={contextValue as State & null}>
        <MemoConsumerFnDemo />
      </ThemeProvider>
      <h2>订阅者模式: </h2>
      <ThemeProvider value={contextValue as State & null}>
        <ConcumerDemoSon />
      </ThemeProvider>
      <button
        onClick={() => setContextValue({ color: '#fff', background: 'blue' })}
      >
        切换主题
      </button>
    </div>
  );
};
