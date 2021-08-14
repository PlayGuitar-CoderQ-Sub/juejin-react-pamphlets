import type { FC, ReactElement } from 'react';
import React from 'react';

interface DataProps {
  name: string;
  age: string;
}

const Son: FC<DataProps> = (props) => {
  console.log('显示注入props', props);
  return <div style={{ border: '3px solid pink' }}>hello, world</div>;
};

const Father: FC<{ children: ReactElement }> = ({ children }) => {
  return children;
};

const Index: FC = () => {
  return (
    <Father>
      <Son name="alien" age="28"></Son>
    </Father>
  );
};

export default Index;
