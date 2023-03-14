import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import { useAnalytics } from '../../../hooks';
import { formatDate } from '../../../utils';

const VisitsPerDay = () => {
  const { analytics, loading } = useAnalytics();

  if (!analytics || loading) return <Skeleton width='100%' height={300} />;

  const base = analytics.visitsPerDay;
  const data = base.map((v) => v.count);
  const categories = base.map((v) => formatDate(v.date));

  const options: ApexOptions = {
    chart: {
      id: 'visits-per-day',
      sparkline: { enabled: false },
    },
    yaxis: { show: false },
    xaxis: {
      categories: categories,
    },
  };
  const series: ApexOptions['series'] = [
    {
      name: 'visitas',
      data: data,
    },
  ];

  return (
    <Box padding={1} shadow={1} flexGrow={1}>
      <Heading as='h2' size='sm'>
        Visitas por día
      </Heading>
      <Box>
        <Chart type='line' options={options} series={series} />
      </Box>
    </Box>
  );
};

export default VisitsPerDay;
