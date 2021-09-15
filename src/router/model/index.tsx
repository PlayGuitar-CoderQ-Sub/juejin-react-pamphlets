import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';

import IndexPage from '@/views';

// 第二章：认识jsx
import TwoJsx from '@/views/TwoJsx';
// 第五章 深入props
import FiveProps from '@/views/FiveProps';
// 第六章 理解lifecycle 生命周期
import SixLifeCycle from '@/views/SixLifeCycle';
// 第七章 多功能Ref
import SevenRef from '@/views/SevenRef';
// 第八章 提供者Context
import EightContext from '@/views/EightContext';
// 第九章 css模块化
import NineCssModule from '@/views/NineCssModule';
// 第十章 高阶组件模块
import TenHoc from '@/views/TenHoc';
// 第十一章 渲染控制
import ElevenRender from '@/views/ElevenRender';
// 第十二章 渲染调优
import TwelveOptimizes from '@/views/TwelveOptimizes';
// 第十三章 处理海量数据
import ThirteenData from '@/views/ThirteenData';
// 第十四章 细节处理
import FourteenOpSustained from '@/views/FourteenOpSustained';
// 第十五章 事件处理
import FifteenEvent from '@/views/FifteenEvent';
// 第十六章 调度与时间片
import SixTeenTimeSect from '@/views/SixteenTimeSect';
// 第十七章 调和与Fibe
import SeventeenFibe from '@/views/SeventeenthFibe';

export const routeList: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<IndexPage />} />,
    children: [
      {
        path: '/two_jsx',
        element: <Route element={<TwoJsx />} />,
      },
      {
        path: '/five_props',
        element: <Route element={<FiveProps />} />,
      },
      {
        path: '/six_lifeCycle',
        element: <Route element={<SixLifeCycle />} />,
      },
      {
        path: 'seven_ref',
        element: <Route element={<SevenRef />} />,
      },
      {
        path: 'eight_context',
        element: <Route element={<EightContext />} />,
      },
      {
        path: 'nine_css',
        element: <Route element={<NineCssModule />} />,
      },
      {
        path: 'ten_hoc',
        element: <Route element={<TenHoc />} />,
      },
      {
        path: 'eleven_render',
        element: <Route element={<ElevenRender />} />,
      },
      {
        path: 'twelve_optimize',
        element: <Route element={<TwelveOptimizes />} />,
      },
      {
        path: 'thirteen_data',
        element: <Route element={<ThirteenData />} />,
      },
      {
        path: 'fourteen_opt',
        element: <Route element={<FourteenOpSustained />} />,
      },
      {
        path: 'fifteen_event',
        element: <Route element={<FifteenEvent />} />,
      },
      {
        path: 'sixTeen_timeSect',
        element: <Route element={<SixTeenTimeSect />} />,
      },
      {
        path: 'seventeen_fibe',
        element: <Route element={<SeventeenFibe />} />,
      },
    ],
  },
];
