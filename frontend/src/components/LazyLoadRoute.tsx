import { lazy, Suspense } from 'react';

const LazyLoadRoute = (path: string, component?: string) => {
  let computedPath = '../pages';
  if (path.length !== 0) computedPath += '/' + path;

  const LazyElement = lazy(() =>
    import(computedPath).then((m) =>
      component ? { default: m[component] } : m
    )
  );

  return (
    <Suspense fallback='Loading...'>
      <LazyElement />
    </Suspense>
  );
};

export default LazyLoadRoute;
