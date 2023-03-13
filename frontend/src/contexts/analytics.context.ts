import { createContext } from 'react';
import { Analytics, FilterAnalytics } from '../models/analytics';

export interface AnalyticsCtxValue {
  analytics?: Analytics;
  filter?: FilterAnalytics;
  loading: boolean;
  changeFilter: (value?: FilterAnalytics) => void;
}

const AnalyticsCtx = createContext<AnalyticsCtxValue>({
  loading: true,
  changeFilter: () => {},
});

export default AnalyticsCtx;
