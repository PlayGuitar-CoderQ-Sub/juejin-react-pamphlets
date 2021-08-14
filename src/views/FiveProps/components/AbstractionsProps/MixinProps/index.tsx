import type { FC } from 'react';
import React from 'react';

interface DataProps {
  mes?: string;
  name: string;
  age: string;
}

const Son: FC<DataProps> = (props) => {
  console.log('混入props', props);
  return <div style={{ border: '3px solid pink' }}>hello, world</div>;
};

const Father: FC<DataProps> = (props) => {
  const fatherProps = {
    mes: 'let us learn React !',
  };

  return <Son {...props} {...fatherProps} />;
};

const Index: FC = () => {
  const indexProps = {
    name: 'alien',
    age: '28',
  };

  return <Father {...indexProps} />;
};

export default Index;
