import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';

import IndexPage from '@/views';

// 第二章：认识jsx
import TwoJsx from '@/views/TwoJsx';
// 第五章 深入props
import FiveProps from '@/views/FiveProps';
import SixLifeCycle from '@/views/SixLifeCycle';

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
    ],
  },
];
