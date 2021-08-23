import React, { createContext, useContext, useState } from 'react';

import './index.css';

interface ThemeContextProps {
  color: string;
  background: string;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

function Son2() {
  return (
    <ThemeContext.Consumer>
      {(themeContextValue) => {
        const { color, background } = themeContextValue!;
        return (
          <div className="sonbox" style={{ color, background }}>
            第二层Provider
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
const Son = () => {
  const ThemeSonContext = useContext<ThemeContextProps | null>(ThemeContext);
  const { color, background } = ThemeSonContext!;
  const [themeContextValue] = useState({
    color: '#fff',
    background: 'blue',
  });
  // 第二层传递内容
  return (
    <div className="box" style={{ color, background }}>
      第一层Provider
      <ThemeContext.Provider value={themeContextValue}>
        <Son2 />
      </ThemeContext.Provider>
    </div>
  );
};

export default function Provider1Demo() {
  const [themeContextValue] = React.useState({
    color: 'orange',
    background: 'pink',
  });
  /* 第一层  Provider 传递内容  */
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Son />
    </ThemeContext.Provider>
  );
}
