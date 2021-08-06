import type { FC } from 'react';
import React, { useEffect, createContext } from 'react';
import TestContext from '@/components/TestContext';

interface TokenContextParam {
  token: string;
}

export const TokenContext = createContext<TokenContextParam>({ token: '' });

const timePromise = () => {
  return new Promise((resolve, reject) => {
    try {
      let count = 0;
      setTimeout(() => {
        count += 10;
        resolve(count);
      }, 3000);
    } catch (err) {
      reject(err);
    }
  });
};

const HooksTest: FC = () => {
  useEffect(() => {
    const getCount = async () => {
      const count = await timePromise();
      console.log('count', count);
    };
    getCount();
  }, []);

  return (
    <div>
      <h1>HooksTest</h1>
      <TokenContext.Provider value={{ token: 'kjn22kj1n2k31' }}>
        <TestContext />
      </TokenContext.Provider>
    </div>
  );
};

export default HooksTest;
