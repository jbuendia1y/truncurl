import { Box, Heading } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const VisitsPerDay = () => {
  const options: ApexOptions = {
    chart: {
      id: 'visits-per-day',
      sparkline: { enabled: false },
    },
    yaxis: { show: false },
    xaxis: {
      categories: ['01/02/22', '02/02/22', '03/02/22', '04/02/22', '05/02/22'],
    },
  };
  const series: ApexOptions['series'] = [
    {
      name: 'visitas',
      data: [100, 200, 40, 50, 100],
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
