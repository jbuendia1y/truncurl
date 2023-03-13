import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { AppBar, Sidenav } from '../../components';
import AnalyticsProvider from '../../providers/analytics.provider';
import { MoreVisits, UsedDevices, VisitsPerDay } from './components';

const Dashboard = () => {
  return (
    <Box display='flex'>
      <Sidenav />
      <Box display='flex' flexDirection='column' width='100%'>
        <AppBar />
        <AnalyticsProvider>
          <Container maxWidth='container.lg'>
            <Heading as='h1' size='2xl' marginY={5}>
              Dashboard
            </Heading>
            <Stack direction={['column', 'column', 'row']} marginBottom={5}>
              <VisitsPerDay />
              <Box minWidth={300}>
                <MoreVisits />
                <MoreVisits />
              </Box>
            </Stack>
            <UsedDevices />
          </Container>
        </AnalyticsProvider>
      </Box>
    </Box>
  );
};

export default Dashboard;
