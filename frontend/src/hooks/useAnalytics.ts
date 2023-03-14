import { useContext } from 'react';
import { AnalyticsCtx } from '../contexts';

const useAnalytics = () => {
  const ctx = useContext(AnalyticsCtx);
  return ctx;
};

export default useAnalytics;
