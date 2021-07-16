import React, {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
} from 'react';
import type { FC, Context } from 'react';

import Tabbar from '@/components/Tabbar';
import Tabs from '@/components/Tabs';
import MimicryButton from '@/components/Button';

export const CounteContext: Context<any> = createContext('Count');

const Dashborad: FC = () => {
  const [count, setCount] = useState(10);
  const [titles, setTitles] = useState('测试');

  useLayoutEffect(() => {
    console.log('打印3');
    document.title = '现在是首页f';
  });

  useEffect(() => {
    console.log('打印1');

    return () => {
      console.log('打印2');
    };
  }, [count]);

  const onAddCount = () => {
    setCount(count + 1);
    setTitles(`${titles} qzj`);
  };

  return (
    <div>
      <h2>现在的得数是: {count}</h2>
      <button onClick={() => onAddCount()}>增加</button>
      <Tabbar />
      <CounteContext.Provider value={{ count: count }}>
        <Tabs />
        <MimicryButton title={titles} />
      </CounteContext.Provider>
    </div>
  );
};

export default Dashborad;
