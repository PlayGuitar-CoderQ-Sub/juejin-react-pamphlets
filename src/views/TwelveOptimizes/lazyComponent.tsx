import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./test'));

export default function Index() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
