import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';
// import Father from '@/views/Father';
// import EventBusFather from '@/views/EventBusFather';
// import HooksTest from '@/views/HooksTest';
// import CallbackFather from '@/views/CallbackFather';
// import MemoTest from '@/views/MemoTest';
// import RefTest from '@/views/RefTest';
// import MousePage from '@/views/Mouse';
import RenderProps from '@/views/RenderProps';
// import StudyState from '@/views/studayState';
// import FunState from '@/views/FunState';

export const routeList: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<RenderProps />} />,
  },
];
