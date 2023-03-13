import { Box, Heading } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const MoreVisits = () => {
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
      categories: ['Google', 'Facebook', 'Wordpress', 'php', 'Java'],
      labels: {
        show: false,
      },
    },
  };

  const series: ApexOptions['series'] = [
    {
      name: 'visitas',
      data: [100, 50, 30, 15, 2],
    },
  ];

  return (
    <Box padding={1} shadow={10}>
      <Heading as='h2' size='sm'>
        Más visitas
      </Heading>
      <Box>
        <Chart type='bar' options={options} series={series} />
      </Box>
    </Box>
  );
};

export default MoreVisits;
