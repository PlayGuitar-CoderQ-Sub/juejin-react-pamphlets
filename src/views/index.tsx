import type { FC } from 'react';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './index.css';

const Index: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ pathname: 'eleven_render' });
  }, []);

  const navigateRoute = (routeName: string) => {
    navigate({ pathname: routeName });
  };

  return (
    <div>
      <div className="header-index">
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
        <div
          className="title-box bg-cyan"
          onClick={() => navigateRoute('six_lifeCycle')}
        >
          第六章：理解生命周期
        </div>

        <div
          className="title-box bg-orange"
          onClick={() => navigateRoute('seven_ref')}
        >
          第七章：多功能Ref
        </div>

        <div
          className="title-box bg-mediumGreen "
          onClick={() => navigateRoute('eight_context')}
        >
          第八章：提供者context
        </div>

        <div
          className="title-box bg-blue_s"
          onClick={() => navigateRoute('eight_context')}
        >
          第九章： css模块
        </div>

        <div
          className="title-box bg-lightcoral"
          onClick={() => navigateRoute('ten_hoc')}
        >
          第十章： 高阶组件
        </div>

        <div
          className="title-box bg-gord"
          onClick={() => navigateRoute('eleven_render')}
        >
          第十一章： 渲染控制
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
