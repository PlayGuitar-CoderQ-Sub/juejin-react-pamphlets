import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RenderRouter } from '@/router';
import './App.less';

function App() {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  );
}

export default App;
