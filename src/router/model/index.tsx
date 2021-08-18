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
    ],
  },
];
