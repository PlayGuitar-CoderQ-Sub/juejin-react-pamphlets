import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';
import Father from '@/views/Father';
import EventBusFather from '@/views/EventBusFather';

export const FatherRoute: PartialRouteObject = {
  path: '/',
  element: <Route element={<Father />} />,
};

export const EventFatherRoute: PartialRouteObject = {
  path: '/eventBus',
  element: <Route element={<EventBusFather />} />,
};

export const routeList = [FatherRoute, EventFatherRoute];
