import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { AppBar, Sidenav } from '../../components';
import { MoreVisits, UsedDevices, VisitsPerDay } from './components';

const Dashboard = () => {
  return (
    <Box display='flex'>
      <Sidenav />
      <Box display='flex' flexDirection='column' width='100%'>
        <AppBar />
        <Container maxWidth='container.lg'>
          <Heading as='h1' size='2xl' marginY={5}>
            Dashboard
          </Heading>
          <Stack direction='row' flexWrap='wrap'>
            <VisitsPerDay />
            <Box>
              <MoreVisits />
              <MoreVisits />
            </Box>
          </Stack>
          <UsedDevices />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
