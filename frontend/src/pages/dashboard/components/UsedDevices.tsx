import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import { useAnalytics } from '../../../hooks';

const UsedDevices = () => {
  const { analytics, loading } = useAnalytics();

  if (!analytics || loading) return <Skeleton width='100%' height={150} />;

  const base = analytics.usedDevices.sort((a, b) => b.count - a.count);
  const data = base.map((v) => v.count);
  const categories = base.map((v) => v.device);

  const options: ApexOptions = {
    chart: {
      id: 'used-devices',
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
      labels: { show: false },
    },
  };

  const series: ApexOptions['series'] = [
    {
      name: 'usados',
      data: data,
    },
  ];

  return (
    <Box maxHeight={300} padding={1} shadow={1}>
      <Heading as='h2' size='sm'>
        Dispositivos usados
      </Heading>
      <Box>
        <Chart type='bar' height={150} options={options} series={series} />
      </Box>
    </Box>
  );
};

export default UsedDevices;
