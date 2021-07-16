import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';

import DashboradPage from '@/views/dashboard';

export const Dashbord: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<DashboradPage />} />,
  },
];

export const routeList = [...Dashbord];
