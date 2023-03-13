import { Box, Heading } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const UsedDevices = () => {
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
      categories: ['Android', 'Apple', 'Windows', 'Mac', 'Linux'],
      labels: { show: false },
    },
  };

  const series: ApexOptions['series'] = [
    {
      name: 'usados',
      data: [200, 150, 150, 100, 20],
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
