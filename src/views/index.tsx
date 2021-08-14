import type { FC } from 'react';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './index.css';

const Index: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ pathname: 'five_props' });
  }, []);

  const navigateRoute = (routeName: string) => {
    navigate({ pathname: routeName });
  };

  return (
    <div>
      <div className="five-index">
        <div
          className="title-box bg-blue"
          onClick={() => navigateRoute('two_jsx')}
        >
          第二章：认识jsx
        </div>
        <div className="title-box bg-red">第三章：起源Component</div>
        <div className="title-box bg-purple">第四章：玄学state</div>
        <div
          className="title-box bg-green"
          onClick={() => navigateRoute('five_props')}
        >
          第五章：深入props
        </div>
      </div>

      <div className="dashboard">
        <div style={{ marginBottom: '50px' }}>显示区：</div>
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
