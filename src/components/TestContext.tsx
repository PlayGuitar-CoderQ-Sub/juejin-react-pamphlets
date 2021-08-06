import type { FC } from 'react';
import React, { useContext, useReducer } from 'react';

import { TokenContext } from '@/views/HooksTest';

interface TokenContextParam {
  token: string;
}

const TestContext: FC = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, counter: state.counter + 1 };
      case 'decrement':
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { token } = useContext<TokenContextParam>(TokenContext);
  return (
    <div>
      <span>测试数据: {token}</span>
      <h2>当前技术规则: {state.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
};

export default TestContext;
