import type { FC } from 'react';
import React from 'react';

interface DataProps {
  mes: string;
  name: string;
  age?: string;
}

const Son: FC<DataProps> = (props) => {
  console.log('抽离props：', props);
  return <div style={{ border: '3px solid pink' }}>hello, world</div>;
};

const Father: FC<DataProps> = (props) => {
  const { age, ...fatherProps } = props;

  return <Son {...fatherProps} />;
};

const Index: FC = () => {
  const indexProps = {
    name: 'alien',
    age: '28',
    mes: 'let us leran React!',
  };

  return <Father {...indexProps} />;
};

export default Index;
