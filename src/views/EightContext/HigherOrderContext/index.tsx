import React, { createContext, memo, useState } from 'react';

interface ThemeContextProps {
  color: string;
  background: string;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);
const LanContext = createContext<string | null>(null);

const ConsumerDemo = () => {
  console.log(34);
  return (
    <ThemeContext.Consumer>
      {(themeContextValue) => (
        <LanContext.Consumer>
          {(lanContextValue) => {
            const { color, background } = themeContextValue!;
            return (
              <div style={{ color, background }}>
                {lanContextValue === 'CH'
                  ? '大家好，让我们一起学习React'
                  : 'Hello, let us learn React'}
              </div>
            );
          }}
        </LanContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

const Son = memo(() => {
  console.log(123);
  return (
    <div>
      <ConsumerDemo />
    </div>
  );
});

export default function ProviderDemo() {
  const [themeContextValue] = useState({ color: '#fff', background: 'blue' });
  const [lanContextValue, setLanContextValue] = useState('CH');
  return (
    <div>
      <ThemeContext.Provider value={themeContextValue}>
        <LanContext.Provider value={lanContextValue}>
          <Son />
        </LanContext.Provider>
      </ThemeContext.Provider>
      <button onClick={() => setLanContextValue('EN')}>改变语言</button>
    </div>
  );
}
