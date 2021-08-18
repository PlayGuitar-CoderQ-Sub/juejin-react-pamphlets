import React from 'react';
import { useEffect } from 'react';
const toLearn = [
  { type: 1, mes: 'let us learn React' },
  { type: 2, mes: 'let us learn Vue3.0' },
];
const Index = ({ id }) => {
  const typeInfo = React.useRef(toLearn[0]);
  const changeType = (info) => {
    console.log(info);
    typeInfo.current = info;
  };

  useEffect(() => {
    if (typeInfo.current.type === 1) {
      console.log(typeInfo.current.type);
    }
  }, [id]);

  return (
    <div>
      {toLearn.map((item) => (
        <button key={item.type} onClick={changeType.bind(null, item)}>
          {item.mes}
        </button>
      ))}
    </div>
  );
};

export default Index;
