import { lazy, Suspense } from 'react';

const LazyLoadRoute = (component: keyof typeof import('../pages/index')) => {
  const LazyElement = lazy(() =>
    import('../pages').then((m) => ({ default: m[component] }))
  );

  return (
    <Suspense fallback='Loading...'>
      <LazyElement />
    </Suspense>
  );
};

export default LazyLoadRoute;
