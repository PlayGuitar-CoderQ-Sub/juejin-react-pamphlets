import type { FC, ReactElement } from 'react';
import React from 'react';

interface DataProps {
  name: string;
  age: string;
}

const Son: FC<DataProps> = (props) => {
  console.log('隐注入props', props);
  return <div style={{ border: '3px solid pink' }}>hello, world</div>;
};

const Father: FC<{ children: ReactElement }> = (props) => {
  return React.cloneElement(props.children, { mes: 'let us learn React!' });
};

const Index: FC = () => {
  return (
    <Father>
      <Son name="alien" age="28"></Son>
    </Father>
  );
};

export default Index;
