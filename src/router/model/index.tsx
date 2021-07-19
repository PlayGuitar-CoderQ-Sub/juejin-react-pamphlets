import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';

import DashboradPage from '@/views/dashboard';
import Chart from '@/views/Chart';
import MimicryPage from '@/views/Mimicry';

export const Dashbord: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<DashboradPage />} />,
  },
  {
    path: 'chart',
    element: <Route element={<Chart />} />,
  },
  {
    path: 'mimicry',
    element: <Route element={<MimicryPage />} />,
  },
];

export const routeList = [...Dashbord];
