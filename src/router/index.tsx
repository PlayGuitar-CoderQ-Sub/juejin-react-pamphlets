import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { routeList } from './model';

export const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};
