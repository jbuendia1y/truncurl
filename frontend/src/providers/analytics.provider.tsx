import { useEffect, useState } from 'react';
import { AnalyticsCtx } from '../contexts';
import { Analytics, FilterAnalytics } from '../models/analytics';
import { AnalyticsService } from '../services/analytics.service';

interface Props {
  filters?: FilterAnalytics;
  children: any;
}

const AnalyticsProvider = (props: Props) => {
  const { filters = {}, children } = props;

  const [analytics, setAnalytics] = useState<Analytics>();
  const [filter, setFilter] = useState(filters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscribe = true;
    const analyticsService = new AnalyticsService();

    setLoading(true);
    analyticsService
      .getAnalytics(filter)
      .then((v) => {
        setAnalytics(v);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [filter]);

  const changeFilter = (value: FilterAnalytics = {}) => {
    setFilter(value);
  };

  return (
    <AnalyticsCtx.Provider
      value={{
        filter,
        changeFilter,
        loading,
        analytics,
      }}
    >
      {children}
    </AnalyticsCtx.Provider>
  );
};

export default AnalyticsProvider;
