import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';
import Father from '@/views/Father';

export const FatherRoute: PartialRouteObject = {
  path: '/',
  element: <Route element={<Father />} />,
};

export const routeList = [FatherRoute];
