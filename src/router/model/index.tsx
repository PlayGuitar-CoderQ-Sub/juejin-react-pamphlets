import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';
import TestApi from '@/views/TestApi';

export const Dashbord: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<TestApi />} />,
  },
];

export const routeList = [...Dashbord];
