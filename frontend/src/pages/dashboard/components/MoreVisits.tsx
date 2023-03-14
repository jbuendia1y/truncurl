import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import { useAnalytics } from '../../../hooks';

const MoreVisits = () => {
  const { analytics, loading } = useAnalytics();

  if (!analytics || loading) return <Skeleton height={150} />;

  const base = analytics.moreVisits.sort((a, b) => b.count - a.count);
  const data = base.map((v) => v.count);
  const categories = base.map((v) => v.link.name || v.link.hash);

  const options: ApexOptions = {
    chart: {
      id: 'more-visits',
      selection: {
        enabled: false,
      },
      toolbar: { show: false },
      sparkline: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
    },
  };

  const series: ApexOptions['series'] = [
    {
      name: 'visitas',
      data: data,
    },
  ];

  return (
    <Box padding={1} shadow={10}>
      <Heading as='h2' size='sm'>
        Más visitas
      </Heading>
      <Box>
        <Chart type='bar' height={150} options={options} series={series} />
      </Box>
    </Box>
  );
};

export default MoreVisits;
